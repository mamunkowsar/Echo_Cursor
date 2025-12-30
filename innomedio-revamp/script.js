// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', !isOpen);
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      nav.classList.remove('open');
      return;
    }
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      nav.classList.remove('open');
    }
  });
});

// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Toast notification system
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Lead Bot Modal
const leadBotBtn = document.getElementById('leadBotBtn');
const leadBotModal = document.getElementById('leadBotModal');
const closeLeadBot = document.getElementById('closeLeadBot');

if (leadBotBtn && leadBotModal) {
  leadBotBtn.addEventListener('click', () => {
    leadBotModal.showModal();
  });
}

if (closeLeadBot && leadBotModal) {
  closeLeadBot.addEventListener('click', () => {
    leadBotModal.close();
  });
}

// Close modal on backdrop click
if (leadBotModal) {
  leadBotModal.addEventListener('click', (e) => {
    if (e.target === leadBotModal) {
      leadBotModal.close();
    }
  });
}

// Lead bot option handlers
document.querySelectorAll('.lead-bot-option').forEach(option => {
  option.addEventListener('click', function() {
    const text = this.textContent.trim();
    
    if (text.includes('adviesgesprek')) {
      leadBotModal.close();
      setTimeout(() => {
        appointmentModal.showModal();
      }, 300);
    } else if (text.includes('offerte')) {
      leadBotModal.close();
      showToast('We nemen zo snel mogelijk contact met je op voor een offerte!');
    } else {
      showToast('Bedankt voor je vraag! We nemen zo snel mogelijk contact met je op.');
      setTimeout(() => {
        leadBotModal.close();
      }, 1500);
    }
  });
});

// Appointment Booking Modal
const appointmentBtn = document.getElementById('appointmentBtn');
const appointmentModal = document.getElementById('appointmentModal');
const appointmentForm = document.getElementById('appointmentForm');

if (appointmentBtn && appointmentModal) {
  appointmentBtn.addEventListener('click', () => {
    appointmentModal.showModal();
  });
}

// Close appointment modal
if (appointmentModal) {
  appointmentModal.addEventListener('click', (e) => {
    if (e.target === appointmentModal) {
      appointmentModal.close();
    }
  });
}

// Appointment form submission
if (appointmentForm) {
  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(appointmentForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send this to your backend
    console.log('Appointment request:', data);
    
    showToast('Bedankt! We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.');
    appointmentForm.reset();
    appointmentModal.close();
    
    // In a real implementation, you would send this data to your server
    // fetch('/api/appointments', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  });
}

// Configurator Modal
const configuratorBtn = document.getElementById('configuratorBtn');
const configuratorModal = document.getElementById('configuratorModal');
const closeConfigurator = document.getElementById('closeConfigurator');
const prevStepBtn = document.getElementById('prevStep');
const nextStepBtn = document.getElementById('nextStep');
const requestQuoteBtn = document.getElementById('requestQuoteBtn');

let currentStep = 1;
const totalSteps = 3;
let selectedOptions = {
  goal: null,
  services: []
};

// Service options based on goal
const serviceOptions = {
  strategy: ['Digitale strategie', 'Employer branding', 'Content strategie'],
  branding: ['Huisstijl', 'Logo-ontwerp', 'Videografie', 'Fotografie', 'Grafisch design'],
  development: ['Website', 'E-commerce', 'Webapp', 'Technische analyse'],
  marketing: ['SEO', 'SEA', 'Social media', 'E-mail marketing']
};

if (configuratorBtn && configuratorModal) {
  configuratorBtn.addEventListener('click', () => {
    currentStep = 1;
    selectedOptions = { goal: null, services: [] };
    updateConfiguratorStep();
    configuratorModal.showModal();
  });
}

if (closeConfigurator && configuratorModal) {
  closeConfigurator.addEventListener('click', () => {
    configuratorModal.close();
    resetConfigurator();
  });
}

if (configuratorModal) {
  configuratorModal.addEventListener('click', (e) => {
    if (e.target === configuratorModal) {
      configuratorModal.close();
      resetConfigurator();
    }
  });
}

// Configurator step navigation
if (prevStepBtn) {
  prevStepBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateConfiguratorStep();
    }
  });
}

