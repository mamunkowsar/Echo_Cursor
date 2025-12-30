# EchoLogyX Design Hackathon 2026 (Static Site)

This folder contains a lightweight, single-page website for **EchoLogyX Design Hackathon 2026**.

## Files

- `index.html` — page structure (register, submit, timer, rulebook, criteria, prizes, panel)
- `styles.css` — modern responsive styling
- `script.js` — countdown + live clock + focus timer + local form storage
- `variation-2.html` — variation 2 landing page (Designathon-style layout)
- `variation-2.css` — styles for `variation-2.html`

## Run locally

Open `index.html` in a browser, or run a simple static server:

```bash
cd echo-design-hackathon-2026
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

### Variation 2

Open `variation-2.html` in a browser, or visit `http://localhost:5173/echo-design-hackathon-2026/variation-2.html`.

## Notes

- Registration and submissions are saved in your browser `localStorage` (demo mode).
- Click **“Edit date/time”** in the hero countdown card to change the start time (stored locally).


