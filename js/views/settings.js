import { setLanguage } from '../state.js';
import { t } from '../translate.js';
import { languages } from '../language.js';
import { config } from '../config.js';

export function render(container) {
  function paint() {
    container.innerHTML = `
      <div class="settings-view">
        ${t('t42')}
        <br><br>
        <ul class="list-group">
          ${languages.map(l => `
            <li class="list-group-item language pointer" data-lang="${l.name}">
              ${l.description}<img class="flag" src="assets/images/${l.flag}">
            </li>
          `).join('')}
        </ul>
        ${t('t44')}: ${config.appVersion}
      </div>
    `;

    container.querySelectorAll('.language').forEach(el => {
      el.addEventListener('click', () => {
        setLanguage(el.dataset.lang);
        paint();
      });
    });
  }

  paint();
}

export function destroy() {}