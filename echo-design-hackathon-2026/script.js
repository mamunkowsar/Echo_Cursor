/**
 * EchoLogyX Design Hackathon 2026 — lightweight client-side behavior.
 * Notes:
 * - Registration/submission forms are stored in localStorage (demo mode).
 * - Countdown start time is configurable and stored locally.
 */

const LS_KEYS = {
  eventStartISO: "echologyx:eventStartISO",
  registrants: "echologyx:registrants",
  submissions: "echologyx:submissions",
};

const DEFAULT_EVENT_START_ISO = "2026-06-20T10:00:00";
const DEFAULT_FOCUS_SECONDS = 25 * 60;

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function safeJSONParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function toISOWithoutSeconds(date) {
  // datetime-local expects "YYYY-MM-DDTHH:mm"
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours(),
  )}:${pad(date.getMinutes())}`;
}

function formatYMD(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  window.clearTimeout(toast._t);
  toast._t = window.setTimeout(() => el.classList.remove("show"), 2400);
}

function getEventStartISO() {
  return localStorage.getItem(LS_KEYS.eventStartISO) || DEFAULT_EVENT_START_ISO;
}

function setEventStartISO(iso) {
  localStorage.setItem(LS_KEYS.eventStartISO, iso);
}

function parseLocalDateTimeISO(isoLike) {
  // "YYYY-MM-DDTHH:mm" or "YYYY-MM-DDTHH:mm:ss"
  const d = new Date(isoLike);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function updateEventDateLabel() {
  const iso = getEventStartISO();
  const d = parseLocalDateTimeISO(iso);
  const label = $("#eventDateLabel");
  if (label) label.textContent = d ? formatYMD(d) : "—";
}

function renderCountdown() {
  const iso = getEventStartISO();
  const start = parseLocalDateTimeISO(iso);
  const parts = {
    days: $('[data-part="days"]'),
    hours: $('[data-part="hours"]'),
    minutes: $('[data-part="minutes"]'),
    seconds: $('[data-part="seconds"]'),
  };
  if (!start) {
    Object.values(parts).forEach((el) => {
      if (el) el.textContent = "--";
    });
    return;
  }

  const now = new Date();
  let diffMs = start.getTime() - now.getTime();
  if (diffMs < 0) diffMs = 0;

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (parts.days) parts.days.textContent = String(days);
  if (parts.hours) parts.hours.textContent = String(hours).padStart(2, "0");
  if (parts.minutes) parts.minutes.textContent = String(minutes).padStart(2, "0");
  if (parts.seconds) parts.seconds.textContent = String(seconds).padStart(2, "0");
}

function setupDateModal() {
  const modal = $("#dateModal");
  const editBtn = $("#editDateBtn");
  const input = $("#eventDateTime");
  const form = $("#dateForm");

  if (!modal || !editBtn || !input || !form) return;

  editBtn.addEventListener("click", () => {
    const current = parseLocalDateTimeISO(getEventStartISO()) || new Date();
    input.value = toISOWithoutSeconds(current);
    modal.showModal();
  });

  form.addEventListener("submit", () => {
    // submit in a dialog sets returnValue. We'll handle via close event.
  });

  modal.addEventListener("close", () => {
    if (modal.returnValue !== "confirm") return;
    const value = input.value; // "YYYY-MM-DDTHH:mm"
    if (!value) return;
    setEventStartISO(value);
    updateEventDateLabel();
    renderCountdown();
    toast("Event start time updated.");
  });
}

function setupNavToggle() {
  const btn = $(".nav-toggle");
  const nav = $("#site-nav");
  if (!btn || !nav) return;

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  // Close on navigation click (mobile)
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setOpen(false);
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function loadRegistrants() {
  return safeJSONParse(localStorage.getItem(LS_KEYS.registrants) || "[]", []);
}

function saveRegistrants(registrants) {
  localStorage.setItem(LS_KEYS.registrants, JSON.stringify(registrants));
}

function renderRegistrants() {
  const tbody = $("#registrantsTbody");
  if (!tbody) return;

  const registrants = loadRegistrants();
  tbody.innerHTML = "";

  if (!registrants.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="3" style="color: rgba(255,255,255,.6)">No registrations yet.</td>`;
    tbody.appendChild(tr);
    return;
  }

  for (const r of registrants.slice(-50).reverse()) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${escapeHTML(r.name)}</td>
      <td>${escapeHTML(r.email)}</td>
      <td>${escapeHTML(r.role)}</td>
    `;
    tbody.appendChild(tr);
  }
}

function setupRegistrationForm() {
  const form = $("#registrationForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const role = String(fd.get("role") || "").trim();
    const team = String(fd.get("team") || "").trim();
    const notes = String(fd.get("notes") || "").trim();

    if (!name || !email || !role) return;

    const registrants = loadRegistrants();
    registrants.push({
      id: cryptoRandomId(),
      name,
      email,
      role,
      team,
      notes,
      createdAt: new Date().toISOString(),
    });
    saveRegistrants(registrants);
    form.reset();
    renderRegistrants();
    toast("Registered successfully (saved locally).");
  });
}

function loadSubmissions() {
  return safeJSONParse(localStorage.getItem(LS_KEYS.submissions) || "[]", []);
}

function saveSubmissions(submissions) {
  localStorage.setItem(LS_KEYS.submissions, JSON.stringify(submissions));
}

function renderSubmissions() {
  const list = $("#submissionsList");
  if (!list) return;

  const submissions = loadSubmissions();
  list.innerHTML = "";

  if (!submissions.length) {
    const empty = document.createElement("div");
    empty.className = "submission";
    empty.innerHTML = `<div class="submission-meta">No submissions yet.</div>`;
    list.appendChild(empty);
    return;
  }

  for (const s of submissions.slice(-50).reverse()) {
    const item = document.createElement("div");
    item.className = "submission";
    item.innerHTML = `
      <div class="submission-head">
        <div class="submission-title">${escapeHTML(s.title)}</div>
        <div class="submission-meta">${escapeHTML(s.team)} • ${escapeHTML(s.category)}</div>
      </div>
      <div class="submission-meta" style="margin-top: 6px">${escapeHTML(s.summary)}</div>
      <div class="submission-meta" style="margin-top: 8px">
        Link: <a href="${escapeAttr(s.link)}" target="_blank" rel="noreferrer noopener">${escapeHTML(s.link)}</a>
      </div>
    `;
    list.appendChild(item);
  }
}

function setupSubmissionForm() {
  const form = $("#submissionForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const team = String(fd.get("team") || "").trim();
    const title = String(fd.get("title") || "").trim();
    const link = String(fd.get("link") || "").trim();
    const category = String(fd.get("category") || "").trim();
    const summary = String(fd.get("summary") || "").trim();

    if (!team || !title || !link || !category || !summary) return;

    const submissions = loadSubmissions();
    submissions.push({
      id: cryptoRandomId(),
      team,
      title,
      link,
      category,
      summary,
      createdAt: new Date().toISOString(),
    });
    saveSubmissions(submissions);
    form.reset();
    renderSubmissions();
    toast("Submission saved (local).");
  });
}

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(str) {
  // basic attribute escaping
  return escapeHTML(str).replaceAll("`", "&#096;");
}

