// 회원가입
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("이메일과 비밀번호를 입력하세요");
    return;
  }

  try {
    const userCredential =
      await createUserWithEmailAndPassword(auth, email, password);

    await sendEmailVerification(userCredential.user);

    alert("회원가입 성공! 이메일 인증을 확인하세요.");
    location.href = "login.html";
  } catch (error) {
    alert(error.message);
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

