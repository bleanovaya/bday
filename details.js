document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.item-block');
  if (!gallery) return;

  const track = gallery.querySelector('.outfit-track');
  const btnLeft = gallery.querySelector('.scroll-btn.left');
  const btnRight = gallery.querySelector('.scroll-btn.right');

  if (track && btnLeft && btnRight) {
    btnLeft.addEventListener('click', () => {
      track.scrollBy({ left: -310, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      track.scrollBy({ left: 310, behavior: 'smooth' });
    });
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      let delta = startX - endX;
      if (Math.abs(delta) > 50) {
        track.scrollBy({ left: delta, behavior: 'smooth' });
      }
    });
    track.addEventListener('mousemove', (e) => {
  const bounds = track.getBoundingClientRect();
  const x = e.clientX - bounds.left;

  if (x < 50) {
    track.scrollBy({ left: -20, behavior: 'auto' });
  } else if (x > bounds.width - 100) {
    track.scrollBy({ left: 5, behavior: 'auto' });
  }
});

  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const date = new Date("2025-09-20T18:00:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = date - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.textContent = `Осталось ${days} дней до Lean-Day`;
}

const bgMusic = new Audio('assets/mp3/jptrack.mp3');
document.querySelector('.cta-button').addEventListener('click', () => {
  bgMusic.loop = true;
  bgMusic.volume = 0.5;
  bgMusic.play();
});

});



