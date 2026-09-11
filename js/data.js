import { db, collection, doc, query, where, onSnapshot, FieldPath } from './firebase.js';
import { state } from './state.js';

export function watchMyDocs(collectionName, callback) {
  const q = query(collection(db, collectionName), where(new FieldPath('access', state.user.email), '==', true));
  return onSnapshot(q, snapshot => {
    callback(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

export function watchDoc(collectionName, id, callback) {
  return onSnapshot(doc(db, collectionName, id), snap => {
    callback(snap.exists() ? snap.data() : null);
  });
}

export function normalizeAccess(access) {
  const result = {};
  for (const key in access ?? {}) {
    result[key.includes('´') ? key.replace(/´/g, '.') : key] = access[key];
  }
  return result;
}