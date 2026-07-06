// Construit les cartes destinations (à partir de DESTINATIONS) et la fiche détail (modal).
// Toute la carte est cliquable ; seul le lien "Découvrir" ou le bouton "Réserver" ouvrent
// directement via data-open.
import { DESTINATIONS } from '../data/destinations.js';
import { DEST_ILLUSTRATIONS } from '../data/illustrations.js';
import { initCarousel } from './carousel.js';
import { updateBookingSummary } from './booking.js';

export function initDestinations() {
  const grid = document.querySelector('.destinations-grid');
  if (!grid) return;

  Object.entries(DESTINATIONS).forEach(([key, d]) => {
    const card = document.createElement('article');
    card.className = 'dest-card reveal';
    card.dataset.dest = key;
    card.innerHTML = `
      <div class="dest-portal">
        ${DEST_ILLUSTRATIONS[key]}
        <img class="dest-photo" src="images/destination-${key}.jpg" alt="${d.name}" loading="lazy"
             onerror="this.style.display='none';">
        <span class="year-tag">${d.era}</span>
        <div class="frame"></div>
      </div>
      <div class="dest-body">
        <h3>${d.name}</h3>
        <div class="tagline">${d.tagline}</div>
        <p class="desc">${d.short}</p>
        <div class="dest-footer">
          <div class="dest-price">${d.price} <small>Chronops / pers.</small></div>
          <a class="dest-link" href="#" data-open="${key}">Découvrir →</a>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  const overlay = document.querySelector('.detail-overlay');
  const panel = document.querySelector('.detail-panel');

  function openDetail(key) {
    const d = DESTINATIONS[key];
    panel.innerHTML = `
      <div class="eyebrow">
        <span>${d.era}</span>
        <button class="detail-close" aria-label="Fermer">✕</button>
      </div>
      <div class="detail-portal">
        ${DEST_ILLUSTRATIONS[key]}
        <img class="dest-photo" src="images/destination-${key}.jpg" alt="${d.name}" loading="lazy"
             onerror="this.style.display='none';">
      </div>
      <h3>${d.name}</h3>
      <div class="tagline">${d.tagline}</div>
      <p>${d.long}</p>
      <div class="detail-facts">
        <div><span>Durée</span>${d.duration}</div>
        <div><span>Niveau de risque</span>${d.risk}</div>
        <div><span>Tarif</span>${d.price} Ch.</div>
      </div>

      <h4 class="detail-subhead">Ce que vous vivrez</h4>
      <div class="detail-highlights">
        ${d.highlights.map(h => `
          <div class="highlight-card">
            <h5>${h.title}</h5>
            <p>${h.desc}</p>
          </div>`).join('')}
      </div>

      <h4 class="detail-subhead">Un avant-goût</h4>
      <div class="detail-gallery">
        ${d.gallery.map(imgKey => `
          <div class="gallery-thumb">
            <img src="images/${imgKey}.webp" alt="${d.name}" loading="lazy" onerror="this.parentElement.style.display='none';">
          </div>`).join('')}
      </div>

      <h4 class="detail-subhead">Itinéraire</h4>
      <div class="detail-itinerary">
        ${d.itinerary.map(step => `
          <div class="itinerary-row">
            <span class="itinerary-day">${step.day}</span>
            <div>
              <strong>${step.title}</strong>
              <p>${step.desc}</p>
            </div>
          </div>`).join('')}
      </div>

      <h4 class="detail-subhead">Compris dans le voyage</h4>
      <ul class="detail-includes">
        ${d.includes.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <div class="detail-price-bar">
        <div>
          <span class="detail-price-label">À partir de</span>
          <span class="detail-price-value">${d.price} Chronops</span>
        </div>
        <a href="#booking" class="btn btn-primary" data-open="${key}">Réserver ce voyage</a>
      </div>
    `;
    overlay.classList.add('is-open');
    panel.querySelector('.detail-close').addEventListener('click', closeDetail);
    const bookBtn = panel.querySelector('[data-open]');
    bookBtn.addEventListener('click', () => {
      closeDetail();
      const select = document.getElementById('booking-destination');
      if (select) select.value = key;
      updateBookingSummary();
    });
  }
  function closeDetail() { overlay.classList.remove('is-open'); }

  grid.addEventListener('click', (e) => {
    const link = e.target.closest('[data-open]');
    if (link) { e.preventDefault(); openDetail(link.dataset.open); return; }
    const card = e.target.closest('.dest-card');
    if (card) { openDetail(card.dataset.dest); }
  });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeDetail(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDetail(); });

  initCarousel(grid);
}
