import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import HomeContent from '../views/HomeContent.vue'
import ModulesPage from '../views/ModulesPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ViewIntro from '../views/ViewIntro.vue'
import h5pStandalone from '../views/h5pStandalone.vue'




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage,
    
  },
  {
    path: '/content',
    component: HomeContent
  },
  {
    path: '/modules',
    component: ModulesPage
  },
  {
    path: '/intro',
    component: ViewIntro
  },
  {
  path: '/h5p',
  component: h5pStandalone
  },

  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
