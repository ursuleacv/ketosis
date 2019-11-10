import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meta from 'vue-meta';

Vue.use(Meta);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
