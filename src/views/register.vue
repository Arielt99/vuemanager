<template>
  <div class="register">
  <input type="text" v-model="email" placeholder="Email">
  <input type="password"v-model="password" placeholder="Password">
  <button @click="register">register</button>
  </div>
</template>
<script>
import firebase from 'firebase';

  export default {
    name: 'register',
          data() {
            return {
              email:'',
              password:'',
            }
          },
          methods:{
                register:function(){
                  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                      alert('user created'),
                      firebase.database().collection('user').doc(this.email).set({
                        email : this.mail,
                        password : this.password,
                        items : [],
                      })
                    },
                    function(error) {
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
                    },)
                    }
          }
  }

</script>
