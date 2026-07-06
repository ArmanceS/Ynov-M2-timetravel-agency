// Logique du quiz de recommandation : affichage pas-à-pas, calcul du score
// et mise en avant de la destination la plus proche du profil du visiteur.
import { DESTINATIONS } from '../data/destinations.js';
import { QUIZ_QUESTIONS } from '../data/quiz-questions.js';

export function initQuiz() {
  const wrap = document.querySelector('.quiz-wrap');
  if (!wrap) return;

  let current = 0;
  const totals = { culture: 0, nature: 0, art: 0, urbain: 0 };

  const progressEl = wrap.querySelector('.quiz-progress');
  const stepsEl = wrap.querySelector('.quiz-steps');
  const resultEl = wrap.querySelector('.quiz-result');

  QUIZ_QUESTIONS.forEach((q, i) => {
    const bar = document.createElement('span');
    progressEl.appendChild(bar);
    const step = document.createElement('div');
    step.className = 'quiz-step' + (i === 0 ? ' active' : '');
    step.innerHTML = `
      <div class="q-num">Question ${i + 1} / ${QUIZ_QUESTIONS.length}</div>
      <h3>${q.q}</h3>
      <div class="quiz-options">
        ${q.options.map((o, oi) => `<button class="quiz-option" data-q="${i}" data-o="${oi}">${o.label}</button>`).join('')}
      </div>`;
    stepsEl.appendChild(step);
  });

  function updateProgress() {
    progressEl.querySelectorAll('span').forEach((bar, i) => {
      bar.classList.remove('active', 'done');
      if (i < current) bar.classList.add('done');
      else if (i === current) bar.classList.add('active');
    });
  }
  updateProgress();

  function showResult() {
    const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
    const map = { culture: 'florence', nature: 'cretace', art: 'florence', urbain: 'paris' };
    // score destinations directly against profiles for more nuance
    let best = null, bestScore = -1;
    Object.entries(DESTINATIONS).forEach(([key, d]) => {
      let s = 0;
      Object.entries(d.profile).forEach(([k, v]) => { s += v * (totals[k] || 0); });
      if (s > bestScore) { bestScore = s; best = key; }
    });
    const d = DESTINATIONS[best];
    resultEl.innerHTML = `
      <span class="result-badge">Destination recommandée</span>
      <h3>${d.name}</h3>
      <p>${d.long}</p>
      <a href="#" class="btn btn-primary" data-open="${best}">Voir cette destination</a>
      <div><button class="quiz-restart">Refaire le quiz</button></div>
    `;
    stepsEl.style.display = 'none';
    progressEl.style.display = 'none';
    resultEl.classList.add('active');

    resultEl.querySelector('[data-open]').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(`.destinations-grid [data-open="${best}"]`)?.click();
    });
    resultEl.querySelector('.quiz-restart').addEventListener('click', resetQuiz);
  }

  function resetQuiz() {
    current = 0;
    Object.keys(totals).forEach(k => totals[k] = 0);
    stepsEl.querySelectorAll('.quiz-step').forEach((s, i) => s.classList.toggle('active', i === 0));
    stepsEl.style.display = '';
    progressEl.style.display = '';
    resultEl.classList.remove('active');
    updateProgress();
  }

  stepsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.quiz-option');
    if (!btn) return;
    const qi = Number(btn.dataset.q);
    const oi = Number(btn.dataset.o);
    const scores = QUIZ_QUESTIONS[qi].options[oi].scores;
    Object.entries(scores).forEach(([k, v]) => { totals[k] += v; });

    const steps = stepsEl.querySelectorAll('.quiz-step');
    steps[qi].classList.remove('active');
    current++;
    if (current < QUIZ_QUESTIONS.length) {
      steps[current].classList.add('active');
      updateProgress();
    } else {
      updateProgress();
      showResult();
    }
  });
}

