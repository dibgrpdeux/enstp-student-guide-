// ============================================
// auth.js — نظام المصادقة
// ENSTP Forum
// ============================================

import { 
  auth, db, isEnstpEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  doc, setDoc, getDoc, serverTimestamp
} from './firebase-config.js';

async function registerUser(email, password, name, wilaya, year, groupe) {
  if (!isEnstpEmail(email)) {
    throw new Error('Email doit être @enstp.edu.dz');
  }
  if (password.length < 6) {
    throw new Error('Mot de passe : minimum 6 caractères');
  }
  if (!name || name.trim().length < 2) {
    throw new Error('Nom complet requis');
  }
  if (!wilaya) {
    throw new Error('Wilaya requise');
  }
  
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  await updateProfile(user, { displayName: name });
  
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: email.toLowerCase().trim(),
    name: name.trim(),
    wilaya: wilaya,
    year: year || '',
    groupe: groupe || '',
    role: 'student',
    createdAt: serverTimestamp()
  });
  
  return user;
}

async function loginUser(email, password) {
  if (!isEnstpEmail(email)) {
    throw new Error('Email doit être @enstp.edu.dz');
  }
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

async function logoutUser() {
  await signOut(auth);
}

async function getUserData(uid) {
  if (!uid) return null;
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}

function getCurrentUser() {
  return auth.currentUser;
}

function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export { 
  registerUser, 
  loginUser, 
  logoutUser,
  getUserData, 
  getCurrentUser, 
  onAuthChange
};
