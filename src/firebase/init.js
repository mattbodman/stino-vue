import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOlSHMFI1IPnRRgrgWdeub60XA5ywyAoE",
  authDomain: "stino-vue.firebaseapp.com",
  projectId: "stino-vue",
  storageBucket: "stino-vue.appspot.com",
  messagingSenderId: "251421079663",
  appId: "1:251421079663:web:dcf572a107769a2c2cb59a"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
