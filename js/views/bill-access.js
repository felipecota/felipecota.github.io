import { db, doc, updateDoc, deleteField, FieldPath } from '../firebase.js';
import { watchMyDocs, watchDoc } from '../data.js';
import { state, displayError } from '../state.js';
import { t } from '../translate.js';
import { config } from '../config.js';

let unsubBills = null;
let unsubMembers = null;

export function render(container) {
  let bills = [];
  let selected = false;
  let billname = '';
  let billkey = '';
  let email = '';
  let members = [];

  function paint() {
    const len = bills.length;
    container.innerHTML = `
      <div class="bill-access-view">
        <br>
        <span class="dropdown">
          <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">${selected ? billname : t('t14')} <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            ${bills.map(b => `<li data-id="${b.id}"><a>${b.billname}</a></li>`).join('')}
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
                ${m.emailf}
                <span class="glyphicon glyphicon-trash pull-right btn-remove" data-email="${m.email}"></span>
              </li>
            `).join('')}
          </ul>
        ` : ''}
        ${len === 0 ? `<div class="alert alert-danger">${t('m10')}</div>` : ''}
      </div>
    `;

    container.querySelectorAll('.dropdown-menu li').forEach(el =>
      el.addEventListener('click', () => onSelectBill(bills.find(x => x.id === el.dataset.id))));
    container.querySelector('#email')?.addEventListener('input', e => { email = e.target.value; });
    container.querySelector('#btn-include')?.addEventListener('click', include);
    container.querySelectorAll('.btn-remove').forEach(el =>
      el.addEventListener('click', () => onRemove(el.dataset.email)));
  }

  function onSelectBill(b) {
    selected = true;
    billname = b.billname;
    billkey = b.id;
    localStorage.setItem('lastBill', b.id);
    displayError('');

    if (unsubMembers) unsubMembers();
    unsubMembers = watchDoc('bills', billkey, (data) => {
      const temp = [];
      for (const key in data?.access ?? {}) {
        let format = key.split('@');
        if (format[0].length > 20) format[0] = format[0].substr(0, 7) + '...' + format[0].substr(format[0].length - 7, 7);
        temp.push({ email: key, emailf: format[0] + '@' + format[1] });
      }
      members = temp;
      paint();
    });

    paint();
  }

  function include() {
    if (members.length >= config.limit_access) {
      displayError(state.language.e18);
    } else if (!email || email === '') {
      displayError(state.language.e14);
      navigator.vibrate?.([500]);
    } else {
      updateDoc(doc(db, 'bills', billkey), new FieldPath('access', email.toLowerCase()), true);
      displayError('');
      email = '';
    }
    paint();
  }

  function onRemove(memberEmail) {
    if (members.length > 1) {
      if (confirm(state.language.m7)) {
        updateDoc(doc(db, 'bills', billkey), new FieldPath('access', memberEmail), deleteField());
      }
    } else {
      displayError(state.language.e10);
      paint();
    }
  }

  unsubBills = watchMyDocs('bills', (docs) => {
    bills = [...docs].reverse();
    paint();
  });

  paint();
}

export function destroy() {
  if (unsubBills) { unsubBills(); unsubBills = null; }
  if (unsubMembers) { unsubMembers(); unsubMembers = null; }
}