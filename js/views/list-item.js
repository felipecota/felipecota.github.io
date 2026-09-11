import { db, doc, updateDoc } from '../firebase.js';
import { watchMyDocs } from '../data.js';
import { state, displayError } from '../state.js';
import { t } from '../translate.js';
import { navigate } from '../router.js';

let unsub = null;

export function render(container, params) {
  let lists = [];
  let selected = false;
  let listname = '';
  let listkey = '';
  let itemname = '';
  let amount = '';
  let autoSelected = false;
  let editMode = false;
  let editItemkey = null;

  if (params?.[0] === 'edit' && state.pendingListItem) {
    editMode = true;
    itemname = state.pendingListItem.description;
    amount = state.pendingListItem.amount;
    editItemkey = state.pendingListItem.itemkey;
  }

  function paint() {
    const len = lists.length;
    container.innerHTML = `
      <div class="list-item-view">
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
            <label for="itemname">${t('t11')}</label>
            <input id="itemname" type="text" class="form-control" maxlength="50" value="${itemname}" ${!selected ? 'disabled' : ''}>
          </div>
          <div class="form-group">
            <label for="amount">${t('t2')}</label>
            <input id="amount" type="text" class="form-control" maxlength="50" value="${amount}" ${!selected ? 'disabled' : ''}>
          </div>
          <button class="btn btn-primary" type="button" id="btn-include" ${!selected ? 'disabled' : ''}>
            <span class="glyphicon glyphicon-floppy-disk"></span> ${t('t3')}
          </button>
          <br><br>
        ` : ''}
        ${len === 0 ? `<div class="alert alert-danger">${t('m4')}</div>` : ''}
      </div>
    `;

    container.querySelectorAll('.dropdown-menu li').forEach(el => {
      el.addEventListener('click', () => onSelect(lists.find(x => x.id === el.dataset.id)));
    });
    container.querySelector('#itemname')?.addEventListener('input', e => { itemname = e.target.value; });
    container.querySelector('#amount')?.addEventListener('input', e => { amount = e.target.value; });
    container.querySelector('#btn-include')?.addEventListener('click', include);
  }

  function onSelect(l) {
    selected = true;
    listname = l.listname;
    listkey = l.id;
    localStorage.setItem('lastList', l.id);
    displayError('');
  }

  function makeKey() {
    const d = new Date();
    return '' + d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes() + d.getSeconds() + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
  }

  function include() {
    if (!itemname || itemname.trim() === '' || !amount || amount.trim() === '') {
      displayError(state.language.e1);
    } else {
      const name = itemname;
      const amt = amount;
      itemname = '';
      amount = '';

      const itemkey = editMode ? editItemkey : makeKey();

      updateDoc(doc(db, 'lists', listkey), { ['items.' + itemkey]: { itemname: name, amount: amt } });

      displayError('');
      navigate('list-detail');
      return;
    }
    paint();
  }

  unsub = watchMyDocs('lists', (docs) => {
    lists = [...docs].sort((a, b) => a.listname.localeCompare(b.listname));

    if (!autoSelected) {
      const targetId = editMode ? state.pendingListItem?.listId : localStorage.getItem('lastList');
      const found = targetId && lists.find(l => l.id === targetId);
      if (found) { autoSelected = true; onSelect(found); }
    }
    paint();
  });

  paint();
}

export function destroy() {
  if (unsub) { unsub(); unsub = null; }
}