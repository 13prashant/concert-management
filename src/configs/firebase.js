import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from './firebaseConfig';

// Init app
initializeApp(firebaseConfig);

// Services
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

// Timestamp
export const timestamp = serverTimestamp();
