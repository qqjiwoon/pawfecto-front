<template>
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
