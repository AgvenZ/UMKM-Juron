import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCzIsSqZwufwT9GTEIKPOdZ_cSoXvzSyok",
  authDomain: "umkm-juron.firebaseapp.com",
  databaseURL: "https://umkm-juron-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "umkm-juron",
  storageBucket: "umkm-juron.firebasestorage.app",
  messagingSenderId: "732405910071",
  appId: "1:732405910071:web:4ec5b78f42aa5d37c20db2",
  measurementId: "G-J4FBEVQ1D6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;