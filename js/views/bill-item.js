import { db, doc, updateDoc } from '../firebase.js';
import { watchMyDocs, watchDoc } from '../data.js';
import { state, displayError } from '../state.js';
import { t } from '../translate.js';
import { navigate } from '../router.js';
import { config } from '../config.js';

let unsubBills = null;
let unsubMembers = null;

const TYPE_OPTIONS = ['t27', 't28', 't29', 't30', 't31', 't45', 't32'];

export function render(container, params) {
  let bills = [];
  let members = [];
  let len = 0;

  let editmode = false;
  let itemkey = null;

  let selectedBill = false;
  let billname = '';
  let billkey = '';

  let payer = '';
  let place = '';
  let type = '';
  let dateForm = new Date();
  let description = '';
  let value = '';
  let multiplier = '1';
  let calculated = 0;
  let benefited = [];

  if (params?.[0] === 'edit' && state.pendingBillItem) {
    const data = state.pendingBillItem;
    editmode = true;
    itemkey = data.itemkey;
    payer = data.payer;
    place = data.place;
    type = data.type;
    dateForm = data.date;
    description = data.description;
    value = data.value + '';
    multiplier = data.multiplier + '';
    calculated = data.calculated;
    benefited = data.benefited;
  }

  function toDatetimeLocal(d) {
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function paint() {
    container.innerHTML = `
      <div class="bill-item-view">
        <br>
        <span class="dropdown">
          <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">${selectedBill ? billname : t('t14')} <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            ${bills.map(b => `<li data-id="${b.id}"><a>${b.billname}</a></li>`).join('')}
          </ul>
        </span>
        <br><br>
        ${len > 0 ? `
          <div class="form-group">
            <label for="payer">${t('t16')}</label>
            <select id="payer" class="form-control" ${!selectedBill ? 'disabled' : ''}>
              <option value="">${t('t33')}</option>
              ${members.map(m => `<option value="${m.emailf}" ${payer === m.emailf ? 'selected' : ''}>${m.emailf}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label for="date">${t('t17')}</label>
            <input id="date" type="datetime-local" class="form-control" value="${toDatetimeLocal(dateForm)}" ${!selectedBill ? 'disabled' : ''}>
          </div>
          <div class="form-group">
            <label for="place">${t('t25')}</label>
            <input id="place" type="text" class="form-control" value="${place}" ${!selectedBill ? 'disabled' : ''}>
          </div>
          <div class="form-group">
            <label for="description">${t('t11')}</label>
            <input id="description" type="text" class="form-control" value="${description}" ${!selectedBill ? 'disabled' : ''}>
          </div>
          <div class="form-group">
            <label for="type">${t('t26')}</label>
            <select id="type" class="form-control" ${!selectedBill ? 'disabled' : ''}>
              <option value="">${t('t33')}</option>
              ${TYPE_OPTIONS.map(key => `<option value="${key}" ${type === key ? 'selected' : ''}>${t(key)}</option>`).join('')}
            </select>
          </div>
          <div class="row">
            <div class="col-xs-4">
              <div class="form-group">
                <label for="value">${t('t18')}</label>
                <input id="value" type="text" class="form-control" value="${value}" placeholder="0,00" ${!selectedBill ? 'disabled' : ''}>
              </div>
            </div>
            <div class="col-xs-4">
              <div class="form-group">
                <label for="multiplier">${t('t35')}</label>
                <input id="multiplier" type="text" class="form-control" value="${multiplier}" placeholder="0,00" ${!selectedBill ? 'disabled' : ''}>
              </div>
            </div>
            <div class="col-xs-4">
              <div class="form-group">
                <label for="calculated">${t('t36')}</label>
                <input id="calculated" type="text" class="form-control" value="${calculated}" placeholder="0,00" disabled>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="sel1">${t('t19')}</label>
            <select id="sel1" multiple size="5" class="form-control members" ${!selectedBill ? 'disabled' : ''}>
              ${members.map(m => `<option value="${m.email}" ${benefited.includes(m.email) ? 'selected' : ''}>${m.email}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-primary" type="button" id="btn-include" ${!selectedBill ? 'disabled' : ''}>
            <span class="glyphicon glyphicon-floppy-disk"></span> ${t(editmode ? 't39' : 't3')}
          </button>
          <br><br>
        ` : ''}
        ${len === 0 ? `<div class="alert alert-danger">${t('m10')}</div>` : ''}
      </div>
    `;

    container.querySelectorAll('.dropdown-menu li').forEach(el =>
      el.addEventListener('click', () => onSelectBill(bills.find(x => x.id === el.dataset.id))));

    container.querySelector('#payer')?.addEventListener('click', onSelectMember);
    container.querySelector('#payer')?.addEventListener('change', e => { payer = e.target.value; });
    container.querySelector('#date')?.addEventListener('change', e => { dateForm = e.target.value ? new Date(e.target.value) : null; });
    container.querySelector('#place')?.addEventListener('input', e => { place = e.target.value; });
    container.querySelector('#description')?.addEventListener('input', e => { description = e.target.value; });
    container.querySelector('#type')?.addEventListener('change', e => { type = e.target.value; });
    container.querySelector('#value')?.addEventListener('input', e => { value = e.target.value; onChange(); });
    container.querySelector('#multiplier')?.addEventListener('input', e => { multiplier = e.target.value; onChange(); });
    container.querySelector('#sel1')?.addEventListener('change', e => {
      benefited = Array.from(e.target.selectedOptions).map(o => o.value);
    });
    container.querySelector('#btn-include')?.addEventListener('click', include);
  }

  function onChange() {
    calculated = Number(value.replace(',', '.')) * Number(multiplier.replace(',', '.'));
    const calcInput = container.querySelector('#calculated');
    if (calcInput) calcInput.value = calculated;
  }

  function onSelectMember() {
    if (navigator.geolocation && place === '') {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude}%2C${position.coords.longitude}&language=en&key=${config.apiGeolocationKey}`)
          .then(r => r.json())
          .then(data => {
            data.results?.forEach(result => {
              result.address_components.forEach(component => {
                component.types.forEach(compType => {
                  if (compType === 'locality' && place === '') {
                    place = component.long_name;
                    const placeInput = container.querySelector('#place');
                    if (placeInput) placeInput.value = place;
                  }
                });
              });
            });
          });
      });
    }
  }

  function onSelectBill(b) {
    selectedBill = true;
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
    if (members.length >= config.limit_itens) {
      displayError(state.language.e18);
    } else if (!payer || payer === '' || !dateForm || !description || description.trim() === '' || !value || !benefited || benefited.length === 0 || !place || place === '' || !type || type === '' || multiplier === '' || Number(multiplier) <= 0) {
      displayError(state.language.e14);
      navigator.vibrate?.([500]);
    } else {
      const date = dateForm;
      const desc = description;
      const val = value.replace(',', '.');
      const mult = multiplier.replace(',', '.');
      const pay = payer;
      const ben = benefited;
      const plc = place;
      const tp = type;

      const key = editmode ? itemkey : makeKey();

      updateDoc(doc(db, 'bills', billkey), {
        ['items.' + key]: {
          payer: pay,
          benefited: ben,
          date,
          description: desc,
          value: Number(val),
          multiplier: Number(mult),
          place: plc,
          type: tp,
          owner: state.user.email
        }
      });

      displayError('');
      navigate('bill-detail/' + billkey + '/' + encodeURIComponent(billname));
      return;
    }
    paint();
  }

  function makeKey() {
    const d = new Date();
    return '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
  }

  unsubBills = watchMyDocs('bills', (docs) => {
    bills = [...docs].reverse();
    len = bills.length;

    if (editmode && !selectedBill && state.pendingBillItem?.billkey) {
      const found = bills.find(b => b.id === state.pendingBillItem.billkey);
      if (found) onSelectBill(found);
    }

    paint();
  });

  paint();
}

export function destroy() {
  if (unsubBills) { unsubBills(); unsubBills = null; }
  if (unsubMembers) { unsubMembers(); unsubMembers = null; }
}