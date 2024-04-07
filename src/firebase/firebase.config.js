// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2bDxVhqaX-XKSv5tA3vgrZOat3WmK_F8",
  authDomain: "dragon-news-2673f.firebaseapp.com",
  projectId: "dragon-news-2673f",
  storageBucket: "dragon-news-2673f.appspot.com",
  messagingSenderId: "587288846219",
  appId: "1:587288846219:web:7881c83d746fae8b87d98e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;