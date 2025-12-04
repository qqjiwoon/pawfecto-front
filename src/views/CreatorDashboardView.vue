<template>
  <div class="creator-dashboard">

    <!-- 1. 프로필 영역 -->
    <CreatorProfileHeader :creator="creator" />

    <!-- 2. 탭 -->
    <CreatorDashboardTabs 
      :active-tab="activeTab"
      @change-tab="activeTab = $event"
    />

    <!-- 3. 탭별 컨텐츠 -->
    <div v-if="activeTab === 'offers'">
      <CreatorCampaignOffersTable :creator-id="creator.id" />
    </div>

    <div v-else-if="activeTab === 'progress'">
      <CreatorCampaignProgressTable :creator-id="creator.id" />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CreatorProfileHeader from '@/components/creator/CreatorProfileHeader.vue'
import CreatorDashboardTabs from '@/components/creator/CreatorDashboardTabs.vue'
import CreatorCampaignOffersTable from '@/components/creator/CreatorCampaignOffersTable.vue'
import CreatorCampaignProgressTable from '@/components/creator/CreatorCampaignProgressTable.vue'
// import axios from 'axios'   // 백엔드 API 호출 도구

// const creator = ref(null)
const activeTab = ref('offers')

// // 1. 크리에이터 정보 불러오기
// onMounted(async () => {
//   const { data } = await axios.get('/api/dashboard/creator/me/')
//   creator.value = data
// })

// 테스트용 creator 더미 데이터
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
