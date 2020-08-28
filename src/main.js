import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import VueTippy, { TippyComponent } from "vue-tippy";
import ProgressBar from "vue-simple-progress";
import { store } from "./store/store";
import { router } from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

// Add additional themes.
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";
import "./registerServiceWorker";

Vue.use(Vuex);
Vue.use(VueTippy);
Vue.component("ProgressBar", ProgressBar);
Vue.component("tippy", TippyComponent);

new Vue({
  render: (h) => h(App),
  store,
  router,
  components: {
    App,
    ProgressBar,
    axios,
    VueAxios,
  },
  // router
}).$mount("#app");
