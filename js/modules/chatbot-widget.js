// Widget du chatbot : ouverture/fermeture, affichage des messages, indicateur
// de frappe, et branchement sur le moteur de réponses (chatbot-brain.js).
import { botAnswer } from './chatbot-brain.js';

export function initChatbot() {
  const launcher = document.querySelector('.chat-launcher');
  const win = document.querySelector('.chat-window');
  const body = document.querySelector('.chat-body');
  const form = document.querySelector('.chat-input-row');
  const input = form?.querySelector('input');
  const suggestions = document.querySelector('.chat-suggestions');
  if (!launcher || !win) return;

  launcher.addEventListener('click', () => {
    win.classList.toggle('is-open');
    if (win.classList.contains('is-open')) input?.focus();
  });

  function addMessage(text, who) {
    const div = document.createElement('div');
    div.className = `msg ${who}`;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function botReply(text) {
    const typing = document.createElement('div');
    typing.className = 'msg bot typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;
    const delay = 500 + Math.random() * 500;
    setTimeout(() => {
      typing.remove();
      addMessage(text, 'bot');
    }, delay);
  }

  function send(text) {
    if (!text.trim()) return;
    addMessage(text, 'user');
    if (input) input.value = '';
    botReply(botAnswer(text));
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    send(input.value);
  });

  suggestions?.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (chip) send(chip.textContent);
  });
}

