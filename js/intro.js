const shineBtn = document.getElementById('shine-btn');
const intro = document.getElementById('intro');
const overlay = document.querySelector('.light-overlay');
const content = document.getElementById('content');

shineBtn.addEventListener('click', () => {
  // trava clique duplo
  shineBtn.disabled = true;

  // inicia luz
  overlay.style.opacity = '1';
  overlay.style.transform = 'scale(1)';

  // esconde botão suavemente
  shineBtn.style.opacity = '0';

  // após animação, revela conteúdo
setTimeout(() => {
  intro.style.display = 'none';

  content.classList.remove('hidden');

  // pequeno atraso para suavidade
  setTimeout(() => {
    content.classList.add('visible');
  }, 100);

  document.body.style.background = '#fff';
  document.body.style.color = '#000';
}, 2200);
});