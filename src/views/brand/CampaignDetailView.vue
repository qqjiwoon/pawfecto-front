<template>
<div class="campaign-detail-page">

  <div class="campaign-info">
    
    <img :src="campaign.imageUrl" class="product-img" />

    <div class="content-box">
      <h1>{{ campaign.productName }}</h1>
      <h3>{{ campaign.subtitle }}</h3>

      <p class="desc" v-html="campaign.description"></p>

      <div class="pref">
        <h4>Creator Preferences</h4>

        <!-- 대상 동물 -->
        <div class="row">
          <span class="label">캠페인 대상 동물 종류</span>
          <div class="pet-type">
            <button 
              class="pet-btn" 
              :class="{ active: campaign.target_pet_type === 'Cat' }">
              Cat
            </button>
            <button 
              class="pet-btn" 
              :class="{ active: campaign.target_pet_type === 'Dog' }">
              Dog
            </button>
          </div>
        </div>

        <!-- 최소 팔로워 -->
        <div class="row">
          <span class="label">최소 팔로워 수 조건</span>
          <span class="value">{{ campaign.min_followers.toLocaleString() }}</span>
        </div>

        <!-- 필요 크리에이터 수 -->
        <div class="row">
          <span class="label">필요한 크리에이터 수</span>
          <span class="value">{{ campaign.required_creators }}</span>
        </div>

        <!-- 스타일 태그 -->
        <div class="row">
          <span class="label">스타일</span>
          <div class="style-tags">
            <span 
              v-for="tag in campaign.styles" 
              :key="tag"
              class="style-tag"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Update 버튼 -->
      <button class="update-btn" @click="goUpdate">
        Update
      </button>
    </div>
  </div>

  <!-- 탭 -->
  <div class="tabs">
    <RouterLink :to="`/dashboard/brand/campaign/${campaignId}/recommendations`" 
      class="tab" 
      :class="{ active: currentTab === 'recommendations' }">
      Creator Recommendations
    </RouterLink>

    <RouterLink :to="`/dashboard/brand/campaign/${campaignId}/status`" 
      class="tab" 
      :class="{ active: currentTab === 'status' }">
      Campaign Status
    </RouterLink>
  </div>

  <router-view />

</div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import campaignImg from '@/assets/smart-feeder-pets.jpg'

const route = useRoute()
const router = useRouter()

const campaignId = Number(route.params.id)


const campaigns = ref([
  { 
    id: 1,
    productName: 'Cozi Forest Cat Tower',
    subtitle: '코지 프리미엄 캣타워',
    description: `
코지 포레스트 캣타워는 원목 감성의 내추럴한 디자인과 안정적인 구조가 특징으로,<br>
하단에는 고양이가 숨어 쉴 수 있는 동굴형 하우스가 있고 중간에는 점프 동선을 고려한<br>
단계형 발판, 상단에는 넓은 전망 데크가 배치되어 있습니다.<br>
기둥 전체에는 사이잘 로프 스크래처가 감겨 있어 긁기 욕구를 해소하기 좋으며,<br>
전체 높이는 150cm로 집 안에서 활동량을 늘려주기에 충분하면서도<br>
공간을 크게 차지하지 않는 실용적인 제품입니다.<br>
`,
    imageUrl: campaignImg,
    target_pet_type: 'Cat',
    min_followers: 2000,
    required_creators: 5,
    styles: ['활발한', '야외감성', '차분한', '힐링되는', '깔끔한']
  },
])

const campaign = campaigns.value.find(c => c.id === campaignId)

const currentTab = computed(() => {
  return route.name?.includes('recommendations') 
    ? 'recommendations'
    : 'status'
})

// Update 페이지로 이동 (아직 없지만 라우팅만 준비)
function goUpdate() {
  router.push(`/dashboard/brand/campaign/${campaignId}/update`)
}
</script>

<style scoped>

.campaign-info {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  margin: 50px auto;
  max-width: 1200px;
}

.product-img {
  width: 420px;
  height: 520px;
  object-fit: cover;
  border-radius: 12px;
}

/* Right content */
.content-box {
  width: 500px;
}

.desc {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 25px;
}

/* Preferences */
.pref .row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.label {
  width: 180px;
  font-weight: 600;
}

.value {
  font-size: 15px;
}

/* Pet Type Buttons */
.pet-btn {
  border: 1px solid #ddd;
  background: #fff;
  padding: 6px 18px;
  border-radius: 6px;
  cursor: default;
  margin-right: 8px;
  color: #777;
}

.pet-btn.active {
  background: #C4B199;
  border-color: #C4B199;
  color: white;
}

/* Style tags */
.style-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.style-tag {
  padding: 6px 12px;
  background: #f5f1ec;
  border-radius: 8px;
  font-size: 13px;
  border: 1px solid #e0d6cc;
  color: #7d6c61;
}

/* Update button */
.update-btn {
  margin-top: 30px;
  width: 100%;
  padding: 14px;
  background: #695845;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}


</style>