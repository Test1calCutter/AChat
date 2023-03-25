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

function href(){
    window.location.href="register.html";
}
(function(){
    var msg = "Your data (E-Mail adress, Username) is stored inside our database. Nobody else except the database provider and the creator of ACHAT will have access to this data. Your data will not be sold to third-parties. You can request your data to be wiped from our database by contacting us on Discord!";
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
      var cookieExpire = new Date();
      docRoot.removeChild(okC);
    }
    
  })();

function revolt(){
  window.location.href = "https://rvlt.gg/Tv91HtMd"
}

function twitter(){
  window.location.href = "https://twitter.com/testicalcutter"
}

function discord(){
  window.location.href = "https://www.discord.gg/users/545015390020042752"
}

function hope(){
  alert("Imagine it would be that simple to find the code. GO FIND IT")
}

function np(){
  alert("Still in development!")
}

function status(){
  window.location.href="https://stats.uptimerobot.com/PVMpwF0Y0j/793978413"
}

//const heartDOM = document.querySelector('.js-heart');
//let liked = false;
//
//// Check if user is logged in
//heartDOM.onclick = (event) => {
//  firebase.auth().onAuthStateChanged(user => {
//    if (user) {
//      firebase.database().ref(`users/${user.uid}/likes`).once('value').then(snapshot => {
//        liked = snapshot.val() || false;
//        updateHeart(liked);
//      });
//      
//      // Add click event listener to heart icon
//      heartDOM.onclick = (event) => {
//        liked = !liked;
//        updateHeart(liked);
//        
//        // Save the user's like status to the database
//        firebase.database().ref(`users/${user.uid}/likes`).set(liked);
//      }
//    } else {
//      alert("Login")
//    }
//  });
//}
//
//heartDOM.addEventListener('animationend', (event) => {
//  event.currentTarget.classList.remove('pulse');
//})
//
//function updateHeart(liked) {
//  const target = heartDOM;
//  
//  if (liked) {
//    target.classList.remove('far');
//    target.classList.add('fas');
//    target.classList.add('pulse');
//    target.classList.add('liked'); // add 'liked' class
//  } else {
//    target.classList.remove('fas');
//    target.classList.add('far');
//    target.classList.remove('liked'); // remove 'liked' class
//  }
//  
//  target.addEventListener('animationend', (event) => {
//    event.currentTarget.classList.remove('pulse');
//  });
//}


//const heartDOM = document.querySelector('.js-heart');
//let likeCount;
//
//firebase.database().ref('likes').once('value').then(snapshot => {
//  likeCount = snapshot.val() || 0;
//  document.getElementById('likes').innerText = likeCount;
//});
//
//firebase.auth().onAuthStateChanged(user => {
//  if (user) {
//    firebase.database().ref(`users/${user.uid}/likes`).once('value').then(snapshot => {
//      const liked = snapshot.val() || false;
//      updateHeart(liked);
//    });
//    
//    heartDOM.onclick = (event) => {
//      firebase.database().ref('likes').transaction(currentLikeCount => {
//        if (currentLikeCount === null) {
//          return 1;
//        } else {
//          return currentLikeCount + 1;
//        }
//      }, (error, committed, snapshot) => {
//        if (error) {
//          console.error(error);
//        } else if (!committed) {
//          console.log('Transaction aborted');
//        } else {
//          likeCount = snapshot.val();
//          document.getElementById('likes').innerText = likeCount;
//        }
//      });
//      
//      firebase.database().ref(`users/${user.uid}/likes`).set(true);
//      updateHeart(true);
//    }
//  } else {
//    heartDOM.style.display = 'none';
//  }
//});
//
//function updateHeart(liked) {
//  const target = heartDOM;
//  
//  if (liked) {
//    target.classList.remove('far');
//    target.classList.add('fas');
//    target.classList.add('pulse');
//    target.classList.add('liked');
//  } else {
//    target.classList.remove('fas');
//    target.classList.add('far');
//    target.classList.remove('liked');
//  }
//  
//  target.addEventListener('animationend', (event) => {
//    event.currentTarget.classList.remove('pulse');
//  });
//}
