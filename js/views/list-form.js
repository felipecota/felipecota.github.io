import { db, doc, setDoc, deleteDoc } from '../firebase.js';
import { watchMyDocs, normalizeAccess } from '../data.js';
import { state, displayError } from '../state.js';
import { t } from '../translate.js';
import { config } from '../config.js';

let unsub = null;

export function render(container) {
  let listname = '';
  let lists = [];

  function paint() {
    container.innerHTML = `
      <div class="list-form-view">
        <br>
        <div class="form-group">
          <label for="listname">${t('t10')}</label>
          <input id="listname" type="text" class="form-control" maxlength="50" value="${listname}">
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
          ${lists.map(l => `
            <li class="list-group-item">
              <span class="glyphicon glyphicon-trash pull-right btn-delete" data-id="${l.id}"></span>
              ${l.listname}
            </li>
          `).join('')}
        </ul>
        <br>
      </div>
    `;

    container.querySelector('#listname').addEventListener('input', e => { listname = e.target.value; });
    container.querySelector('#btn-include').addEventListener('click', include);
    container.querySelector('#file-restore').addEventListener('change', fileChange);
    container.querySelectorAll('.btn-delete').forEach(el => {
      const l = lists.find(x => x.id === el.dataset.id);
      el.addEventListener('click', () => onSelect(l.id, l.items));
    });
  }

  function makeKey() {
    const d = new Date();
    return '' + d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes() + d.getSeconds() + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
  }

  function include() {
    const key = makeKey();
    const name = listname;
    listname = '';
    displayError('');

    if (lists.length >= config.limit_list) {
      displayError(state.language.e18);
    } else if (!name || name === '') {
      displayError(state.language.e6);
    } else {
      setDoc(doc(db, 'lists', key), {
        listname: name,
        access: { [state.user.email]: true }
      });
    }
    paint();
  }

  function onSelect(id, items) {
    if (!items || Object.keys(items).length === 0) {
      deleteDoc(doc(db, 'lists', id));
    } else {
      displayError(state.language.e7);
    }
  }

  function fileChange(event) {
    if (!listname || listname === '') {
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

        if (obj && obj.type === 'list') {
          const key = makeKey();
          setDoc(doc(db, 'lists', key), {
            listname,
            access: normalizeAccess(obj.access),
            items: obj.items
          });
          listname = '';
          paint();
        } else {
          displayError(state.language.e19);
        }
      };
      reader.readAsText(fileList[0]);
    }
  }

  unsub = watchMyDocs('lists', (docs) => {
    lists = [...docs].sort((a, b) => a.listname.localeCompare(b.listname));
    paint();
  });

  paint();
}

export function destroy() {
  if (unsub) { unsub(); unsub = null; }
}