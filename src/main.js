import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Meta from "vue-meta";
import VueFirestore from "vue-firestore";
import * as firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "ketosis-f2464.firebaseapp.com",
    databaseURL: "https://ketosis-f2464.firebaseio.com",
    projectId: "ketosis-f2464",
    storageBucket: "ketosis-f2464.appspot.com",
    messagingSenderId: "537024256619",
    appId: "1:537024256619:web:91c0825cf65a7eed5b2f2e",
    measurementId: "G-6G4PV8PJEW"
  })
  .firestore();

let app = "";

Vue.use(Meta);
Vue.use(VueFirestore);
Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
