import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqQ7R8HRu5ZyoL9nvwTfFj2CNQzhVsTRk",
  authDomain: "cooking-community-bf26e.firebaseapp.com",
  projectId: "cooking-community-bf26e",
  storageBucket: "cooking-community-bf26e.firebasestorage.app",
  messagingSenderId: "703243645056",
  appId: "1:703243645056:web:43592fc755b30c4464b665",
  measurementId: "G-8XHR9RFRJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.logout = () => {
  signOut(auth).then(() => {
    alert("로그아웃 되었습니다");
    location.href = "login.html";
  });

};
