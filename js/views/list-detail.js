import { db, doc, updateDoc, deleteField, getDoc } from '../firebase.js';
import { watchMyDocs } from '../data.js';
import { t } from '../translate.js';
import { navigate } from '../router.js';
import { state } from '../state.js';
import { config } from '../config.js';

let unsub = null;

export function render(container) {
  let currentLists = [];
  const collapsed = new Set();

  function paint() {
    const sorted = [...currentLists].sort((a, b) => a.listname.localeCompare(b.listname));

    container.innerHTML = `
      <div class="list-detail-view">
        <br>
        ${sorted.map(renderPanel).join('')}
        ${currentLists.length === 0 ? `<div class="alert alert-danger">${t('m4')}</div>` : ''}
      </div>
    `;

    container.querySelectorAll('.btn-backup').forEach(el =>
      el.addEventListener('click', () => backup(el.dataset.list, el.dataset.listname)));
    container.querySelectorAll('.btn-toggle-visibility').forEach(el =>
      el.addEventListener('click', () => toggleCollapse(el.dataset.list)));
    container.querySelectorAll('.btn-delete-item').forEach(el =>
      el.addEventListener('click', () => onSelect(el.dataset.list, el.dataset.itemkey)));
    container.querySelectorAll('.btn-edit-item').forEach(el =>
      el.addEventListener('click', () => onEdit(el.dataset.itemkey, el.dataset.itemname, el.dataset.amount, el.dataset.list)));
    container.querySelectorAll('.chk-item').forEach(el =>
      el.addEventListener('change', (e) => onToggleCheck(el.dataset.list, el.dataset.itemkey, e.target.checked)));
  }

  function renderPanel(l) {
    const isCollapsed = collapsed.has(l.id);

    const items = Object.entries(l.items ?? {})
      .map(([itemkey, item]) => ({ itemkey, itemname: item.itemname, amount: item.amount, checked: !!item.checked }))
      .sort((a, b) => {
        if (a.checked !== b.checked) return a.checked ? 1 : -1;
        return a.itemname.localeCompare(b.itemname);
      });

    return `
      <div class="panel panel-primary">
        <div class="panel-heading text-center pointer">
          ${l.listname}
          <span class="glyphicon glyphicon-floppy-save pull-right btn-backup" data-list="${l.id}" data-listname="${l.listname}"></span>
          <span class="glyphicon ${isCollapsed ? 'glyphicon-eye-close' : 'glyphicon-eye-open'} pull-right btn-toggle-visibility" data-list="${l.id}"></span>
        </div>
        <div class="panel-body" ${isCollapsed ? 'style="display:none;"' : ''}>
          <ul class="list-group">
            ${items.length === 0 ? `<div>${t('m5')}</div>` : ''}
            ${items.map(i => `
              <li class="list-group-item">
                <span class="glyphicon glyphicon-trash pull-right btn-delete-item" data-list="${l.id}" data-itemkey="${i.itemkey}"></span>
                <span class="glyphicon glyphicon-edit pull-right pointer btn-edit-item" data-list="${l.id}" data-itemkey="${i.itemkey}" data-itemname="${i.itemname}" data-amount="${i.amount}"></span>
                <input type="checkbox" class="chk-item" data-list="${l.id}" data-itemkey="${i.itemkey}" ${i.checked ? 'checked' : ''}>
                <span${i.checked ? ' style="text-decoration: line-through;"' : ''}>${i.itemname} - ${i.amount}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function toggleCollapse(listId) {
    if (collapsed.has(listId)) collapsed.delete(listId);
    else collapsed.add(listId);
    paint();
  }

  function onToggleCheck(listId, itemkey, checked) {
    updateDoc(doc(db, 'lists', listId), { ['items.' + itemkey + '.checked']: checked });
  }

  function onSelect(listId, itemkey) {
    updateDoc(doc(db, 'lists', listId), { ['items.' + itemkey]: deleteField() });
  }

  function onEdit(itemkey, itemname, amount, listId) {
    state.pendingListItem = { description: itemname, amount, itemkey, listId };
    navigate('list-item/edit');
  }

  function backup(listId, listname) {
    getDoc(doc(db, 'lists', listId)).then(snap => {
      const payload = snap.data();
      const crypto = CryptoJS.AES.encrypt(JSON.stringify({
        type: 'list',
        items: payload.items,
        access: payload.access
      }), config.cryptoPass).toString();
      const blob = new Blob([crypto], { type: 'text/plain' });
      const now = new Date();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', `backup_${t('t5').toLowerCase()}_${listname.toLowerCase()}_${now.getFullYear()}${now.getMonth()}${now.getDate()}.txt`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  unsub = watchMyDocs('lists', (docs) => {
    currentLists = docs;
    paint();
  });
}

export function destroy() {
  if (unsub) { unsub(); unsub = null; }
}