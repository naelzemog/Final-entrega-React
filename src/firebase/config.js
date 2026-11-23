import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcCD6qIEWgt988CyaXsrf-7Nq0y05Tlfs",
  authDomain: "ttreact-58ec0.firebaseapp.com",
  projectId: "ttreact-58ec0",
  storageBucket: "ttreact-58ec0.firebasestorage.app",
  messagingSenderId: "682047994926",
  appId: "1:682047994926:web:53b291ef488dd1fe5873bf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
