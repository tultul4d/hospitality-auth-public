// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside firebase config', import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "hospitality-auth.firebaseapp.com",
  projectId: "hospitality-auth",
  storageBucket: "hospitality-auth.appspot.com",
  messagingSenderId: "673116789634",
  appId: "1:673116789634:web:ea87b59a71d32071c10d9b"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;