import { navigate } from '../router.js';
import { t } from '../translate.js';

export function render(container) {
  container.innerHTML = `
    <div class="menu-view">
      <button type="button" id="btn-lists" class="btn btn-primary">${t('t20')}</button>
      <button type="button" id="btn-bills" class="btn btn-primary">${t('t21')}</button>
      <button type="button" id="btn-settings" class="btn btn-primary">${t('t43')}</button>
    </div>
  `;
  container.querySelector('#btn-lists').addEventListener('click', () => navigate('list-detail'));
  container.querySelector('#btn-bills').addEventListener('click', () => navigate('bill-detail'));
  container.querySelector('#btn-settings').addEventListener('click', () => navigate('settings'));
}

export function destroy() {}