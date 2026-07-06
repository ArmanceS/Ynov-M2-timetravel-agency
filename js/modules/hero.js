// Fond du hero : cadran animé (ticks) + gestion de la vidéo en boucle.

export function buildHeroTicks() {
  const core = document.querySelector('.hero-instrument .ring');
  if (!core) return;
  for (let i = 0; i < 12; i++) {
    const t = document.createElement('div');
    t.className = 'tick';
    t.style.transform = `rotate(${i * 30}deg)`;
    core.appendChild(t);
  }
}


export function initHeroVideo() {
  const video = document.querySelector('.hero-video');
  if (!video) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    video.removeAttribute('autoplay');
    video.pause();
  }
  // Si la vidéo ne se charge pas (fichier absent), on masque proprement le calque vidéo
  video.addEventListener('error', () => { video.style.display = 'none'; });
}

