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
  const database = firebase.database()
  var auth = firebase.auth();
  let user = auth.currentUser;

  firebase.auth().onAuthStateChanged(function(user) {
    
   if(!user || TypeError){
     window.location.href="index.html";
   }else{

    database.ref("users/" + user.uid).once("value")
    .then((snapshot) => {
      const userData = snapshot.val();

      function username(){
        let currentun = userData.full_name;
        let placeholder = document.getElementById("username").setAttribute('placeholder', currentun);
      }
      username()


      function alert(){
        var text = `Hello ${userData.full_name}! This page is still in development!`
        var ins = document.getElementById("alert")
        ins.innerHTML = text;
      }
    
      alert()


    })
    .catch((error) => {
      console.error(error);
    });


   }
  })


async function deleteacc() {
  try {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const userRef = firebase.database().ref('users/' + uid);
  
    // Delete the user data from the Realtime Database
    await userRef.remove();
    console.log('User data deleted successfully');

    // Delete the user account from Firebase Authentication
    await user.delete();
    console.log('User account deleted successfully');

    // Redirect to index page
    window.location.href = "index.html";
  } catch (error) {
    console.error('Error deleting user account and data: ', error);
  }
}
  //function deleteacc(){
  //  //const currentUser = firebase.auth().currentUser;
  //  const user = firebase.auth().currentUser;
  //  if (user) {
  //    const uid = user.uid;
  //    const userRef = firebase.database().ref('users/' + uid);
  //
  //    // Delete the user data from the Realtime Database
  //    userRef.remove()
  //      .then(() => {
  //        console.log('User data deleted successfully');
  //        window.location.href = "index.html";
  //      })
  //      .catch(error => {
  //        console.error('Error deleting user data: ', error);
  //      });
  //
  //    // Delete the user account from Firebase Authentication
  //    user.delete()
  //      .then(() => {
  //        console.log('User account deleted successfully');
  //        window.location.href = "index.html";
  //      })
  //      .catch(error => {
  //        console.error('Error deleting user account: ', error);
  //      });
  //  } else {
  //    window.location.href = "index.html";
  //  }
  //}

  function save() {
    // Get the new full name from the input field
    let newFullName = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(pass === ""){
      console.log("kein pass")
    }
  
    if(newFullName === ""){
      alert("Please use at least one letter or number.")
      return;
    }
    // Update the user's full name in the database
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).update({
      full_name: newFullName,
      password: password
    }).then(() => {
      // Update the user data object
      userData.full_name = newFullName;
      userData.password = pass
      console.log('Full name updated successfully!');
    }).catch((error) => {
      console.error(error);
    });
  }