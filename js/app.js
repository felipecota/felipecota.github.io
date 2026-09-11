import { auth, onAuthStateChanged, sendEmailVerification } from './firebase.js';
import { state, notify } from './state.js';
import { languages } from './language.js';
import { start, navigate } from './router.js';
import './shell.js';

function pickInitialLanguage() {
  const saved = localStorage.getItem('lang');
  if (saved) return languages.find(l => l.name === saved) ?? languages.find(l => l.name === 'en');
  if (navigator.language === 'pt-BR') return languages.find(l => l.name === 'ptbr');
  if (navigator.language.startsWith('fr')) return languages.find(l => l.name === 'fr');
  return languages.find(l => l.name === 'en');
}

state.language = pickInitialLanguage();

onAuthStateChanged(auth, (user) => {
  if (user) {
    state.isEmailVerified = user.emailVerified;

    if (user.emailVerified || user.providerData[0]?.providerId !== 'password') {
      state.user = user;
      state.isSignin = true;
      notify();

      if (currentPathIsNot('delete')) {
        let lastroute = localStorage.getItem('lastroute');
        if (lastroute === '/login' || !lastroute) lastroute = '/menu';
        navigate(lastroute.replace(/^\//, ''));
      }
    } else {
      auth.useDeviceLanguage();
      sendEmailVerification(user);
    }
  } else {
    state.user = null;
    state.isSignin = false;
    notify();
  }
});

function currentPathIsNot(path) {
  return location.hash.replace(/^#\/?/, '').split('/')[0] !== path;
}

start();