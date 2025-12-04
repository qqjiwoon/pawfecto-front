<template>
  <div class="tabs">
    
    <div 
      class="tab-item"
      :class="{ active: activeTab === 'offers' }"
      @click="$emit('change-tab', 'offers')"
    >
      Campaign Offers
    </div>

    <div 
      class="tab-item"
      :class="{ active: activeTab === 'progress' }"
      @click="$emit('change-tab', 'progress')"
    >
      Campaign Progress
    </div>

  </div>
</template>


<script setup>
const props = defineProps({
  activeTab: {
    type: String,
    required: true
  }
})
</script>


<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  gap: 180px;
  margin-top: 140px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 4px;
}

.tab-item {
  position: relative;
  font-size: 18px;
  padding-bottom: 3px;
  color: #8a8a8a; /* 기본 회색 */
  cursor: pointer;
  transition: all 0.2s ease;
}

/* 아래 라인 (기본: 연한 회색) */
.tab-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 2px;
  background-color: #dcdcdc;
  transition: all 0.2s ease;
}

/* 활성 탭 스타일 */
.tab-item.active {
  color: #333; /* 글씨 색 진하게 */
  font-weight: 600;
}

/* 활성 탭의 밑줄 */
.tab-item.active::after {
  background-color: #333;
  width: 250px;
}
</style>
