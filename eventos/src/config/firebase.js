import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVBQZZM-p_QoI0y5yvOCVCEAsY0Xnk6iU",
  authDomain: "eventos-fc498.firebaseapp.com",
  projectId: "eventos-fc498",
  storageBucket: "eventos-fc498.appspot.com",
  messagingSenderId: "301209157662",
  appId: "1:301209157662:web:6f7e1bf4762651f90bee0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
