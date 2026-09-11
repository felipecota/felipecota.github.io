import { state, subscribe } from './state.js';
import { t } from './translate.js';
import { navigate, currentPath } from './router.js';
import { auth, signOut } from './firebase.js';

const LIST_ROUTES = ['list-detail', 'list-item', 'list-form', 'list-access'];
const BILL_ROUTES = ['bill-detail', 'bill-item', 'bill-form', 'bill-access'];

const header = document.getElementById('shell-header');
const tabs = document.getElementById('shell-tabs');
const errorBanner = document.getElementById('error-banner');

function renderHeader() {
  const path = currentPath().split('/')[0];
  header.innerHTML = `
    ${state.isSignin ? `<span class="icone glyphicon glyphicon-off pointer" style="color:${state.isConnected ? 'green' : 'red'}" id="logout-btn"></span>` : ''}
    ${path !== 'menu' && state.isSignin ? '<span class="home glyphicon glyphicon-home pointer" id="menu-btn"></span>' : ''}
    <div class="title"><img class="logo" src="assets/images/logo.png" title="logo"><br>Firelist</div>
  `;
  header.querySelector('#logout-btn')?.addEventListener('click', () => {
    signOut(auth);
    navigate('login');
  });
  header.querySelector('#menu-btn')?.addEventListener('click', () => navigate('menu'));
}

function renderTabs() {
  const path = currentPath().split('/')[0];
  const group = LIST_ROUTES.includes(path) ? LIST_ROUTES
              : BILL_ROUTES.includes(path) ? BILL_ROUTES
              : null;

  if (!group) { tabs.innerHTML = ''; return; }

  const labels = group === LIST_ROUTES
    ? { 'list-detail': 't12', 'list-item': 't11', 'list-form': 't5', 'list-access': 't13' }
    : { 'bill-detail': 't12', 'bill-item': 't11', 'bill-form': 't14', 'bill-access': 't13' };

  tabs.innerHTML = `<ul class="nav nav-tabs">${group.map(r =>
    `<li class="${path === r ? 'active' : ''}"><a href="#/${r}">${t(labels[r])}</a></li>`
  ).join('')}</ul>`;
}

function renderErrorBanner() {
  errorBanner.textContent = state.erro || '';
  errorBanner.style.display = state.erro ? 'block' : 'none';
}

function refreshShell() {
  renderHeader();
  renderTabs();
  renderErrorBanner();
}

document.addEventListener('routechange', refreshShell);
subscribe(refreshShell);

// swipe (substitui HAMMER_GESTURE_CONFIG do app.module.ts)
const swipeArea = document.getElementById('swipe-area');

function swipe(direction) {
  const path = currentPath().split('/')[0];
  const order = LIST_ROUTES.includes(path) ? LIST_ROUTES
              : BILL_ROUTES.includes(path) ? BILL_ROUTES
              : null;
  if (!order) { navigate('menu'); return; }
  const idx = order.indexOf(path);
  const nextIdx = direction === 'swipeleft' ? idx + 1 : idx - 1;
  navigate(order[nextIdx] ?? 'menu');
}

if (window.Hammer && swipeArea) {
  const mc = new Hammer(swipeArea, { touchAction: 'pan-y', inputClass: Hammer.TouchInput });
  mc.on('swipeleft swiperight', ev => swipe(ev.type));
}