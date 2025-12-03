<template>
  <div id="app">
    <!-- 공통 헤더 -->
    <Header />

    <!-- 페이지 내용 -->
    <RouterView />

    <!-- 공통 푸터 -->
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>

</style>
