<template>
  <div class="creator-dashboard">

    <!-- 프로필 -->
    <CreatorProfileHeader :creator="creator" />

    <!-- 상위 버튼 -->
    <CreatorDashboardButtons />

    <!-- My Campaigns에서만 하위 탭 보이도록 -->
    <CreatorDashboardTabs v-if="showSubTabs" />

    <!-- 하위 라우트 -->
    <router-view />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import CreatorProfileHeader from '@/components/creator/CreatorProfileHeader.vue'
import CreatorDashboardButtons from '@/components/creator/CreatorDashboardButtons.vue'
import CreatorDashboardTabs from '@/components/creator/CreatorDashboardTabs.vue'

const route = useRoute()

const showSubTabs = computed(() => {
  return route.path.startsWith('/dashboard/creator/campaigns') ||
         route.path.startsWith('/dashboard/creator/campaign-offers') ||
         route.path.startsWith('/dashboard/creator/campaign-progress')
})

const creator = ref({
  id: 1,
  name: 'Dummy User',
  profile_image_url: 'https://picsum.photos/200',
  bio: '50만 유튜버가 꿈인 말티즈 똘이',
  total_post_count: 21,
  follower_count: 7238,
  following_count: 101
})
</script>



<style scoped>
.creator-dashboard {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 80px;
}
</style>
