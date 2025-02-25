// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5ywqIP6BnbA-NKel9HGCoqzLoR4QTtXM",
  authDomain: "exclusiveecommerce-9bee1.firebaseapp.com",
  projectId: "exclusiveecommerce-9bee1",
  storageBucket: "exclusiveecommerce-9bee1.appspot.com",
  messagingSenderId: "347117063730",
  appId: "1:347117063730:web:8802ce80bec3d666ad762b",
  measurementId: "G-8D4YQVC0X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);
// export const auth = getAuth(app);
