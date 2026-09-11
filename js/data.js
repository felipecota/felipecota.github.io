import { db, collection, doc, query, where, onSnapshot } from './firebase.js';
import { state } from './state.js';

export function emailKey(email = state.user.email) {
  return email.replace(/\./g, '´');
}

export function watchMyDocs(collectionName, callback) {
  const q = query(collection(db, collectionName), where('access.' + emailKey(), '==', true));
  return onSnapshot(q, snapshot => {
    callback(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

export function watchDoc(collectionName, id, callback) {
  return onSnapshot(doc(db, collectionName, id), snap => {
    callback(snap.exists() ? snap.data() : null);
  });
}