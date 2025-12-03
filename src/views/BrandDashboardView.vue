<template>
    <div class="brand-dashboard">
        <h1>Brand Dashboard</h1>
        <BrandProfileHeader/>
        <hr>
        <h2 class="section-title">Campaign List</h2>
        <BrandCampaignList />
    </div>
</template>

<script setup>
import BrandProfileHeader from '@/components/brand/BrandProfileHeader.vue'
import BrandCampaignList from '@/components/brand/BrandCampaignList.vue'

</script>

<style scoped>
.brand-dashboard {
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
  padding-bottom: 80px;
}

.section-title {
  text-align: center;
  margin: 50px 0 25px;
  font-weight: 700;
  font-size: 22px;
}
</style>