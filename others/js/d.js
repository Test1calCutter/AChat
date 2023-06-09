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

function scroll(){
  var chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;
}

function scrollToBottom() {
  var chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;
  console.log(chat.scrollHeight);
  console.log(chat.clientHeight);
}

document.addEventListener("DOMContentLoaded", function() {
  scrollToBottom();
});


firebase.initializeApp(firebaseConfig); 
const db = firebase.database();
const auth = firebase.auth()

const user = auth.currentUser;

auth.onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href="index.html"
    console.log("Access Denied. Please login.")
  } else {
    console.log("Access Granted.")
  }
});


document.getElementById("send-message").addEventListener("submit", postChat);

//function postChat(e) 
//{ e.preventDefault();
//
//scroll();
//const timestamp = Date.now(); 
//const chatTxt = document.getElementById("chat-txt");
//const message = chatTxt.value; chatTxt.value = ""; 
//const user = auth.currentUser;
//
//db.ref("messages/" + timestamp).set({ 
//  usr: "Unknown User",
//  msg: message,
//  uid: user.uid,
//}); 
//}
function postChat(e) { 
  e.preventDefault();
  
  const timestamp = Date.now(); 
  const chatTxt = document.getElementById("chat-txt");
  const message = chatTxt.value; 
  chatTxt.value = ""; 
  const user = auth.currentUser;
  
  db.ref("users/" + user.uid).once("value")
    .then((snapshot) => {
      const userData = snapshot.val();
      const fullName = userData.full_name;
      db.ref("messages/" + timestamp).set({ 
        usr: fullName,
        msg: message,
        uid: user.uid,
      }); 
    })
    .catch((error) => {
      console.error(error);
    });
}

const fetchChat = db.ref("messages/"); 
fetchChat.on("child_added", function (snapshot) { const messages = snapshot.val(); 
const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
document.getElementById("messages").innerHTML += msg; });

(function(){
  var msg = "Be careful what you say here, we do not take responsibility of your account. You have to look after you account by yourself. \nWe will not share, download or review any of the messages being written here. We trust our users to be kind to each other.\nNo illegal activities allowed here.\n\nFuture updates will be shown at our homepage!";
  var closeBtnMsg = "OK";
  var privacyBtnMsg = "";
  
  var docRoot = document.body;
  var okC = document.createElement("div");
  okC.setAttribute("id", "okCookie");
  var okCp = document.createElement("p");
  var okcText = document.createTextNode(msg); 
  
  var okCclose = document.createElement("a");
  var okcCloseText = document.createTextNode(closeBtnMsg);
  okCclose.setAttribute("href", "#");
  okCclose.setAttribute("id", "okClose");
  okCclose.appendChild(okcCloseText);
  okCclose.addEventListener("click", closeCookie, false);
 
  var okCprivacy = document.createElement("a");
  var okcPrivacyText = document.createTextNode(privacyBtnMsg);
  okCprivacy.setAttribute("id", "okCprivacy");
  okCprivacy.appendChild(okcPrivacyText);

  okCp.appendChild(okcText);
  okC.appendChild(okCp);
  okC.appendChild(okCclose);
  docRoot.appendChild(okC);
  
  okC.classList.add("okcBeginAnimate");
  
  function closeCookie(){
    docRoot.removeChild(okC);
  }
  
})();

