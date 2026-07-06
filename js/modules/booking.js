// Formulaire de réservation : récapitulatif dynamique + confirmation à la soumission.
// updateBookingSummary() est exportée pour pouvoir être appelée depuis destinations.js
// (quand on clique sur "Réserver ce voyage" dans la fiche détail d'une destination).
import { DESTINATIONS } from '../data/destinations.js';

export function updateBookingSummary() {
  const select = document.getElementById('booking-destination');
  const summary = document.querySelector('.booking-summary');
  if (!select || !summary) return;
  const d = DESTINATIONS[select.value];
  if (!d) return;
  summary.querySelector('[data-sum="dest"]').textContent = d.name;
  summary.querySelector('[data-sum="duration"]').textContent = d.duration;
  summary.querySelector('[data-sum="price"]').textContent = d.price + ' Chronops';
  summary.querySelector('.summary-total span:last-child').textContent = d.price + ' Ch.';
}

export function initBooking() {
  const form = document.querySelector('.booking-form');
  if (!form) return;
  const select = document.getElementById('booking-destination');
  const confirmBox = document.querySelector('.confirm-box');

  select.addEventListener('change', updateBookingSummary);
  updateBookingSummary();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    confirmBox.classList.add('show');
    const d = DESTINATIONS[select.value];
    confirmBox.querySelector('[data-confirm="dest"]').textContent = d.name;
  });
}
