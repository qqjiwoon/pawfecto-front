<template>
  <div class="pf-home">

    <!-- Hero 영역 (LoginView와 동일한 구조) -->
    <section class="pf-home-hero">
      <div class="pf-home-hero-overlay"></div>
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
/* 전체 페이지 */
.pf-home {
  width: 100%;
  background-color: #ffffff;
}

/* ----------------- Hero 영역 ----------------- */
.pf-home-hero {
  width: 100%;
  height: 70vh;                            /* 기존과 동일 높이 */
  background-image: url('@/assets/home-hero.png');
  background-size: cover;                  /* 화면에 꽉 차게 */
  background-position: center;             /* 가운데 정렬 */
  position: relative;
}

/* 밝기 조절 overlay (원하는 정도로 변경 가능) */
.pf-home-hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.2); /* 0.2~0.3 사이 추천 */
}
</style>
