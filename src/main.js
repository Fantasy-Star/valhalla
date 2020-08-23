import Vue from "vue";
import App from "./App.vue";

import BackToTop from "vue-backtotop";
Vue.use(BackToTop);

// Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app");
