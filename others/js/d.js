const firebaseConfig = {
  apiKey: "AIzaSyBfrUKGGIDTXgXSeIx0ozWkt8EFyX6iIh0",
  authDomain: "achat-31383.firebaseapp.com",
  databaseURL: "https://achat-31383-default-rtdb.firebaseio.com",
  projectId: "achat-31383",
  storageBucket: "achat-31383.appspot.com",
  messagingSenderId: "673357702792",
  appId: "1:673357702792:web:0d1a4868d318348f4f213d",
  measurementId: "G-EXYF8D16M3"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.database();
const auth = firebase.auth()

const user = auth.currentUser;
console.log()

document.getElementById("send-message").addEventListener("submit", postChat); function postChat(e) 
{ e.preventDefault();
const timestamp = Date.now(); 
const chatTxt = document.getElementById("chat-txt");
const message = chatTxt.value; chatTxt.value = ""; 
const user = auth.currentUser;
db.ref("messages/" + timestamp).set({ 
  usr: user.uid,
  msg: message, 
}); 
}
const fetchChat = db.ref("messages/"); 
fetchChat.on("child_added", function (snapshot) { const messages = snapshot.val(); 
const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
document.getElementById("messages").innerHTML += msg; });