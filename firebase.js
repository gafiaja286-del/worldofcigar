import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXnwTarrZXBBpWPgep_Tgow2ZerL-luzA",
  authDomain: "world-of-cigar.firebaseapp.com",
  projectId: "world-of-cigar",
  storageBucket: "world-of-cigar.firebasestorage.app",
  messagingSenderId: "924835496426",
  appId: "1:924835496426:web:2c3b2b9e3574e6627e7293"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase & Firestore berhasil terhubung!");

export { db };