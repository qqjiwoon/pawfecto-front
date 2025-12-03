<template>
  <div class="campaign-list">
    <BrandCampaignCard
      v-for="c in campaigns"
      :key="c.id"
      :campaign="c"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BrandCampaignCard from './BrandCampaignCard.vue'

// 나중에 API로 대체할 더미 데이터
const campaigns = ref([
  { id: 1, title: 'Coil Forest Cat Tower', subtitle: '코일 프리미엄 캣타워', image: '/cat1.png' },
  { id: 2, title: 'Wood Cozy House', subtitle: '우드 반려동물 하우스', image: '/cat2.png' },
  { id: 3, title: 'Snack Time Campaign', subtitle: '천연 수제 간식', image: '/cat3.png' },
  { id: 4, title: 'Outdoor Harness', subtitle: '아웃도어 하네스', image: '/cat4.png' },
  { id: 5, title: 'Premium Bowl', subtitle: '프리미엄 식기', image: '/cat5.png' },
  { id: 6, title: 'Pet Blanket', subtitle: '핸드메이드 담요', image: '/cat6.png' },
])
</script>

<style scoped>
.campaign-list {
  display: grid;
  grid-template-columns: repeat(3, 250px);
  gap: 30px;
  justify-content: center;
}
</style>
