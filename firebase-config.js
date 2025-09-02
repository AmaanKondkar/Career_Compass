import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

// Initialize Firebase App
const firebaseConfig = {
  apiKey: "AIzaSyD2fZbAKmL1Cti7NIDcadAh4WqVv5KzbPI",
  authDomain: "career-guidance-e1462.firebaseapp.com",
  projectId: "career-guidance-e1462",
  storageBucket: "career-guidance-e1462.appspot.com",
  messagingSenderId: "566009292247",
  appId: "1:566009292247:web:67720ba8c8030ef7f95792",
  measurementId: "G-4TWBG640XT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, getDocs, serverTimestamp, ref, uploadBytes, getDownloadURL };
