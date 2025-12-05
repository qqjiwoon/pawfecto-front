<template>
  <div class="create-campaign-page">

    <h1 class="title">Create Campaign</h1>

    <!-- Product Section -->
    <div class="section">
      <h2 class="section-title">Product</h2>

      <div class="field">
        <label>상품명</label>
        <input type="text" placeholder="상품 이름을 입력해주세요." />
      </div>

      <div class="field">
        <label>사진</label>
        <input type="file" />
      </div>

      <div class="field">
        <label>상품 설명</label>
        <textarea placeholder="상품 설명을 입력해주세요."></textarea>
      </div>
    </div>

    <!-- Guideline Section -->
    <div class="section">
      <h2 class="section-title">Guideline details</h2>

      <div class="field">
        <label>캠페인 대상 동물 종류</label>
        <select>
          <option>Dog</option>
          <option>Cat</option>
        </select>
      </div>

      <div class="field">
        <label>최소 팔로워 수 조건</label>
        <input type="number" placeholder="최소 팔로워 수를 입력해주세요." />
      </div>

      <div class="field">
        <label>필요한 크리에이터 수</label>
        <input type="number" placeholder="필요한 크리에이터 수를 입력해주세요." />
      </div>

      <!-- 스타일 태그 -->
      <div class="field">
        <label>스타일</label>

        <div class="tag-container">
          <div
            v-for="tag in styleTags"
            :key="tag"
            class="tag"
            :class="{ active: selectedTags.includes(tag) }"
            @click="toggleTag(tag)"
          >
            #{{ tag }}
          </div>
        </div>
      </div>
    </div>

    <!-- Duration Section -->
    <div class="section">
      <h2 class="section-title">Campaign Duration</h2>

      <div class="field">
        <label>캠페인 시작일</label>
        <input type="date" />
      </div>

      <div class="field">
        <label>캠페인 마감일</label>
        <input type="date" />
      </div>
    </div>

    <button class="save-btn">SAVE</button>
  </div>
</template>


<script setup>
import { ref } from 'vue'

/* 스타일 선택 태그 목록 */
const styleTags = [
  '활발한', '야외감성', '차분한', '웃긴', '힐링되는', '포근한',
  '감동적인', '감각적인', '깔끔한', '상관없음'
]

/* 클릭된 태그 저장 */
const selectedTags = ref([])

/* 토글 기능 */
function toggleTag(tag) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
}
</script>


<style scoped>
/* 전체 레이아웃 */
.create-campaign-page {
  max-width: 900px;
  margin: 40px auto 80px;
  padding: 0 20px;
}

/* 페이지 제목 */
.title {
  text-align: center;
  margin: 40px 0;
  font-size: 28px;
  font-weight: 700;
}

/* 섹션 간격 */
.section {
  margin-bottom: 60px;
}

/* 섹션 제목 */
.section-title {
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
}

/* 입력 필드 */
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.field label {
  margin-bottom: 8px;
  font-weight: 600;
}

.field input,
.field select,
.field textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
}

/* 스타일 태그 컨테이너 */
.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* 일반 태그 스타일 */
.tag {
  padding: 8px 16px;
  border-radius: 10px;
  background: #f7f7f7;
  border: 1px solid #ddd;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: 0.2s;
}

/* 선택된 태그 스타일 */
.tag.active {
  background: #7E6B5A;
  color: white;
  border-color: #7E6B5A;
}

/* SAVE 버튼 */
.save-btn {
  display: block;
  width: 200px;
  margin: 30px auto;
  padding: 12px;
  background: #3A3A3A;
  color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}
</style>
