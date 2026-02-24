// translate.js
const LANGS = ['bs','en','de','fr','ar'];

function getCurrentLang(){
  const m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if(!m) return 'bs';
  const val = decodeURIComponent(m[1]); // /bs/en
  const parts = val.split('/');
  return parts[2] || 'bs';
}

function setLang(to){
  if(!LANGS.includes(to)) return;
  const cookieVal = `/bs/${to}`;
  document.cookie = `googtrans=${cookieVal}; path=/`;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=${location.hostname}`;
  location.reload();
}

function paintActive(){
  const cur = getCurrentLang();
  document.querySelectorAll('.langbtn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === cur);
  });
}

document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.langbtn');
  if(!btn) return;
  setLang(btn.dataset.lang);
});

window.addEventListener('load', paintActive);

// Google translate init (hidden)
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'bs',
    includedLanguages: 'en,de,fr,ar,bs',
    autoDisplay: false
  }, 'google_translate_element');
}
window.googleTranslateElementInit = googleTranslateElementInit;
