import { navigate } from '../router.js';
import { t } from '../translate.js';

export function render(container) {
  container.innerHTML = `
    <strong>Steps to delete your account on Firelist App</strong>
    <ol>
      <li>Sign-in using your e-mail and password.</li>
      <li>Access the settings item located in the root menu.</li>
      <li>Click at "delete my account" to delete all your data.</li>
    </ol>
    <br>
    <button type="button" id="btn-login" class="btn btn-primary">${t('t7')}</button>
  `;
  container.querySelector('#btn-login').addEventListener('click', () => navigate('login'));
}

export function destroy() {}