<template>
    <div class="creator-header">

        <!-- 갈색 배경 영역 -->
        <div class="header-bg"></div>

        <!-- 프로필 이미지 -->
        <div class="profile-image-wrap">
            <img class="profile-img" :src="creator.profile_image_url" alt="creator profile">
        </div>

        <!-- 텍스트 -->
        <div class="text-wrap">
            <h2 class="creator-name">{{ creator.name }}</h2>
            <p class="creator-role">Creator</p>
            <p class="creator-desc">{{ creator.bio || '소개 문구가 없습니다.' }}</p>
        </div>

    </div>


    <!-- 인스타그램 통계 -->
    <div class="creator-stats">
      <div class="stat-item">
        <p class="number">{{ Number(creator.total_post_count).toLocaleString() }}</p>
        <span>Posts</span>
      </div>

      <div class="divider"></div>

      <div class="stat-item">
        <p class="number">{{ Number(creator.follower_count).toLocaleString() }}</p>
        <span>Followers</span>
      </div>

      <div class="divider"></div>

      <div class="stat-item">
        <p class="number">{{ Number(creator.following_count).toLocaleString() || 0 }}</p>
        <span>Following</span>
      </div>
    </div>
    
    <!-- 버튼 -->
    <div class="btn-wrap">
      <button
        :class="['toggle-btn', activeBtn === 'campaigns' ? 'active' : '']"
        @click="activeBtn = 'campaigns'"
      >
        My Campaigns
      </button>

      <button
        :class="['toggle-btn', activeBtn === 'settings' ? 'active' : '']"
        @click="activeBtn = 'settings'"
      >
        Settings
      </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  creator: {
    type: Object,
    required: true
  }
})

// 버튼 선택 상태 (기본값: My Campaigns)
const activeBtn = ref('campaigns')
</script>

<style scoped>
.creator-header {
  position: relative;
  text-align: center;
  margin-bottom: 60px; /* 이미지가 걸쳐 보이도록 여백 */
}

.header-bg {
  width: 100%;
  height: 180px; /* 목업 높이에 맞춰 조절 가능 */
  background-color: #5D4B3E; /* Pawfecto 갈색 계열 */
}

.profile-image-wrap {
  position: absolute;
  top: 120px; /* 배경 아래로 걸치게 조절 */
  left: 50%;
  transform: translateX(-50%);
}


.creator-info-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #5D4B3E;
}


.text-wrap {
  margin-top: 140px; /* 이미지 아래 여백 */
}


.creator-name {
  font-size: 22px;
  font-weight: 700;
}

.creator-desc {
  font-size: 14px;
  color: #666;
  margin-top: 6px;
}

/* 인스타그램 통계 영역 */
.creator-stats {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr; /* stat-div-stat-div-stat */
  align-items: center;

  max-width: 500px;  /* 화면 크기와 상관없이 고정 폭 */
  margin: 28px auto 0 auto; /* 가운데 정렬 */
  column-gap: 40px; /* stat-item 간 일정 간격 유지 */
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-item .number {
  font-size: 26px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.stat-item span {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

/* 세로 구분선 */
.divider {
  width: 1px;
  height: 100%;   /* grid에서 stat-item 높이에 자동 맞춤 */
  background-color: #ccc;
}

/* 버튼 영역 */
.btn-wrap {
  margin-top: 90px;
  display: flex;
  justify-content: center;
  gap: 50px;
}

/* 기본 버튼 스타일 */
.toggle-btn {
  padding: 12px 36px;
  font-size: 16px;
  border-radius: 999px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  color: #444;
  transition: all 0.15s ease;
  width: 250px;
}

/* 선택된 버튼 */
.toggle-btn.active {
  background-color: #efefef; /* 연한 회색 (피그마 동일) */
  border: 1px solid #efefef;
  color: #000;
}

</style>