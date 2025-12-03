import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupBrandView from '../views/SignupBrandView.vue'
import SignupCreatorView from '../views/SignupCreatorView.vue'
import BrandDashboardView from '@/views/BrandDashboardView.vue'
import CreatorDashboardView from '@/views/CreatorDashboardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup/brand',
      name: 'signup-brand',
      component: SignupBrandView,
    },
    {
      path: '/signup/creator',
      name: 'signup-creator',
      component: SignupCreatorView,
    }, 
    {
      path: '/dashboard/brand',
      name: 'dashboard-brand',
      component: BrandDashboardView,
    },
    {
      path: '/dashboard/creator',
      name: 'dashboard-creator',
      component: CreatorDashboardView,
    },
  ],
})

export default router
