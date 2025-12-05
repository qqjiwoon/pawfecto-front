<template>
  <div class="dashboard-page">
    <div class="btn-wrap">
        <button class="btn-primary" @click="goCreate">create campaign</button>
        <button class="btn-secondary">setting</button>
    </div>
    <hr>
    <h2 class="section-title">Campaign List</h2>
    <BrandCampaignList />
  </div>
</template>

<script setup>
import BrandCampaignList from '@/components/brand/BrandCampaignList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goCreate(){
  router.push({ name: 'create-campaign'})
}

</script>

<style scoped>
.section-title {
  text-align: center;
}

.btn-wrap {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 15px;
  margin-bottom: 25px;
}

.btn-primary,
.btn-secondary {
  padding: 10px 18px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.btn-primary {
  border: none;
  background: #E9EAEB;
  color: black;
}

.btn-secondary {
  border: 1px solid #ccc;
  background: #fff;
}
</style>
