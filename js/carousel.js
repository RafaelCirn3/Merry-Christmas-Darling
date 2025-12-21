const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;

function showItem(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');

  // se for o último, mostra o contador
    if (index === items.length - 1) {
    const countdown = document.getElementById('countdown');
    countdown.classList.remove('hidden');

    setTimeout(() => {
        countdown.classList.add('visible');
    }, 100);
    }
prev.addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showItem(current);
});

next.addEventListener('click', () => {
  current = (current + 1) % items.length;
  showItem(current);
});

showItem(current);

}