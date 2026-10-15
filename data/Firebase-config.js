// ============================================
// firebase-config.js — إعداد Firebase
// ENSTP Forum
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD35OVZ9JPlWr7ayQJMu8yVPFu3N_gZD1g",
  authDomain: "enstp-forum-19a28.firebaseapp.com",
  projectId: "enstp-forum-19a28",
  storageBucket: "enstp-forum-19a28.firebasestorage.app",
  messagingSenderId: "598736412518",
  appId: "1:598736412518:web:a2a7c69a537e6567ffb2a7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const ALLOWED_DOMAIN = '@enstp.edu.dz';

function isEnstpEmail(email) {
  if (!email) return false;
  return email.toLowerCase().trim().endsWith(ALLOWED_DOMAIN);
}

const WILAYAS = [
  "أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية", "بسكرة", "بشار",
  "البليدة", "البويرة", "تمنراست", "تبسة", "تلمسان", "تيارت", "تيزي وزو", "الجزائر",
  "الجلفة", "جيجل", "سطيف", "سعيدة", "سكيكدة", "سيدي بلعباس", "عنابة", "قالمة",
  "قسنطينة", "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة", "وهران", "البيض",
  "إليزي", "برج بوعريريج", "بومرداس", "الطارف", "تندوف", "تيسمسيلت", "الوادي", "خنشلة",
  "سوق أهراس", "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت", "غرداية", "غليزان",
  "تيميمون", "برج باجي مختار", "أولاد جلال", "بني عباس", "عين صالح", "عين قزام",
  "تقرت", "جانت", "المغير", "المنيعة",
  "تيمياوين (منتدبة)", "عين غار (منتدبة)", "قصر البخاري (منتدبة)", 
  "بوسعادة (منتدبة)", "العريشة (منتدبة)", "جانت (منتدبة)",
  "عين صالح (منتدبة)", "عين قزام (منتدبة)", "المغير (منتدبة)",
  "برج باجي مختار (منتدبة)", "تندوف (منتدبة)"
];

export { 
  app, auth, db, 
  firebaseConfig, 
  ALLOWED_DOMAIN, 
  WILAYAS,
  isEnstpEmail,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  collection, doc, setDoc, getDoc, getDocs,
  addDoc, query, where, orderBy, limit,
  serverTimestamp, onSnapshot, deleteDoc, updateDoc
};
