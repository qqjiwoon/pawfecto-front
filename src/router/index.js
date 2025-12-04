import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupBrandView from '../views/SignupBrandView.vue'
import SignupCreatorView from '../views/SignupCreatorView.vue'
import BrandLayout from '@/views/BrandLayout.vue'
import BrandDashboardView from '@/views/BrandDashboardView.vue'
import CreatorDashboardView from '@/views/CreatorDashboardView.vue'
import CreateCampaignView from '@/views/CreateCampaignView.vue'

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
      component: BrandLayout,          
      children: [
        {
          path: '',
          name: 'brand-dashboard',
          component: BrandDashboardView   
        },
        {
          path: 'create',
          name: 'create-campaign',
          component: CreateCampaignView   
        }
      ]
    },
    {
      path: '/dashboard/creator',
      name: 'dashboard-creator',
      component: CreatorDashboardView,
    },
  ],
})

export default router
