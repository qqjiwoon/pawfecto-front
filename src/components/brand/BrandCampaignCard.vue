<template>
  <div class="card">
    <img :src="campaign.image" class="card-img" alt="campaign">

    <div class="card-body">
      <h3 class="card-title">{{ campaign.title }}</h3>
      <p class="card-subtitle">{{ campaign.subtitle }}</p>
      <p class="card-detail"> → </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  campaign: Object
})
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: 0.2s;
  position: relative; 
}

.card:hover {
  transform: translateY(-3px);
}

.card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card-body {
  padding: 14px;
}

.card-title {
  font-size: 16px;
  font-weight: 700;
}

.card-subtitle {
  font-size: 13px;
  margin-top: 5px;
  color: #333;
}

.card-detail {
  position: absolute;
  bottom: 10px;   
  right: 10px;    
  font-size: 18px;
  color: #333;
  cursor: pointer;
}
</style>
