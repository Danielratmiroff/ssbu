import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/css/tailwind.css'
import ProgressBar from 'vue-simple-progress'
import { store } from './store/store'
import axios from "axios";
import VueAxios from "vue-axios";
// import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.component('ProgressBar', ProgressBar)

// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Dashboard },
//     { path: '/attributes/:id', component: Attributes },
//   ]
// })


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