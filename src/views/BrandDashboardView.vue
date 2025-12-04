<template>
  <div class="dashboard-page">
    <h2 class="section-title">Campaign List</h2>
    <BrandCampaignList />
  </div>
</template>

<script setup>
import BrandCampaignList from '@/components/brand/BrandCampaignList.vue'
</script>

<style scoped>
.section-title {
  text-align: center;
  margin: 50px 0 25px;
  font-weight: 700;
  font-size: 22px;
}
</style>
