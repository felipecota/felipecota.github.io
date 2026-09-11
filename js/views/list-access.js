import { db, doc, updateDoc, deleteField, onSnapshot } from '../firebase.js';
import { watchMyDocs, emailKey } from '../data.js';
import { state, displayError } from '../state.js';
import { t } from '../translate.js';
import { config } from '../config.js';

let unsubLists = null;
let unsubMembers = null;

export function render(container) {
  let lists = [];
  let selected = false;
  let listname = '';
  let listkey = '';
  let email = '';
  let members = [];
  let autoSelected = false;

  function paint() {
    const len = lists.length;
    container.innerHTML = `
      <div class="list-access-view">
        <br>
        <span class="dropdown">
          <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">${selected ? listname : t('t5')} <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            ${lists.map(l => `<li data-id="${l.id}"><a>${l.listname}</a></li>`).join('')}
          </ul>
        </span>
        <br><br>
        ${len > 0 ? `
          <div class="form-group">
            <label for="email">E-mail</label>
            <input id="email" type="text" class="form-control email" maxlength="50" value="${email}" ${!selected ? 'disabled' : ''}>
          </div>
          <button class="btn btn-primary" type="button" id="btn-include" ${!selected ? 'disabled' : ''}>
            <span class="glyphicon glyphicon-floppy-disk"></span> ${t('t3')}
          </button>
          <br><br>
          <ul class="list-group">
            ${members.map(m => `
              <li class="list-group-item">
                ${m.email}
                <span class="glyphicon glyphicon-trash pull-right btn-remove" data-email="${m.email}"></span>
              </li>
            `).join('')}
          </ul>
        ` : ''}
        ${len === 0 ? `<div class="alert alert-danger">${t('m4')}</div>` : ''}
      </div>
    `;

    container.querySelectorAll('.dropdown-menu li').forEach(el => {
      el.addEventListener('click', () => onSelectList(lists.find(x => x.id === el.dataset.id)));
    });
    container.querySelector('#email')?.addEventListener('input', e => { email = e.target.value; });
    container.querySelector('#btn-include')?.addEventListener('click', include);
    container.querySelectorAll('.btn-remove').forEach(el =>
      el.addEventListener('click', () => onRemove(el.dataset.email)));
  }

  function onSelectList(l) {
    selected = true;
    listname = l.listname;
    listkey = l.id;
    localStorage.setItem('lastList', l.id);
    displayError('');

    if (unsubMembers) unsubMembers();
    unsubMembers = onSnapshot(doc(db, 'lists', listkey), snap => {
      const temp = [];
      const access = snap.data()?.access ?? {};
      for (const key in access) temp.push({ email: key.replace(/´/g, '.') });
      members = temp;
      paint();
    });

    paint();
  }

  function include() {
    if (members.length >= config.limit_access) {
      displayError(state.language.e18);
    } else if (!navigator.onLine) {
      displayError(state.language.e12);
    } else if (!email || email === '') {
      displayError(state.language.e14);
    } else {
      updateDoc(doc(db, 'lists', listkey), { ['access.' + emailKey(email.toLowerCase())]: true });
      displayError('');
      email = '';
    }
    paint();
  }

  function onRemove(memberEmail) {
    if (members.length > 1) {
      if (confirm(state.language.m7)) {
        updateDoc(doc(db, 'lists', listkey), { ['access.' + emailKey(memberEmail)]: deleteField() });
      }
    } else {
      displayError(state.language.e10);
      paint();
    }
  }

  unsubLists = watchMyDocs('lists', (docs) => {
    lists = [...docs].sort((a, b) => a.listname.localeCompare(b.listname));

    if (!autoSelected && localStorage.getItem('lastList')) {
      const found = lists.find(l => l.id === localStorage.getItem('lastList'));
      if (found) { autoSelected = true; onSelectList(found); return; }
    }
    paint();
  });

  paint();
}

export function destroy() {
  if (unsubLists) { unsubLists(); unsubLists = null; }
  if (unsubMembers) { unsubMembers(); unsubMembers = null; }
}