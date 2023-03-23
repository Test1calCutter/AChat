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
