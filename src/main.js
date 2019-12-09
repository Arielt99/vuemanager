import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBtxqzgrqbtqKhYkOCvzjShVJCB9oRiYx4",
  authDomain: "cours-5cc01.firebaseapp.com",
  databaseURL: "https://cours-5cc01.firebaseio.com",
  projectId: "cours-5cc01",
  storageBucket: "cours-5cc01.appspot.com",
  messagingSenderId: "226397421632",
  appId: "1:226397421632:web:4e5dee4cc47c8cc96c9fa5",
  measurementId: "G-ETQR0G2LP5"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


