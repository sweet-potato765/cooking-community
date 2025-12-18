// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 회원가입
window.signup = async () => {
  const email = document.getElementById("email").value;
  const pw = document.getElementById("password").value;

  if (!email || !pw) {
    alert("이메일과 비밀번호를 입력하세요");
    return;
  }

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, pw);
    await sendEmailVerification(userCred.user);
    alert("이메일 인증 메일을 보냈습니다. 인증 후 로그인하세요.");
  } catch (e) {
    alert(e.message);
  }
};

// 로그인
window.login = async () => {
  const email = document.getElementById("email").value;
  const pw = document.getElementById("password").value;

  if (!email || !pw) {
    alert("이메일과 비밀번호를 입력하세요");
    return;
  }

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, pw);

    if (!userCred.user.emailVerified) {
      alert("이메일 인증이 필요합니다.");
      return;
    }

    location.href = "index.html";
  } catch (e) {
    alert("로그인 실패: " + e.message);
  }
};