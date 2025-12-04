<template>
    <div class="brand-header">
        <div class="brand-info">
            <img class="profile-img" src="@/assets/instagram-icon.png" alt="brand">
            <div class="text-wrap">
                <h2 class="brand-name">{{ brandName }}</h2>
                <p class="brand-desc">{{ brandDescription }}</p>
            </div>
        </div>

        <div class="btn-wrap">
            <button class="btn-primary" @click="goCreate">create campaign</button>
            <button class="btn-secondary">setting</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  brandName: String,
  brandDescription: String
})

function goCreate(){
  router.push({ name: 'create-campaign'})
}

</script>

<style scoped>

.brand-header {
  width: 100%;
  max-width: 800px;
  margin: 50px auto 40px;

  display: flex;
  flex-direction: column; 
  align-items: center;    
  gap: 25px;
}


.brand-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.profile-img {
  width: 95px;
  height: 95px;
  border-radius: 50%;
  object-fit: cover;
}

.brand-name {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}

.brand-desc {
  margin-top: 4px;
  font-size: 14px;
  color: #666;
  text-align: center;
}

.btn-wrap {
  display: flex;
  gap: 12px;
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
