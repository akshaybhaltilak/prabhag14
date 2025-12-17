// src/Firebase/config.js
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEcuZVvQectcHwKjfnaI4Dt770GnwTC6w",
  authDomain: "akolaprabhag14.firebaseapp.com",
  databaseURL: "https://akolaprabhag14-default-rtdb.firebaseio.com",
  projectId: "akolaprabhag14",
  storageBucket: "akolaprabhag14.firebasestorage.app",
  messagingSenderId: "780967918738",
  appId: "1:780967918738:web:31427237c4a2e200a27a4b"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence and long polling
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  }),
  experimentalForceLongPolling: true, // better for low-speed networks
  useFetchStreams: false,
});

export { db };