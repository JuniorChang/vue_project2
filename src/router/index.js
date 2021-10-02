import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import player from '../views/ShowPlayer'
import AddPlayer from '../views/AddPlayer'
import EditPlayer from '../views/EditPlayer'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/editplayer',
    name: 'editPlayer',
    component: EditPlayer,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/player',
    name: 'player',
    component: player
  },
  {
    path: '/AddPlayer',
    name: 'AddPlayer',
    component: AddPlayer
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
