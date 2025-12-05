<template>
    <div class="brand-header">
        <div class="brand-info">
            <img class="profile-img" src="@/assets/instagram-icon.png" alt="brand">
            <div class="text-wrap">
                <h2 class="brand-name">{{ brandName }}</h2>
                <p class="brand-desc">{{ brandDescription }}</p>
            </div>
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

</script>

<style scoped>
.brand-header {
  width: 100%;
  max-width: 800px;
  margin: -80px auto 40px; /* ⬅ 히어로 위로 끌어올리는 핵심 */
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 25px;
  position: relative;
}
.brand-info {
  display: flex;
  flex-direction: column;
  align-items: center; /* <-- 이미지 + 텍스트 모두 가운데 정렬 */
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white; 
}

.brand-name {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-top: 5px;
}

.brand-desc {
  margin-top: -8px;
  font-size: 15px;
  color: #777;
  text-align: center;
}

</style>
