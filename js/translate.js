import { state } from './state.js';

export function t(key) {
  if (!key) return '';
  return state.language ? state.language[key] : '';
}