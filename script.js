const config = window.siteConfig;

const setBranding = () => {
  document.title = config.companyName;
  const brandName = document.getElementById('brand-name');
  if (brandName) brandName.textContent = config.shortName;

  const brandTag = document.getElementById('brand-tag');
  if (brandTag) brandTag.textContent = config.tagline;

  const footerBrandName = document.getElementById('footer-brand-name');
  if (footerBrandName) footerBrandName.textContent = config.shortName;

  const phoneLink = document.getElementById('phone-link');
  if (phoneLink) {
    phoneLink.href = `tel:${config.phoneHref}`;
    phoneLink.textContent = config.phone;
  }

  const serviceRegion = document.getElementById('service-region');
  if (serviceRegion) serviceRegion.textContent = config.serviceRegion;

  const footerPhone = document.getElementById('footer-phone');
  if (footerPhone) {
    footerPhone.href = `tel:${config.phoneHref}`;
    footerPhone.textContent = config.phone;
  }

  const footerEmail = document.getElementById('footer-email');
  if (footerEmail) {
    footerEmail.href = `mailto:${config.email}`;
    footerEmail.textContent = config.email;
  }
};

const populateHero = () => {
  const kicker = document.getElementById('hero-kicker');
  if (!kicker) return;
  kicker.textContent = config.hero.kicker;

  const title = document.getElementById('hero-title');
  if (title) title.textContent = config.hero.title;

  const text = document.getElementById('hero-text');
  if (text) text.textContent = config.hero.text;

  const pointsWrap = document.getElementById('hero-points');
  if (pointsWrap) pointsWrap.innerHTML = config.hero.points.map(point => `<li>${point}</li>`).join('');

  const availability = document.getElementById('availability-number');
  if (availability) availability.textContent = config.hero.availability;

  const panelInfo = document.querySelector('.panel-figure span');
  if (panelInfo) panelInfo.textContent = config.hero.info;
};

const populateTrustBar = () => {
  const wrap = document.getElementById('trust-metrics');
  if (!wrap || !config.trustMetrics) return;
  wrap.innerHTML = config.trustMetrics
    .map(
      metric => `
        <div class="trust-item">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join('');
};

const populateServices = () => {
  const wrap = document.getElementById('services-grid');
  if (!wrap) return;
  wrap.innerHTML = config.services
    .map(
      service => `
        <article class="service-card">
          <div class="service-icon">${service.icon}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join('');
};

const populateFeatures = () => {
  const wrap = document.getElementById('feature-list');
  if (!wrap) return;
  wrap.innerHTML = config.features
    .map(feature => `
      <div class="feature-item">
        <span class="checkmark">✓</span>
        <p>${feature}</p>
      </div>
    `)
    .join('');
};

const populateProcess = () => {
  const wrap = document.getElementById('process-grid');
  if (!wrap) return;
  wrap.innerHTML = config.process
    .map(
      item => `
        <article class="process-card">
          <span class="process-step">${item.step}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
};

const populateIndustries = () => {
  const wrap = document.getElementById('industry-list');
  if (!wrap) return;
  wrap.innerHTML = config.industries.map(item => `<span>${item}</span>`).join('');
};

const populateTestimonials = () => {
  const wrap = document.getElementById('testimonial-grid');
  if (!wrap) return;
  wrap.innerHTML = config.testimonials
    .map(
      item => `
        <article class="testimonial-card">
          <p class="quote">“${item.quote}”</p>
          <div class="author-block">
            <strong>${item.author}</strong>
            <span>${item.company}</span>
          </div>
        </article>
      `
    )
    .join('');
};



  const selectedTheme = themes[themeName] || themes.sage;
  const root = document.documentElement;

  root.style.setProperty('--accent', selectedTheme.accent);
  root.style.setProperty('--accent-alt', selectedTheme.accentAlt);
  root.style.setProperty('--accent-contrast', selectedTheme.accentContrast);
  root.style.setProperty('--accent-soft', selectedTheme.accentSoft);
  root.style.setProperty('--accent-shadow', selectedTheme.accentShadow);
  root.style.setProperty('--bg', selectedTheme.background);
  root.style.setProperty('--bg-alt', selectedTheme.surface);
  root.style.setProperty('--panel', selectedTheme.panel);
  root.style.setProperty('--card', selectedTheme.card);
  root.style.setProperty('--text', selectedTheme.text);
  root.style.setProperty('--muted', selectedTheme.muted);
  root.style.setProperty('--border', selectedTheme.border);
  root.style.setProperty('--shadow', selectedTheme.shadow);

  const toggleLabel = document.querySelector('.theme-label');
  toggleLabel.textContent = themeName.charAt(0).toUpperCase() + themeName.slice(1);

const attachThemeToggle = () => {
  const toggle = document.querySelector('.theme-toggle');
  let currentTheme = 'sage';

  toggle.addEventListener('click', () => {
    const nextThemes = ['sage', 'night', 'copper'];
    const nextIndex = (nextThemes.indexOf(currentTheme) + 1) % nextThemes.length;
    currentTheme = nextThemes[nextIndex];
    applyTheme(currentTheme);
  });
};

const init = () => {
  setBranding();
  populateHero();
  populateTrustBar();
  populateServices();
  populateFeatures();
  populateProcess();
  populateIndustries();
  populateTestimonials();
  applyTheme();
  attachThemeToggle();
};

window.addEventListener('DOMContentLoaded', init);
