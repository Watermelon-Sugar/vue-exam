import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiaQDzK7GVDQ3QCr862sSEovkuzPXFuxc",
  authDomain: "alt-vue-exam.firebaseapp.com",
  projectId: "alt-vue-exam",
  storageBucket: "alt-vue-exam.appspot.com",
  messagingSenderId: "293763961834",
  appId: "1:293763961834:web:222d98709c4b30a5c7d893",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth();

export { auth };
