// login.js (Firebase version)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// 🔑 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD2fZbAKmL1Cti7NIDcadAh4WqVv5KzbPI",
  authDomain: "career-guidance-e1462.firebaseapp.com",
  projectId: "career-guidance-e1462",
  storageBucket: "career-guidance-e1462.appspot.com",
  messagingSenderId: "566009292247",
  appId: "1:566009292247:web:67720ba8c8030ef7f95792"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const formBox = document.getElementById('form-box');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginError = document.getElementById('login-error');
const signupSuccess = document.getElementById('signup-success');

function showSignup() {
  formBox.classList.remove('slide-login');
  formBox.classList.add('slide-signup');
  loginError.style.display = 'none';
  signupSuccess.style.display = 'none';
}

function showLogin() {
  formBox.classList.remove('slide-signup');
  formBox.classList.add('slide-login');
  loginError.style.display = 'none';
  signupSuccess.style.display = 'none';
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function handleSignupValidation() {
  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  const usernameError = document.getElementById('signup-username-error');
  const emailError = document.getElementById('signup-email-error');
  const passwordError = document.getElementById('signup-password-error');

  let valid = true;

  usernameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  if (!username) {
    usernameError.textContent = 'Username is required.';
    valid = false;
  }

  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  return valid;
}

// ✅ Signup (Firebase)
signupBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  if (!handleSignupValidation()) return;

  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    signupSuccess.style.display = 'block';
    setTimeout(() => {
      showLogin();
    }, 1000);
  } catch (error) {
    alert("Signup error: " + error.message);
  }
});

// ✅ Login (Firebase)
loginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginError.style.display = 'none';
    alert("Login successful!");
    window.location.href = 'index.html';
  } catch (error) {
    loginError.style.display = 'block';
    loginError.textContent = "Login failed: " + error.message;
  }
});

// Default to login slide
formBox.classList.add('slide-login');
