import { initializeApp, getApps } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getDatabase, type Database } from "firebase/database";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const requiredEnvVars = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
} as const;

export const missingFirebaseEnvKeys = Object.entries(requiredEnvVars)
  .filter(([, value]) => typeof value !== "string" || value.length === 0)
  .map(([key]) => key);

export const isFirebaseConfigured = missingFirebaseEnvKeys.length === 0;

if (!isFirebaseConfigured) {
  console.error(
    `Missing Firebase environment variables: ${missingFirebaseEnvKeys.join(
      ", ",
    )}. Set VITE_FIREBASE_* in Vercel Project Settings → Environment Variables, then redeploy.`,
  );
}

const firebaseApp =
  isFirebaseConfigured
    ? getApps().length === 0
      ? initializeApp({
          apiKey: requiredEnvVars.apiKey as string,
          authDomain: requiredEnvVars.authDomain as string,
          databaseURL: requiredEnvVars.databaseURL as string,
          projectId: requiredEnvVars.projectId as string,
          storageBucket: requiredEnvVars.storageBucket as string,
          messagingSenderId: requiredEnvVars.messagingSenderId as string,
          appId: requiredEnvVars.appId as string,
          measurementId: requiredEnvVars.measurementId as string,
        })
      : getApps()[0]!
    : null;

// Call sites only run after App gates on isFirebaseConfigured
export const app = firebaseApp;
export const db = (firebaseApp ? getFirestore(firebaseApp) : null) as Firestore;
export const realtimeDb = (firebaseApp ? getDatabase(firebaseApp) : null) as Database;
export const storage = (firebaseApp ? getStorage(firebaseApp) : null) as FirebaseStorage;

export default app;