if (nextStepBtn) {
  nextStepBtn.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      // Validate current step
      if (currentStep === 1 && !selectedOptions.goal) {
        showToast('Selecteer eerst een hoofddoel');
        return;
      }
      if (currentStep === 2 && selectedOptions.services.length === 0) {
        showToast('Selecteer minimaal één dienst');
        return;
      }
      
      currentStep++;
      updateConfiguratorStep();
    }
  });
}

function updateConfiguratorStep() {
  // Update step visibility
  document.querySelectorAll('.configurator-step').forEach((step, index) => {
    step.classList.toggle('active', index + 1 === currentStep);
  });
  
  // Update navigation buttons
  if (prevStepBtn) {
    prevStepBtn.disabled = currentStep === 1;
  }
  
  if (nextStepBtn) {
    if (currentStep === totalSteps) {
      nextStepBtn.style.display = 'none';
    } else {
      nextStepBtn.style.display = 'inline-flex';
      nextStepBtn.textContent = currentStep === totalSteps - 1 ? 'Bekijk resultaat' : 'Volgende';
    }
  }
  
  // Load step 2 options
  if (currentStep === 2) {
    loadServiceOptions();
  }
  
  // Show result in step 3
  if (currentStep === 3) {
    showConfiguratorResult();
  }
}

function loadServiceOptions() {
  const serviceOptionsContainer = document.getElementById('serviceOptions');
  if (!serviceOptionsContainer || !selectedOptions.goal) return;
  
  const options = serviceOptions[selectedOptions.goal] || [];
  serviceOptionsContainer.innerHTML = options.map(service => 
    `<button class="config-option" data-service="${service}">${service}</button>`
  ).join('');
  
  // Add event listeners
  serviceOptionsContainer.querySelectorAll('.config-option').forEach(option => {
    option.addEventListener('click', function() {
      this.classList.toggle('selected');
      const service = this.dataset.service;
      
      if (this.classList.contains('selected')) {
        if (!selectedOptions.services.includes(service)) {
          selectedOptions.services.push(service);
        }
      } else {
        selectedOptions.services = selectedOptions.services.filter(s => s !== service);
      }
    });
  });
}

function showConfiguratorResult() {
  const resultContainer = document.getElementById('configuratorResult');
  if (!resultContainer) return;
  
  const goalText = {
    strategy: 'Meer online zichtbaarheid',
    branding: 'Nieuwe huisstijl/rebranding',
    development: 'Nieuwe website/app',
    marketing: 'Meer leads/verkopen'
  };
  
  resultContainer.innerHTML = `
    <h4>Jouw geselecteerde oplossing:</h4>
    <p><strong>Hoofddoel:</strong> ${goalText[selectedOptions.goal] || 'Niet geselecteerd'}</p>
    <p><strong>Diensten:</strong></p>
    <ul>
      ${selectedOptions.services.map(service => `<li>${service}</li>`).join('')}
    </ul>
    <p>Op basis van jouw selectie kunnen we een op maat gemaakte offerte voor je opstellen.</p>
  `;
}

function resetConfigurator() {
  currentStep = 1;
  selectedOptions = { goal: null, services: [] };
  updateConfiguratorStep();
  
  // Reset all selections
  document.querySelectorAll('.config-option').forEach(option => {
    option.classList.remove('selected');
  });
}

// Goal selection in configurator
document.querySelectorAll('.config-option[data-value]').forEach(option => {
  option.addEventListener('click', function() {
    // Remove previous selection
    document.querySelectorAll('.config-option[data-value]').forEach(opt => {
      opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    this.classList.add('selected');
    selectedOptions.goal = this.dataset.value;
  });
});

// Request quote from configurator
if (requestQuoteBtn) {
  requestQuoteBtn.addEventListener('click', () => {
    configuratorModal.close();
    showToast('Bedankt! We stellen een op maat gemaakte offerte voor je op en nemen zo snel mogelijk contact met je op.');
    resetConfigurator();
    
    // In a real implementation, you would send this data to your server
    // fetch('/api/quotes', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(selectedOptions)
    // });
  });
}

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to your backend
    console.log('Newsletter subscription:', email);
    
    showToast('Bedankt voor je inschrijving!');
    newsletterForm.reset();
    
    // In a real implementation, you would send this to your server
    // fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.case-study-card, .service-card, .why-card, .news-card, .workflow-step');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (leadBotModal && leadBotModal.open) leadBotModal.close();
    if (appointmentModal && appointmentModal.open) appointmentModal.close();
    if (configuratorModal && configuratorModal.open) {
      configuratorModal.close();
      resetConfigurator();
    }
  }
});

