/**
 * CallSetter.ai Landing Page - ROI Calculator
 * Real-time calculation of lost revenue based on lead response time
 */

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function calculateLostRevenue() {
  // Get input values
  const leadsPerMonth = parseFloat(document.getElementById('leadsPerMonth').value) || 0;
  const closeRate = parseFloat(document.getElementById('closeRate').value) || 0;
  const revenuePerCustomer = parseFloat(document.getElementById('revenuePerCustomer').value) || 0;

  // Calculate current revenue
  const currentCustomers = leadsPerMonth * (closeRate / 100);
  const currentRevenue = currentCustomers * revenuePerCustomer;

  // With 20% lift from faster response (as per assumption)
  const liftMultiplier = 1.20;
  const potentialCustomers = currentCustomers * liftMultiplier;
  const potentialRevenue = potentialCustomers * revenuePerCustomer;

  // Calculate additional revenue (potential gain)
  const additionalMonthly = potentialRevenue - currentRevenue;
  const additionalYearly = additionalMonthly * 12;

  // Update display
  const monthlyLossEl = document.getElementById('monthlyLoss');
  const yearlyLossEl = document.getElementById('yearlyLoss');

  if (monthlyLossEl) {
    monthlyLossEl.textContent = formatCurrency(Math.max(0, additionalMonthly));
  }

  if (yearlyLossEl) {
    yearlyLossEl.textContent = formatCurrency(Math.max(0, additionalYearly));
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Get all calculator inputs
  const leadsInput = document.getElementById('leadsPerMonth');
  const closeRateInput = document.getElementById('closeRate');
  const revenueInput = document.getElementById('revenuePerCustomer');

  // Add event listeners for real-time updates
  if (leadsInput) {
    leadsInput.addEventListener('input', calculateLostRevenue);
    leadsInput.addEventListener('change', calculateLostRevenue);
  }

  if (closeRateInput) {
    closeRateInput.addEventListener('input', calculateLostRevenue);
    closeRateInput.addEventListener('change', calculateLostRevenue);
  }

  if (revenueInput) {
    revenueInput.addEventListener('input', calculateLostRevenue);
    revenueInput.addEventListener('change', calculateLostRevenue);
  }

  // Calculate initial values
  calculateLostRevenue();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

