<template>
  <section class="pf-dashboard-hero">
    <div class="pf-dashboard-hero-overlay"></div>

    <h1 class="pf-dashboard-hero-title">Pawfecto</h1>

    <div class="pf-dashboard-breadcrumb">
      <p>Home</p>
      <span> &gt; </span>
      <p>Dashboard</p>
    </div>
  </section>
  <div class="brand-layout">
    <BrandProfileHeader 
      :brandName="brand.name"
      :brandDescription="brand.description"
    />

    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BrandProfileHeader from '@/components/brand/BrandProfileHeader.vue'

const brand = ref({
  name: "Pawfecto",
  description: "Campaign for Cats | Handmade Products"
})
</script>

<style scoped>
.section-title {
  text-align: center;
  margin: 50px 0 25px;
  font-weight: 700;
  font-size: 22px;
}

.pf-dashboard-hero {
  width: 100%;
  height: 45vh;
  background-image: url('@/assets/dashboard-hero.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.pf-dashboard-hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.25);
}

.pf-dashboard-hero-title {
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Rubik Bubbles', sans-serif;
  font-size: 54px;
  color: #fff;
}

.pf-dashboard-breadcrumb {
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 14px;
  display: flex;
  gap: 6px;

  font-family: inherit; /* Rubik Bubbles 상속 방지 */
}

.pf-dashboard-breadcrumb p,
.pf-dashboard-breadcrumb span {
  margin: 0;
  padding: 0;
}
</style>