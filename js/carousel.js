const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const finalAction = document.getElementById('final-action');
const finalMessage = document.getElementById('final-message');
const loveBtn = document.getElementById('love-btn');
const countdown = document.getElementById('countdown');

let current = 0;

function showItem(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');

  // Se chegou ao último card
  if (index === items.length - 1) {
    finalAction.classList.remove('hidden');
    setTimeout(() => {
      finalAction.classList.add('visible');
    }, 100); document.querySelector('.carousel').classList.add('locked');
} else {
  finalAction.classList.remove('visible');
  finalAction.classList.add('hidden');

  document.querySelector('.carousel').classList.remove('locked');

  countdown.classList.remove('visible');
  countdown.classList.add('hidden');
}}

// navegação
prev.addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showItem(current);
});

next.addEventListener('click', () => {
  current = (current + 1) % items.length;
  showItem(current);
});

// botão final
loveBtn.addEventListener('click', () => {
  finalAction.classList.remove('visible');
  finalMessage.classList.add('visible');

  setTimeout(() => {
    finalAction.classList.add('hidden');

    countdown.classList.remove('hidden');
    setTimeout(() => {
      countdown.classList.add('visible');
    }, 100);
  }, 600);
});

// inicializa
showItem(current);