// Carrousel des destinations : 3 cartes visibles sur desktop (≥901px), flèches prev/next.
// Sur mobile, le CSS reprend la main et empile les cartes (voir css/responsive.css).
export function initCarousel(track) {
  const carousel = document.querySelector('.destinations-carousel');
  const viewport = document.querySelector('.destinations-viewport');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  if (!carousel || !viewport || !track) return;

  const visibleCount = 3;
  let index = 0;

  const isDesktop = () => window.matchMedia('(min-width: 901px)').matches;
  const maxIndex = () => Math.max(0, track.children.length - visibleCount);

  function update() {
    if (!isDesktop() || track.children.length <= visibleCount) {
      track.style.transform = '';
      prevBtn.style.visibility = 'hidden';
      nextBtn.style.visibility = 'hidden';
      return;
    }
    prevBtn.style.visibility = 'visible';
    nextBtn.style.visibility = 'visible';
    const cardRect = track.children[0].getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(track).gap || '0');
    const step = cardRect.width + gap;
    track.style.transform = `translateX(${-(index * step)}px)`;
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= maxIndex();
  }

  prevBtn.addEventListener('click', () => { index = Math.max(0, index - 1); update(); });
  nextBtn.addEventListener('click', () => { index = Math.min(maxIndex(), index + 1); update(); });
  window.addEventListener('resize', () => { index = Math.min(index, maxIndex()); update(); });

  update();
}

