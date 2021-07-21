import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'
import Surveyform from '../views/Surveyform.vue'
import JSpage from '../views/JSpage.vue'
import Personal from '../views/Personal.vue'
import Personal1 from '../components/Personal1.vue'
import Personal2 from '../components/Personal2.vue'
import Personal3 from '../components/Personal3.vue'
import Computer from '../views/Computer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/surveyform',
    name: 'Surveyform',
    component: Surveyform
  },
  {
    path: '/JSpage',
    name: 'JSpage',
    component: JSpage
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal,
    children:[
      {
        path: '/personal1',
        name: 'Personal1',
        component: Personal1
      },
      {
        path: '/personal2',
        name: 'Personal2',
        component: Personal2
      },
      {
        path: '/personal3',
        name: 'Personal3',
        component: Personal3
      },
    ]
  },
  {
    path: '/computer',
    name: 'Computer',
    component: Computer
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
