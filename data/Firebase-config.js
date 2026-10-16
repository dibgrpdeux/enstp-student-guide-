// ============================================
// firebase-config.js — إعدادات Firebase
// ENSTP Forum
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { 
  getAuth, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  query,          // ← مهم
  orderBy,
  limit,
  where,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ============================================
// Firebase Configuration
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyD35OVZ9JPlWr7ayQJMu8yVPFu3N_gZD1g",
  authDomain: "enstp-forum-19a28.firebaseapp.com",
  projectId: "enstp-forum-19a28",
  storageBucket: "enstp-forum-19a28.firebasestorage.app",
  messagingSenderId: "598736412518",
  appId: "1:598736412518:web:a2a7c69a537e6567ffb2a7"
};

// ============================================
// Initialize
// ============================================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ============================================
// Wilayas (58 ولاية)
// ============================================
const WILAYAS = [
  "أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية", "بسكرة",
  "بشار", "البليدة", "البويرة", "تمنراست", "تبسة", "تلمسان", "تيارت",
  "تيزي وزو", "الجزائر", "الجلفة", "جيجل", "سطيف", "سعيدة", "سكيكدة",
  "سيدي بلعباس", "عنابة", "قالمة", "قسنطينة", "المدية", "مستغانم",
  "المسيلة", "معسكر", "ورقلة", "وهران", "البيض", "إليزي", "برج بوعريريج",
  "بومرداس", "الطارف", "تندوف", "تيسمسيلت", "الوادي", "خنشلة", "سوق أهراس",
  "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت", "غرداية",
  "غليزان", "تيميمون", "برج باجي مختار", "أولاد جلال", "بني عباس",
  "عين صالح", "عين قزام", "تقرت", "جانت", "المغير", "المنيعة"
];

// ============================================
// Helper
// ============================================
function isEnstpEmail(email) {
  return email && email.toLowerCase().endsWith('@enstp.edu.dz');
}

// ============================================
// Exports
// ============================================
export {
  auth,
  db,
  WILAYAS,
  isEnstpEmail,
  // Auth
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  // Firestore
  collection,
  query,          // ← مهم جداً
  orderBy,
  limit,
  where,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp
};