function cryptoRandomId() {
  // short, non-crypto-critical identifier
  if (window.crypto && crypto.getRandomValues) {
    const buf = new Uint32Array(2);
    crypto.getRandomValues(buf);
    return `${buf[0].toString(16)}${buf[1].toString(16)}`;
  }
  return `${Date.now().toString(16)}${Math.random().toString(16).slice(2)}`;
}

function setupLiveClock() {
  const clock = $("#liveClock");
  const meta = $("#liveClockMeta");
  if (!clock || !meta) return;

  const tick = () => {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    meta.textContent = now.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "short", day: "numeric" });
  };
  tick();
  window.setInterval(tick, 1000);
}

function setupFocusTimer() {
  const display = $("#focusTimer");
  const startBtn = $("#focusStartBtn");
  const pauseBtn = $("#focusPauseBtn");
  const resetBtn = $("#focusResetBtn");
  if (!display || !startBtn || !pauseBtn || !resetBtn) return;

  let remaining = DEFAULT_FOCUS_SECONDS;
  let interval = null;

  const render = () => {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    display.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const start = () => {
    if (interval) return;
    interval = window.setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        remaining = 0;
        stop();
        toast("Focus timer done.");
      }
      render();
    }, 1000);
  };

  const stop = () => {
    if (!interval) return;
    window.clearInterval(interval);
    interval = null;
  };

  const reset = () => {
    stop();
    remaining = DEFAULT_FOCUS_SECONDS;
    render();
    toast("Focus timer reset.");
  };

  startBtn.addEventListener("click", () => {
    start();
    toast("Focus timer started.");
  });
  pauseBtn.addEventListener("click", () => {
    stop();
    toast("Focus timer paused.");
  });
  resetBtn.addEventListener("click", () => reset());

  render();
}

function setupFooterYear() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function main() {
  setupNavToggle();
  setupDateModal();
  setupFooterYear();

  updateEventDateLabel();
  renderCountdown();
  window.setInterval(renderCountdown, 250);

  setupRegistrationForm();
  setupSubmissionForm();
  renderRegistrants();
  renderSubmissions();

  setupLiveClock();
  setupFocusTimer();
}

document.addEventListener("DOMContentLoaded", main);


