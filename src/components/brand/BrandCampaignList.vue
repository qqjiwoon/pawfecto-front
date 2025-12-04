<template>
  <div class="campaign-wrapper">
    <div class="campaign-list">
      <BrandCampaignCard
        v-for="campaign in campaigns"
        :key="campaign.id"
        :campaign="campaign"
      />
    </div>

    <div class="pagination-wrap">
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @change-page="changePage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BrandCampaignCard from './BrandCampaignCard.vue'
import Pagination from './Pagination.vue'
import campaignImg from '@/assets/smart-feeder-pets.jpg'

const campaigns = ref([
  { id: 1, title: 'Coil Forest Cat Tower', subtitle: '코일 프리미엄 캣타워', image: campaignImg },
  { id: 2, title: 'Wood Cozy House', subtitle: '우드 반려동물 하우스', image: campaignImg },
  { id: 3, title: 'Snack Time Campaign', subtitle: '천연 수제 간식', image: campaignImg },
  { id: 4, title: 'Outdoor Harness', subtitle: '아웃도어 하네스', image: campaignImg },
  { id: 5, title: 'Premium Bowl', subtitle: '프리미엄 식기', image: campaignImg },
  { id: 6, title: 'Pet Blanket', subtitle: '핸드메이드 담요', image: campaignImg },
])

const currentPage = ref(1)
const totalPages = ref(3)

function changePage(page) {
  currentPage.value = page
}
</script>

<style scoped>
.campaign-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px); /* 카드 너비 고정 */
  justify-content: center; /* 전체 가운데 정렬 */
  gap: 30px;
  margin-bottom: 5%;
}


.pagination-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}

.campaign-wrapper {
  margin-bottom: 10%; /* 하단 여유 공간 */
}

</style>
