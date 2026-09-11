import { languages } from './language.js';

const listeners = new Set();

export const state = {
  isSignin: false,
  isEmailVerified: false,
  user: null,
  language: null,
  erro: '',
  isConnected: navigator.onLine,
  // "sacolinha" de dados entre telas (substitui BillService/ListService)
  pendingListItem: null,
  pendingListRef: null,
  pendingBillItem: null,
};

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function notify() {
  listeners.forEach(fn => fn(state));
}

export function displayError(msg) {
  state.erro = msg;
  notify();
  if (msg) {
    navigator.vibrate?.([500]);
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
  }
}

export function setLanguage(name) {
  localStorage.setItem('lang', name);
  state.language = languages.find(l => l.name === name);
  notify();
}

window.addEventListener('online', () => { state.isConnected = true; notify(); });
window.addEventListener('offline', () => { state.isConnected = false; notify(); });