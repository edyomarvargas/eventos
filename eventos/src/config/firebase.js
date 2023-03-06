import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVBQZZM-p_QoI0y5yvOCVCEAsY0Xnk6iU",
  authDomain: "eventos-fc498.firebaseapp.com",
  projectId: "eventos-fc498",
  storageBucket: "eventos-fc498.appspot.com",
  messagingSenderId: "301209157662",
  appId: "1:301209157662:web:6f7e1bf4762651f90bee0f"
};

const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);
