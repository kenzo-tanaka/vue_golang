// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyAEILra_CTqmKMXK6yIVG0bPvHhx72B8b4",
  authDomain: "vue-and-golang-9dbdd.firebaseapp.com",
  databaseURL: "https://vue-and-golang-9dbdd.firebaseio.com",
  projectId: "vue-and-golang-9dbdd",
  storageBucket: "",
  messagingSenderId: "946274130404"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
