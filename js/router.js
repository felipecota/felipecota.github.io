import { state } from './state.js';

const routes = {
  '':             { redirect: 'menu' },
  'login':        { view: () => import('./views/login.js') },
  'delete':       { view: () => import('./views/delete.js') },
  'menu':         { view: () => import('./views/menu.js'), auth: true },
  'settings':     { view: () => import('./views/settings.js'), auth: true },
  'list-detail':  { view: () => import('./views/list-detail.js'), auth: true },
  'list-form':    { view: () => import('./views/list-form.js'), auth: true },
  'list-access':  { view: () => import('./views/list-access.js'), auth: true },
  'list-item':    { view: () => import('./views/list-item.js'), auth: true },
  'bill-form':    { view: () => import('./views/bill-form.js'), auth: true },
  'bill-access':  { view: () => import('./views/bill-access.js'), auth: true },
  'bill-item':    { view: () => import('./views/bill-item.js'), auth: true },
  'bill-detail':  { view: () => import('./views/bill-detail.js'), auth: true },
};

let currentView = null;
const outlet = document.getElementById('view');

export function currentPath() {
  return location.hash.replace(/^#\/?/, '');
}

export function navigate(path) {
  location.hash = '#/' + path.replace(/^\/+/, '');
}

async function render() {
  const [base, ...rest] = currentPath().split('/');
  const route = routes[base] ?? routes['menu'];

  if (route.redirect) {
    navigate(route.redirect);
    return;
  }

  if (route.auth) {
    if (!state.isSignin) {
      navigate('login');
      return;
    }
    localStorage.setItem('lastroute', '/' + base);
  }

  if (currentView?.destroy) currentView.destroy();

  const mod = await route.view();
  outlet.innerHTML = '';
  currentView = mod;
  mod.render(outlet, rest);

  document.dispatchEvent(new CustomEvent('routechange'));
}

window.addEventListener('hashchange', render);

export function start() {
  render();
}