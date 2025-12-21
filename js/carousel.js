const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;

function showItem(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');

  // mostra o contador somente no último card
  const countdown = document.getElementById('countdown');

  if (index === items.length - 1) {
    countdown.classList.remove('hidden');
    setTimeout(() => {
      countdown.classList.add('visible');
    }, 100);
  } else {
    countdown.classList.remove('visible');
    countdown.classList.add('hidden');
  }
}

// eventos dos botões
prev.addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showItem(current);
});

next.addEventListener('click', () => {
  current = (current + 1) % items.length;
  showItem(current);
});

// inicializa
showItem(current);
