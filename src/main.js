import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/css/tailwind.css'
import VueTippy, { TippyComponent } from "vue-tippy";
import ProgressBar from 'vue-simple-progress'
import { store } from './store/store'
import axios from "axios";
import VueAxios from "vue-axios";
// import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueTippy)
Vue.component('ProgressBar', ProgressBar)

// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Dashboard },
//     { path: '/attributes/:id', component: Attributes },
//   ]
// })

Vue.component("tippy", TippyComponent);
new Vue({
  render: h => h(App),
  store,
  components: { 
    App,
    ProgressBar,
    axios,
    VueAxios
  },
  // router
}).$mount('#app')