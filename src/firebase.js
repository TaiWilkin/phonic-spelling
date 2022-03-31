import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";
import { calculateScore, formatDate, defaultVoice } from "./util";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6NLAITuaPytS4nIgc_K8glupmHvWdkjE",
  authDomain: "phonic-spelling.firebaseapp.com",
  projectId: "phonic-spelling",
  storageBucket: "phonic-spelling.appspot.com",
  messagingSenderId: "257819563297",
  appId: "1:257819563297:web:7d607fe79bc518059ada60",
  measurementId: "G-4952QJ0T3D",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const firebaseRegister = async (email, password) =>
  setPersistence(auth, browserLocalPersistence).then(() => {
    return createUserWithEmailAndPassword(auth, email, password);
  });

export const firebaseSignin = async (email, password) =>
  setPersistence(auth, browserLocalPersistence).then(() => {
    return signInWithEmailAndPassword(auth, email, password);
  });

export const firebaseSignout = async () => signOut(auth);

export const getCurrentUser = () => auth.currentUser;

export const watchAuthState = (callback) => onAuthStateChanged(auth, callback);

export const firebaseAddLessonAttempt = async ({
  missedWords,
  completedWords,
  lesson,
}) => {
  if (!auth.currentUser) {
    toast.error("Must be logged in.");
    return;
  }
  const newLessonAttemptRef = doc(
    collection(db, "lessons", auth.currentUser.uid, "attempts")
  );
  const score = calculateScore({ completedWords, missedWords });
  const data = {
    date: new Date(),
    lesson,
    score,
    missedWords,
    completedWords,
    user: auth.currentUser.uid,
  };
  await setDoc(newLessonAttemptRef, data);

  const docSnap = await getDoc(newLessonAttemptRef);

  if (docSnap.exists()) {
    let attempt = { ...docSnap.data(), id: docSnap.id };
    attempt = {
      ...attempt,
      date: formatDate(attempt.date.toDate()),
    };
    return attempt;
  } else {
    toast.error("Error saving attempt.");
  }
};

export const firebaseGetLessonAttempts = async () => {
  if (!auth.currentUser) {
    toast.error("Must be logged in.");
    return;
  }
  const lessonAttemptRef = collection(
    db,
    "lessons",
    auth.currentUser.uid,
    "attempts"
  );

  const q = query(lessonAttemptRef, orderBy("date"));

  const querySnapshot = await getDocs(q);

  const attempts = {};
  querySnapshot.forEach((doc) => {
    let attempt = { ...doc.data(), id: doc.id };
    attempt = {
      ...attempt,
      date: formatDate(attempt.date.toDate()),
    };
    if (!attempts[attempt.lesson]) {
      attempts[attempt.lesson] = [attempt];
    } else {
      attempts[attempt.lesson] = [...attempts[attempt.lesson], attempt];
    }
  });
  return attempts;
};

export const firebaseUpdateSettings = async (settings) => {
  if (!auth.currentUser) {
    toast.error("Must be logged in.");
    return;
  }
  const settingsRef = doc(db, "settings", auth.currentUser.uid);

  await setDoc(settingsRef, settings);

  const docSnap = await getDoc(settingsRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    toast.error("Error saving settings.");
    return { voice: defaultVoice };
  }
};

export const firebaseGetSettings = async () => {
  if (!auth.currentUser) {
    toast.error("Must be logged in.");
    return;
  }
  const settingsRef = doc(db, "settings", auth.currentUser.uid);

  const docSnap = await getDoc(settingsRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    return { voice: defaultVoice };
  }
};

export default app;
