document.getElementById("profil").style.display = "none";

const login = function(){
let email = document.querySelector('#email').value
let password = document.querySelector('#password').value
let log = firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
let user = firebase.auth().currentUser;
let email;
if (user) {
  email = user.email;
  document.getElementById("hello").innerHTML = "bonjour "+email+" !"
  
  console.log(email)
  document.getElementById("connection").style.display = "none"
  document.getElementById("deco").style.display = "flex"
  document.getElementById("profil").style.display = "flex";
  }
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } 
    else {
      alert(errorMessage);
    }
    // [END_EXCLUDE]
  });

}
document.querySelector('#log').addEventListener('click', login)


const connect = function(){
    let email = document.querySelector('#connectemail').value
    let password = document.querySelector('#connectpassword').value
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
      let user = firebase.auth().currentUser;
      let email;
      if (user) {
        email = user.email;
        document.getElementById("hello").innerHTML = "bonjour "+email+" !"
        console.log(email)
        document.getElementById("connection").style.display = "none"
        document.getElementById("deco").style.display = "flex"
        document.getElementById("profil").style.display = "flex";
        
        }
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } 
        else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
    }
document.querySelector('#connect').addEventListener('click', connect)

document.getElementById("deco").style.display = "none";

let logout = function(){firebase.auth().signOut().then(function() {
    document.getElementById("connection").style.display = "block"
    document.getElementById("deco").style.display = "none"
    document.getElementById("profil").style.display = "none";
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  alert(errorMessage);
  });
}

document.querySelector('#deco').addEventListener('click', logout)


document.getElementById("registrationform").style.display = "none";
document.getElementById("register").style.cssText = "border-bottom-right-radius: 3px;background-color:#FAFAFA; border-color: transparent #dbdbdb #dbdbdb transparent ;cursor: pointer;";
      
document.querySelectorAll('.choice').forEach((l) => {
        l.addEventListener('click', function() {
            change_style(this)
        })
    });
let change_style = function(){
    let target = event.target
    let id = target.id
    if (id=="connecting"){
      document.getElementById("registrationform").style.display = "none";
      document.getElementById("register").style.cssText = "border-bottom-right-radius: 3px;background-color:#FAFAFA; border-color: transparent #dbdbdb #dbdbdb transparent ;cursor: pointer;";
      document.getElementById("connectform").style.display = "flex";
      document.getElementById("connecting").style.cssText = "border: solid 1px white;background-color: white;";
    }
    if (id=="register"){
      document.getElementById("registrationform").style.display = "flex";
      document.getElementById("register").style.cssText = "border: solid 1px white;background-color: white;";
      document.getElementById("connectform").style.display = "none";
      document.getElementById("connecting").style.cssText = "border-bottom-left-radius: 3px;background-color:#FAFAFA; border-color: transparent transparent #dbdbdb #dbdbdb;cursor: pointer;";
    }
}
