// =========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.reveal-on-scroll').forEach(element => {
  observer.observe(element);
});


// =========================
// FADE-IN DA PÁGINA
// =========================

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


// =========================
// ANO AUTOMÁTICO DO FOOTER
// =========================

const anoAtual = document.getElementById('ano-atual');

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
