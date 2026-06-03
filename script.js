// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  // Close nav when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

// Contact form — POST to Netlify, then show inline success message
const form = document.getElementById('contact-form');
const successEl = document.getElementById('form-success');

if (form && successEl) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (res.ok) {
        form.hidden = true;
        successEl.hidden = false;
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      showFormError('Something went wrong. Please email dan@estuarydata.io directly.');
    }
  });
}

function validateForm() {
  let valid = true;
  const required = form.querySelectorAll('[required]');

  required.forEach(field => {
    field.classList.remove('error');
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    }
  });

  const emailField = form.querySelector('[type="email"]');
  if (emailField && emailField.value && !emailField.value.includes('@')) {
    emailField.classList.add('error');
    valid = false;
  }

  return valid;
}

function showFormError(message) {
  let errEl = form.querySelector('.form-error-msg');
  if (!errEl) {
    errEl = document.createElement('p');
    errEl.className = 'form-error-msg';
    errEl.style.cssText = 'color:#C0392B;font-size:0.9rem;margin-top:12px;';
    form.appendChild(errEl);
  }
  errEl.textContent = message;
}

// Footer year
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
