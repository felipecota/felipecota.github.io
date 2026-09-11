import { db, doc, setDoc, deleteDoc } from '../firebase.js';
import { watchMyDocs, normalizeAccess } from '../data.js';
import { state, displayError } from '../state.js';
import { t } from '../translate.js';
import { config } from '../config.js';

let unsub = null;

export function render(container) {
  let billname = '';
  let bills = [];

  function paint() {
    container.innerHTML = `
      <div class="bill-form-view">
        <br>
        <div class="form-group">
          <label for="billname">${t('t15')}</label>
          <input id="billname" type="text" class="form-control" maxlength="50" value="${billname}">
        </div>
        <button class="btn btn-primary" type="button" id="btn-include">
          <span class="glyphicon glyphicon-floppy-disk"></span> ${t('t3')}
        </button>
        <label class="input-group-btn">
          <span class="btn btn-primary">
            <span class="glyphicon glyphicon-floppy-open"></span>
            ${t('t40')} <input type="file" id="file-restore" style="display: none;" accept=".txt">
          </span>
        </label>
        <br><br>
        <ul class="list-group">
          ${bills.map(b => `
            <li class="list-group-item">
              ${b.billname}
              <span class="glyphicon glyphicon-trash pull-right btn-delete" data-id="${b.id}"></span>
            </li>
          `).join('')}
        </ul>
        <br>
      </div>
    `;

    container.querySelector('#billname').addEventListener('input', e => { billname = e.target.value; });
    container.querySelector('#btn-include').addEventListener('click', include);
    container.querySelector('#file-restore').addEventListener('change', fileChange);
    container.querySelectorAll('.btn-delete').forEach(el => {
      const b = bills.find(x => x.id === el.dataset.id);
      el.addEventListener('click', () => onSelect(b.id, b.access));
    });
  }

  function makeKey() {
    const d = new Date();
    return '' + d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes() + d.getSeconds() + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
  }

  function include() {
    const key = makeKey();
    const name = billname;
    billname = '';
    displayError('');

    if (bills.length >= config.limit_list) {
      displayError(state.language.e18);
    } else if (!name || name === '') {
      displayError(state.language.e6);
    } else {
      setDoc(doc(db, 'bills', key), {
        billname: name,
        access: { [state.user.email]: true }
      });
    }
    paint();
  }

  function onSelect(id, access) {
    if (Object.keys(access ?? {}).length === 1) {
      displayError('');
      if (confirm(state.language.m7)) deleteDoc(doc(db, 'bills', id));
    } else {
      displayError(state.language.e15);
    }
  }

  function fileChange(event) {
    if (!billname || billname === '') {
      displayError(state.language.e6);
      return;
    }
    displayError('');
    const fileList = event.target.files;
    if (fileList.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        let obj;
        try {
          const decrypted = CryptoJS.AES.decrypt(reader.result, config.cryptoPass).toString(CryptoJS.enc.Utf8);
          obj = JSON.parse(decrypted);
        } catch {
          obj = undefined;
        }

        if (obj && obj.type === 'bill') {
          const key = makeKey();
          setDoc(doc(db, 'bills', key), {
            billname,
            access: normalizeAccess(obj.access),
            items: obj.items
          });
          billname = '';
          paint();
        } else {
          displayError(state.language.e19);
        }
      };
      reader.readAsText(fileList[0]);
    }
  }

  unsub = watchMyDocs('bills', (docs) => {
    bills = [...docs].reverse();
    paint();
  });

  paint();
}

export function destroy() {
  if (unsub) { unsub(); unsub = null; }
}