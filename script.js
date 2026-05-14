// KCV Electric — interactions
// (bilingual toggle, open-now indicator, hamburger, scroll fades)

(function () {
  const STORAGE_KEY = 'kcv-lang';
  const SUPPORTED = ['en', 'es'];

  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  const langFlag = document.querySelector('.lang-flag');
  const yearEl = document.getElementById('year');
  const hamburger = document.getElementById('hamburger');
  const primaryNav = document.getElementById('primaryNav');
  const statusPill = document.getElementById('statusPill');
  const statusText = document.getElementById('statusText');

  function getStoredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'en').slice(0, 2);
    return SUPPORTED.includes(browser) ? browser : 'en';
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach((el) => {
      const value = el.getAttribute('data-' + lang);
      if (value) el.textContent = value;
    });
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    if (langFlag) langFlag.textContent = lang === 'en' ? '\u{1F1FA}\u{1F1F8}' : '\u{1F1F2}\u{1F1FD}';
    localStorage.setItem(STORAGE_KEY, lang);
    updateStatus(lang);
  }

  function toggleLang() {
    const current = document.documentElement.lang === 'es' ? 'es' : 'en';
    applyLang(current === 'en' ? 'es' : 'en');
  }

  // Open Now indicator — Mon-Sat 7am-7pm
  function isOpenNow() {
    // Use America/Los_Angeles via locale options
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      weekday: 'short',
      hour: 'numeric',
      hour12: false,
    });
    const parts = fmt.formatToParts(new Date()).reduce((acc, p) => {
      acc[p.type] = p.value;
      return acc;
    }, {});
    const day = parts.weekday; // Mon, Tue, ... Sun
    const hour = parseInt(parts.hour, 10);
    if (day === 'Sun') return false;
    return hour >= 7 && hour < 19;
  }

  function updateStatus(lang) {
    if (!statusPill || !statusText) return;
    const open = isOpenNow();
    statusPill.classList.toggle('is-closed', !open);
    const key = open ? 'data-' + lang + '-open' : 'data-' + lang + '-closed';
    const msg = statusText.getAttribute(key);
    if (msg) statusText.textContent = msg;
  }

  // Mobile hamburger
  if (hamburger && primaryNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    // Close menu when a nav link is clicked
    primaryNav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // Initialize language + status
  applyLang(getStoredLang());
  if (langToggle) langToggle.addEventListener('click', toggleLang);

  // Refresh status every minute
  setInterval(() => updateStatus(document.documentElement.lang === 'es' ? 'es' : 'en'), 60_000);

  // Footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth-scroll offset for sticky header
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Scroll-triggered fade-in
  const fadeTargets = document.querySelectorAll(
    '.service-card, .gallery-item, .testimonial-card, .how-step, .guarantee, .faq-item, .stat, .city-grid li'
  );
  if ('IntersectionObserver' in window && fadeTargets.length) {
    fadeTargets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeTargets.forEach((el) => io.observe(el));
  }
})();
