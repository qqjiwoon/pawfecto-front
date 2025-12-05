<template>
  <div class="btn-wrap">

    <!-- My Campaigns -->
    <router-link
      to="/dashboard/creator/campaign-offers"
      class="toggle-btn"
      :class="{ active: isMyCampaignsActive }"
    >
      My Campaigns
    </router-link>

    <!-- Settings -->
    <router-link
      to="/dashboard/creator/settings"
      class="toggle-btn"
      :class="{ active: isActive('/dashboard/creator/settings') }"
    >
      Settings
    </router-link>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Settings 버튼 활성 여부
const isActive = (path) => {
  return route.path.startsWith(path)
}

// My Campaigns 버튼 활성 여부 (offers + progress 모두 포함)
const isMyCampaignsActive = computed(() => {
  return (
    route.path.startsWith('/dashboard/creator/campaign-offers') ||
    route.path.startsWith('/dashboard/creator/campaign-progress')
  )
})
</script>

<style scoped>
.btn-wrap {
  margin-top: 90px;
  display: flex;
  justify-content: center;
  gap: 50px;
}

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
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.toggle-btn.active {
  background-color: #efefef;
  border: 1px solid #efefef;
  color: #000;
}
</style>
