import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import UserRepos from '../views/UserRepos.vue'
import UserOrgs from '../views/UserOrgs.vue'
import Watchlist from '../views/Watchlist.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Leaderboard from '../views/Leaderboard.vue'

Vue.use(VueRouter)

//Make sure the Home page doesn't heve the navbar
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/user-repos',
    name: 'User Repos',
    component: UserRepos
  },
  {
    path: '/user-orgs',
    name: 'User Orgs',
    component: UserOrgs
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
