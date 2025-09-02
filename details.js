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

    // Свайп
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
});



