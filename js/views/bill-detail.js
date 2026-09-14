import { db, doc, updateDoc, deleteField, getDoc } from '../firebase.js';
import { watchMyDocs, watchDoc } from '../data.js';
import { state, displayError } from '../state.js';
import { t } from '../translate.js';
import { navigate } from '../router.js';
import { config } from '../config.js';

let unsubBills = null;
let unsubBill = null;

export function render(container, params) {
  let bills = [];
  let billname = '';
  let billkey = '';
  let billselected = false;
  let items = [];
  let members = [];
  let resumo = [];

  function paint() {
    const len = bills.length;
    const showTable = billselected && items.length > 0 && members.length > 0;

    container.innerHTML = `
      <div class="bill-detail-view">
        <br>
        <span class="dropdown">
          <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">${billselected ? billname : t('t14')} <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            ${bills.map(b => `<li data-id="${b.id}"><a>${b.billname}</a></li>`).join('')}
          </ul>
        </span>
        <button class="btn btn-primary" type="button" id="btn-backup" ${!billselected ? 'disabled' : ''}>
          <span class="glyphicon glyphicon-floppy-disk"></span> ${t('t24')}
        </button>
        <br><br>
        ${showTable ? `
          <table class="table members">
            <thead>
              <tr>
                <th style="padding-left: 0px;">${t('t22')}</th>
                <th class="text-right">${t('t23')}</th>
              </tr>
            </thead>
            <tbody>
              ${members.map(m => `
                <tr class="${m.value > 0.009 ? 'info' : m.value < -0.009 ? 'danger' : 'success'}">
                  <td>${m.emailf}</td>
                  <td class="text-right">${m.value.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="alert alert-danger">${t('m6')}</div>
        ` : ''}
        <ul class="list-group">
          ${items.map(i => `
            <li class="list-group-item">
              ${formatShortDate(i.date)} - ${i.description}
              <span data-toggle="collapse" aria-expanded="false" data-target="#item-${i.itemkey}" class="glyphicon glyphicon-chevron-down pull-right pointer toggle-collapse"></span>
              <div id="item-${i.itemkey}" class="collapse">
                ${t('t34')}: ${i.owner}<br>
                ${t('t16')}: ${i.payer}<br>
                ${t('t25')}: ${i.place}<br>
                ${t('t26')}: ${t(i.type)}<br>
                ${t('t18')}: ${i.value.toFixed(2)}<br>
                ${t('t35')}: ${i.multiplier.toFixed(3)}<br>
                ${t('t36')}: ${i.calculated.toFixed(2)}<br>
                ${t('t19')}:<br>
                ${i.benefited.map(b => `${b}<br>`).join('')}<br>
                <button class="btn btn-danger btn-remove-item" type="button" data-itemkey="${i.itemkey}" data-owner="${i.owner}">
                  <span class="glyphicon glyphicon-trash"></span> ${t('t37')}
                </button>
                <button class="btn btn-warning btn-edit-item" type="button" data-itemkey="${i.itemkey}" data-owner="${i.owner}">
                  <span class="glyphicon glyphicon-pencil"></span> ${t('t38')}
                </button>
              </div>
            </li>
          `).join('')}
        </ul>
        ${showTable ? `
          <div style="padding-bottom: 20px;">
            <div class="resumo">
              <table class="table">
                <thead>
                  <tr>
                    <th style="padding-left: 0px;">${t('t46')}</th>
                    <th class="text-right">${t('t18')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${resumo.map(r => `
                    <tr class="resumo">
                      <td>${t(r.type)}</td>
                      <td class="text-right">${r.value.toFixed(2)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}
        ${len === 0 ? `<div class="alert alert-danger">${t('m10')}</div>` : ''}
      </div>
    `;

    container.querySelectorAll('.dropdown-menu li').forEach(el =>
      el.addEventListener('click', () => onSelectBill(bills.find(x => x.id === el.dataset.id))));
    container.querySelector('#btn-backup')?.addEventListener('click', backup);
    container.querySelectorAll('.toggle-collapse').forEach(el => {
      el.addEventListener('click', () => {
        const expanded = el.getAttribute('aria-expanded') === 'true';
        el.setAttribute('aria-expanded', String(!expanded));
        el.classList.toggle('glyphicon-chevron-down', expanded);
        el.classList.toggle('glyphicon-chevron-up', !expanded);
      });
    });
    container.querySelectorAll('.btn-remove-item').forEach(el =>
      el.addEventListener('click', () => onRemove(el.dataset.itemkey, el.dataset.owner)));
    container.querySelectorAll('.btn-edit-item').forEach(el =>
      el.addEventListener('click', () => onEdit(el.dataset.itemkey, el.dataset.owner)));
  }

  function formatShortDate(date) {
    return date.toLocaleDateString().slice(0, -5);
  }

  function onSelectBill(b) {
    if (!b) return;
    billname = b.billname;
    billkey = b.id;
    billselected = true;
    localStorage.setItem('lastBill', b.id);

    if (unsubBill) unsubBill();
    unsubBill = watchDoc('bills', billkey, (data) => {
      const newItems = [];
      const newMembers = [];
      const newResumo = [];
      let total = 0;

      if (!data || !data.items || Object.keys(data.items).length === 0) {
        displayError(state.language.m5);
      } else {
        for (const key in data.access ?? {}) {
          if (key !== state.user.email) {
            let format = key.split('@');
            if (format[0].length > 20) format[0] = format[0].substring(0, 7) + '...' + format[0].substring(format[0].length - 7, 7);
            newMembers.push({ email: key, emailf: format[0] + '@' + format[1], value: 0 });
          }
        }

        for (const key in data.items) {
          const item = data.items[key];
          let show = false;

          item.benefited.forEach(b => {
            const sn = item.payer === state.user.email && b !== state.user.email;
            const sp = item.payer !== state.user.email && b === state.user.email;
            const ow = item.owner === state.user.email;
            const my = item.payer === state.user.email && b === state.user.email;
            if (sn || sp || ow || my) {
              show = true;
              if (sn || sp) {
                newMembers.forEach(member => {
                  if (member.email === (sn ? b : item.payer)) {
                    const valuepp = (item.value * (item.multiplier ?? 1)) / item.benefited.length;
                    member.value += sn ? valuepp : -valuepp;
                  }
                });
              }
              if ((sp || my) && item.type !== 't45') {
                const valuepp = (item.value * (item.multiplier ?? 1)) / item.benefited.length;
                total += valuepp;
                const existing = newResumo.find(r => r.type === item.type);
                if (existing) {
                  existing.value += valuepp;
                  existing.order = 1 - existing.value;
                } else {
                  newResumo.push({ type: item.type, value: valuepp, order: 1 - valuepp });
                }
              }
            }
          });

          if (show) {
            newItems.push({
              benefited: item.benefited,
              date: new Date(item.date.seconds * 1000),
              description: item.description,
              value: item.value,
              multiplier: item.multiplier ?? 1,
              calculated: item.value * (item.multiplier ?? 1),
              payer: item.payer,
              place: item.place,
              type: item.type,
              owner: item.owner,
              itemkey: key
            });
          }
        }
      }

      newResumo.push({ type: 't47', value: total, order: total });

      members = newMembers.sort((a, b) => a.value - b.value);
      resumo = newResumo.sort((a, b) => a.order - b.order);
      items = newItems.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

      paint();
    });
  }

  function onRemove(itemkey, owner) {
    if (owner !== state.user.email) {
      alert(state.language.m8);
    } else if (confirm(state.language.m7)) {
      updateDoc(doc(db, 'bills', billkey), { ['items.' + itemkey]: deleteField() });
    }
  }

  function onEdit(itemkey, owner) {
    if (owner !== state.user.email) {
      alert(state.language.m9);
      return;
    }
    const item = items.find(i => i.itemkey === itemkey);
    state.pendingBillItem = {
      billkey,
      billname,
      itemkey: item.itemkey,
      payer: item.payer,
      date: item.date,
      place: item.place,
      description: item.description,
      type: item.type,
      value: item.value,
      multiplier: item.multiplier,
      calculated: item.calculated,
      benefited: item.benefited
    };
    navigate('bill-item/edit');
  }

  function backup() {
    getDoc(doc(db, 'bills', billkey)).then(snap => {
      const payload = snap.data();
      const crypto = CryptoJS.AES.encrypt(JSON.stringify({
        type: 'bill',
        items: payload.items,
        access: payload.access
      }), config.cryptoPass).toString();
      const blob = new Blob([crypto], { type: 'text/plain' });
      const now = new Date();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', `backup_${t('t14').toLowerCase()}_${billname.toLowerCase()}_${now.getFullYear()}${now.getMonth()}${now.getDate()}.txt`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  const id1 = params?.[0];
  const id2 = params?.[1];
  if (id1 && id2) {
    onSelectBill({ id: id1, billname: decodeURIComponent(id2) });
  }

  unsubBills = watchMyDocs('bills', (docs) => {
    bills = [...docs].reverse();

    if (!billselected && localStorage.getItem('lastBill')) {
      const found = bills.find(b => b.id === localStorage.getItem('lastBill'));
      if (found) { onSelectBill(found); return; }
    }

    paint();
  });

  paint();
}

export function destroy() {
  if (unsubBills) { unsubBills(); unsubBills = null; }
  if (unsubBill) { unsubBill(); unsubBill = null; }
}