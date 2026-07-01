// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Typed role effect =====
const roles = [
  'Software Developer',
  'MIS Graduate',
  'OOP & Data Structures',
  'Future Front-End Engineer'
];
const typedEl = document.getElementById('typedRole');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];

  if(!deleting){
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 35 : 70);
}
typeLoop();

// ===== Nav scroll state =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ===== Mobile menu =====
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Background music toggle =====
const musicBtn = document.getElementById('musicBtn');
const bgAudio = document.getElementById('bgAudio');

musicBtn.addEventListener('click', () => {
  if(bgAudio.paused){
    bgAudio.play().then(() => {
      musicBtn.classList.add('playing');
    }).catch(() => {
      // No audio file added yet, or browser blocked playback
      musicBtn.classList.remove('playing');
      alert('Add a music file at assets/music.mp3 to enable this button.');
    });
  } else {
    bgAudio.pause();
    musicBtn.classList.remove('playing');
  }
});
