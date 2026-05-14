// KCV Electric — bilingual toggle + small interactions

(function () {
  const STORAGE_KEY = 'kcv-lang';
  const SUPPORTED = ['en', 'es'];

  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  const langFlag = document.querySelector('.lang-flag');
  const yearEl = document.getElementById('year');

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
      if (!value) return;
      if (el.tagName === 'INPUT' && el.placeholder !== undefined && el.type !== 'submit') {
        // not used here, but safe
      }
      el.textContent = value;
    });
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    if (langFlag) langFlag.textContent = lang === 'en' ? '\u{1F1FA}\u{1F1F8}' : '\u{1F1F2}\u{1F1FD}';
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function toggleLang() {
    const current = document.documentElement.lang === 'es' ? 'es' : 'en';
    applyLang(current === 'en' ? 'es' : 'en');
  }

  // Initialize
  applyLang(getStoredLang());
  if (langToggle) langToggle.addEventListener('click', toggleLang);

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
      const headerOffset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
