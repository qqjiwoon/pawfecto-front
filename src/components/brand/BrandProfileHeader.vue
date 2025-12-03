<template>
    <div class="brand-header">
        <div class="brand-info-wrap">
            <img class="profile-img" src="@/assets/instagram-icon.png" alt="brand">
        </div>
        <div class="text-wrap">
            <h2 class="brand-name">Brand</h2>
            <p class="brand-desc">Campaign for Cats | Handmade Product</p>
        </div>
    </div>
    <div class="btn-wrap">
        <button class="btn-primary">create campaign</button>
        <button class="btn-secondary">setting</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.brand-header {
  width: 100%;
  max-width: 900px;
  margin: 50px auto 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.brand-info-wrap {
  display: flex;
  align-items: center;
  gap: 18px;
}

.profile-img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
}

.text-wrap {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 22px;
  font-weight: 700;
}

.brand-desc {
  margin-top: 4px;
  font-size: 14px;
  color: #666;
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
  background: #000;
  color: white;
}

.btn-secondary {
  border: 1px solid #ccc;
  background: #fff;
}
</style>