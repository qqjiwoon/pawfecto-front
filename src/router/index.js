import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupBrandView from '../views/SignupBrandView.vue'
import SignupCreatorView from '../views/SignupCreatorView.vue'

// Brand
import BrandLayout from '@/views/BrandLayout.vue'
import BrandDashboardView from '@/views/BrandDashboardView.vue'
import CreateCampaignView from '@/views/CreateCampaignView.vue'

// Creator
import CreatorDashboardView from '@/views/creator/CreatorDashboardView.vue'
import CreatorCampaignOffersView from '@/views/creator/CreatorCampaignOffersView.vue'
import CreatorCampaignProgressView from '@/views/creator/CreatorCampaignProgressView.vue'
import CreatorSettingsView from '@/views/creator/CreatorSettingsView.vue'


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
      component: CreatorDashboardView,
      children: [
        {
          path: '',
          redirect: '/dashboard/creator/campaign-offers'
        },
        {
          path: 'campaign-offers',
          name: 'creator-campaign-offers',
          component: CreatorCampaignOffersView
        },
        {
          path: 'campaign-progress',
          name: 'creator-campaign-progress',
          component: CreatorCampaignProgressView
        },
        {
          path: 'settings',
          name: 'creator-settings',
          component: CreatorSettingsView
        }
      ]
    },
  ],
})

export default router
