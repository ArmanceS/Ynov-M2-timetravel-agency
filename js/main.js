// Point d'entrée de l'application (chargé en <script type="module"> depuis index.html).
// Chaque section du site vit dans son propre module sous js/modules/ ou js/data/ —
// ce fichier se contente d'importer et d'initialiser, rien de plus.
import { initReveal } from './modules/reveal.js';
import { initNav } from './modules/nav.js';
import { buildHeroTicks, initHeroVideo } from './modules/hero.js';
import { initDestinations } from './modules/destinations.js';
import { initQuiz } from './modules/quiz.js';
import { initFaq } from './modules/faq.js';
import { initBooking } from './modules/booking.js';
import { initChatbot } from './modules/chatbot-widget.js';

document.addEventListener('DOMContentLoaded', () => {
  buildHeroTicks();
  initHeroVideo();
  initNav();
  initDestinations();
  initQuiz();
  initFaq();
  initBooking();
  initChatbot();
  initReveal();
});
