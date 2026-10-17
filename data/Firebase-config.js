// ============================================
// firebase-config.js — إعدادات Firebase + Cloudinary
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  signOut, updateProfile, sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore, collection, query, orderBy, limit, where, addDoc, getDoc, getDocs,
  setDoc, updateDoc, deleteDoc, doc, onSnapshot, serverTimestamp
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ============================================
// إعدادات Cloudinary (ضع بياناتك هنا)
// ============================================
const CLOUDINARY_CLOUD_NAME = "YOUR_CLOUD_NAME"; // استبدل هذا بـ Cloud Name الخاص بك
const CLOUDINARY_UPLOAD_PRESET = "YOUR_UPLOAD_PRESET"; // استبدل هذا باسم الـ Preset الذي أنشأته

// دالة رفع الملفات إلى Cloudinary
async function uploadToCloudinary(file, onProgress) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        const percent = (e.loaded / e.total) * 100;
        onProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data.secure_url); // هذا هو رابط الملف بعد الرفع
      } else {
        reject(new Error('فشل الرفع: ' + xhr.responseText));
      }
    };
    
    xhr.onerror = () => reject(new Error('خطأ في الشبكة أثناء الرفع'));
    xhr.send(formData);
  });
}

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

function isEnstpEmail(email) {
  return email && email.toLowerCase().endsWith('@enstp.edu.dz');
}

export {
  auth, db, WILAYAS, isEnstpEmail, uploadToCloudinary,
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  signOut, updateProfile, sendPasswordResetEmail,
  collection, query, orderBy, limit, where, addDoc, getDoc, getDocs,
  setDoc, updateDoc, deleteDoc, doc, onSnapshot, serverTimestamp
};
