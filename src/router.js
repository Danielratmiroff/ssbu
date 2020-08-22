import Vue from 'vue'
import VueRouter from 'vue-router'

import { store } from './store/store'
import Dashboard from "./components/Dashboard.vue"
import Attributes from "./components/Attributes.vue"
import Start from "./components/Start.vue"

Vue.use(VueRouter)

// Routing components.
export const router = new VueRouter({
    
    mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
     },
    {
      path: '/home',
      name: 'Dashboard',
      component: Dashboard
     },
    { 
      path: '/attributes/:id', 
      name: 'Attributes',
      component: Attributes
   },
  ]
})

router.beforeEach(async (to, from, next) => {
   if (to.name === "Attributes" && !from.name) { 
    await store.dispatch('loadChars')
    next()
   }
   else { next() }
})