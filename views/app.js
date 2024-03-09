// register from
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  set,
  get,
  ref,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_oCcbuDPFrHa6OaEoGGggmbwx_KKqqW8",
  authDomain: "movie-app-8eb6d.firebaseapp.com",
  databaseURL:
    "https://movie-app-8eb6d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movie-app-8eb6d",
  storageBucket: "movie-app-8eb6d.appspot.com",
  messagingSenderId: "832838876712",
  appId: "1:832838876712:web:7808a43e551514d8d37f1d",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addData(e);
});
function addData(e) {
  set(ref(db, "data/" + e.target.name.value), {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
  }).then(() => {
    clearInput(e);
  });
}
const clearInput = (e) => {
  e.target.email.value = "";
  e.target.password.value = "";
  e.target.name.value = "";
};
//   login
let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.email.value, e.target.password.value);
});

