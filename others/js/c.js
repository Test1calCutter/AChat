console.log("ready")

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfrUKGGIDTXgXSeIx0ozWkt8EFyX6iIh0",
  authDomain: "achat-31383.firebaseapp.com",
  projectId: "achat-31383",
  storageBucket: "achat-31383.appspot.com",
  messagingSenderId: "673357702792",
  appId: "1:673357702792:web:0d1a4868d318348f4f213d",
  measurementId: "G-EXYF8D16M3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.database();

const username = prompt("Please Tell Us Your Name");


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Accessed")
  } else {
    console.error("Please login or create an account to view this page!")
    window.location.href="../../index.html"
  }
});

function sendMessage(e) {
  e.preventDefault();

  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  messageInput.value = "";

  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  db.ref("messages/" + timestamp).set({
    username,
    message,
  });
}


const fetchChat = db.ref("messages/");

fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  document.getElementById("messages").innerHTML += message;
});