<template>
  <div class="connect">
  <input type="text" v-model="email" placeholder="Email">
  <input type="password"v-model="password" placeholder="Password">
  <button @click="register">connect</button>
  </div>
</template>
<script>
import firebase from 'firebase';

  export default {
    name: 'connect',
          data() {
            return {
              email:'',
              password:'',
            }
          },
          methods:{
                register:function(){
                  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                      alert('user loged')
                    },
                    function(error) {
                      var errorCode = error.code;
                      var errorMessage = error.message;
                      alert(errorMessage);
                    },)
                }
          }
  }

</script>
