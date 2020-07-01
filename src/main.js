import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/tailwind.css'
import ProgressBar from 'vue-simple-progress'
// import Dashboard from './components/Dashboard.vue';
// import Attributes from './components/Attributes.vue';

Vue.component('ProgressBar', ProgressBar)
Vue.use(VueRouter)
Vue.config.productionTip = false

// Router disabled for now
// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Dashboard },
//     { path: '/attributes', component: Attributes },
//   ]
// })


new Vue({
  render: h => h(App),
  components: { 
    App,
    ProgressBar
   },
  // router
}).$mount('#app')