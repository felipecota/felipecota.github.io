import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';
import {
  getAuth, onAuthStateChanged, signOut, deleteUser, sendEmailVerification,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup,
  sendPasswordResetEmail, fetchSignInMethodsForEmail, linkWithCredential,
  EmailAuthProvider, OAuthProvider
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
  collection, doc, setDoc, updateDoc, deleteDoc, deleteField, getDoc,
  onSnapshot, query, where
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';

// mesma config do src/environments/environment.ts
const firebaseConfig = {
  apiKey: "AIzaSyDBVo12fK1Auek9_jWWfx4wGPRdStJS-iQ",
  authDomain: "simplesapprealtime-60890.firebaseapp.com",
  projectId: "simplesapprealtime-60890",
  storageBucket: "simplesapprealtime-60890.appspot.com",
  messagingSenderId: "598037447832",
  appId: "1:598037447832:web:e1dd1c9142e71880"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

export {
  onAuthStateChanged, signOut, deleteUser, sendEmailVerification,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup,
  sendPasswordResetEmail, fetchSignInMethodsForEmail, linkWithCredential,
  EmailAuthProvider, OAuthProvider,
  collection, doc, setDoc, updateDoc, deleteDoc, deleteField, getDoc,
  onSnapshot, query, where
};