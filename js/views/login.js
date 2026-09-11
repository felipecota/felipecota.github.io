import {
  auth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, fetchSignInMethodsForEmail, EmailAuthProvider,
  signInWithPopup, linkWithCredential, OAuthProvider
} from '../firebase.js';
import { state } from '../state.js';
import { t } from '../translate.js';

export function render(container) {
  let isLoggingIn = true;
  let email = '';
  let password = '';
  let erro = '';
  let pendingCred = null;
  let pendingMail = null;

  function paint() {
    container.innerHTML = `
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="text" class="form-control email" placeholder="Email" value="${email}">
      </div>
      <div class="form-group">
        <label for="password">${t('t6')}:</label>
        <input id="password" type="password" class="form-control email" placeholder="${t('t6')}" value="${password}">
      </div>
      <button class="btn btn-primary" id="btn-submit" type="button">${isLoggingIn ? t('t7') : t('t8')}</button>
      <button class="btn btn-primary" id="btn-toggle" type="button">${isLoggingIn ? t('t8') : t('t9')}</button>
      <br><br>
      <a href="javascript:void(0);" id="btn-forgot">${t('m2')}</a>
      <br><br>
      ${erro ? `<div class="alert alert-danger">${erro}</div>` : ''}
    `;

    const emailInput = container.querySelector('#email');
    const passwordInput = container.querySelector('#password');
    emailInput.addEventListener('input', e => { email = e.target.value; });
    emailInput.addEventListener('keypress', () => { erro = ''; });
    passwordInput.addEventListener('input', e => { password = e.target.value; });
    passwordInput.addEventListener('keypress', e => { erro = ''; if (e.keyCode === 13) login(); });
    container.querySelector('#btn-submit').addEventListener('click', login);
    container.querySelector('#btn-toggle').addEventListener('click', () => { isLoggingIn = !isLoggingIn; erro = ''; paint(); });
    container.querySelector('#btn-forgot').addEventListener('click', forgot);
  }

  // mantido para quando reativar os botões sociais (hoje comentados também no HTML original)
  function loginSocial(provider) {
    signInWithPopup(auth, provider).then(result => {
      const user = result.user;
      if (user && pendingMail === user.email) {
        return linkWithCredential(user, pendingCred);
      }
    }).catch(error => {
      if (error.code === 'auth/account-exists-with-different-credential') {
        pendingCred = OAuthProvider.credentialFromError(error);
        pendingMail = error.customData?.email;
        fetchSignInMethodsForEmail(auth, pendingMail).then(providers => {
          if (providers[0] === 'password' && providers.length === 1) {
            email = pendingMail;
            erro = state.language.e16;
          } else {
            erro = state.language.e17.replace('$input$', providers[0].replace('.com', ''));
          }
          paint();
        });
      } else {
        erro = error.code;
        paint();
      }
    });
  }

  function login() {
    if (!email || !password) {
      erro = state.language.e3;
      navigator.vibrate?.([500]);
      paint();
    } else if (isLoggingIn) {
      signInWithEmailAndPassword(auth, email.trim(), password).then(cred => {
        const user = cred.user;
        if (user && pendingMail === email.trim()) {
          return linkWithCredential(user, pendingCred);
        }
      }).catch(error => {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
          isLoggingIn = false;
          erro = state.language.e21;
        } else if (error.code === 'auth/wrong-password') {
          erro = state.language.e4;
        } else {
          erro = error.code;
        }
        paint();
      });
    } else {
      createUserWithEmailAndPassword(auth, email.trim(), password).then(() => {
        isLoggingIn = true;
        erro = state.language.e20;
        paint();
      }).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          fetchSignInMethodsForEmail(auth, email).then(providers => {
            erro = state.language.e17.replace('$input$', providers[0].replace('.com', ''));
            pendingCred = EmailAuthProvider.credential(email, password);
            pendingMail = email;
            paint();
          });
        } else {
          erro = state.language.e4;
          paint();
        }
      });
    }
  }

  function forgot() {
    if (!email) {
      erro = state.language.e3;
      navigator.vibrate?.([500]);
      paint();
    } else {
      auth.useDeviceLanguage();
      sendPasswordResetEmail(auth, email).then(() => {
        erro = state.language.m3;
        paint();
      }).catch(() => {
        erro = state.language.e13;
        paint();
      });
    }
  }

  paint();
}

export function destroy() {}