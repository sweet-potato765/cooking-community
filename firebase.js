// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqQ7R8HRu5ZyoL9nvwTfFj2CNQzhVsTRk",
  authDomain: "cooking-community-bf26e.firebaseapp.com",
  projectId: "cooking-community-bf26e",
  storageBucket: "cooking-community-bf26e.firebasestorage.app",
  messagingSenderId: "703243645056",
  appId: "1:703243645056:web:43592fc755b30c4464b665",
  measurementId: "G-8XHR9RFRJ8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

window.logout = () => {
  signOut(auth).then(() => {
    alert("로그아웃 되었습니다");
    location.href = "login.html";
  });
};