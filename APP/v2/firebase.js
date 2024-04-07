import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt2g7b8S3j5NRC8CLvKaHDTLMcHrC6e5A",
  authDomain: "test-6c0a0.firebaseapp.com",
  projectId: "test-6c0a0",
  storageBucket: "test-6c0a0.appspot.com",
  messagingSenderId: "737244331035",
  appId: "1:737244331035:web:64b6d1296adf930015ccbe",
  databaseURL: "https://test-6c0a0-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
