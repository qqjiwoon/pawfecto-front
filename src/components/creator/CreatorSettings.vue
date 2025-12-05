<template>
  <div class="settings-container">

    <!-- 아이디 -->
    <div class="form-group">
      <label>아이디</label>
      <p class="readonly-field">{{ form.loginId }}</p>
    </div>

    <!-- 비밀번호 -->
    <div class="form-group">
      <label>비밀번호</label>
      <input type="password" v-model="form.password" placeholder="새 비밀번호 입력" />
    </div>

    <!-- 비밀번호 확인 -->
    <div class="form-group">
      <label>비밀번호 확인</label>
      <input type="password" v-model="form.passwordConfirm" placeholder="비밀번호 재입력" />
    </div>

    <!-- 이름 -->
    <div class="form-group">
      <label>이름</label>
      <input type="text" v-model="form.name" />
    </div>

    <!-- 이메일 -->
    <div class="form-group">
      <label>이메일 주소</label>
      <input type="email" v-model="form.email" />
    </div>

    <!-- 전화번호 -->
    <div class="form-group">
      <label>전화번호</label>
      <input type="text" v-model="form.phoneNumber" />
    </div>

    <!-- 주소 -->
    <div class="form-group">
      <label>주소</label>
      <input type="text" v-model="form.address" />
    </div>

    <!-- 반려동물 종류 -->
    <div class="form-group">
      <label>반려동물 종류</label>
      <select v-model="form.petType">
        <option value="dog">강아지</option>
        <option value="cat">고양이</option>
      </select>
    </div>

    <!-- SNS 계정명 -->
    <div class="form-group">
      <label>SNS 계정명</label>
      <input type="text" v-model="form.snsHandle" placeholder="@puppy_ssafy" />
    </div>

    <!-- SNS URL -->
    <div class="form-group">
      <label>SNS 계정 URL</label>
      <input type="text" v-model="form.snsUrl" placeholder="https://www.instagram.com/..." />
    </div>

    <!-- SNS 스타일 -->
    <div class="form-group">
      <label>SNS 스타일</label>

      <div class="tag-options">
        <span
          v-for="tag in styleOptions"
          :key="tag.value"
          class="tag-chip"
          :class="{ selected: form.styleTags.includes(tag.value) }"
          @click="toggleTag(tag.value)"
        >
          #{{ tag.label }}
        </span>
      </div>
    </div>

    <!-- 프로필 이미지 -->
    <div class="form-group">
      <label>프로필 이미지</label>

      <div class="image-box">
        <p>{{ form.profileImage ? form.profileImage.name : '첨부파일' }}</p>
        <label class="file-btn">
          파일 선택
          <input type="file" @change="handleFileUpload" />
        </label>
      </div>
    </div>

    <!-- 저장 버튼 -->
    <button class="save-btn" @click="handleSave">SAVE</button>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  loginId: 'Abc1234',           // 읽기 전용
  password: '',
  passwordConfirm: '',
  name: '김끼리',
  email: 'pet_ssafy@gmail.com',
  phoneNumber: '02-1234-5678',
  address: '서울시 강남구 역삼대로 123',
  petType: 'dog',

  snsHandle: '@puppy_ssafy',
  snsUrl: 'https://www.instagram.com/puppy_ssafy',

  styleTags: ['aesthetic', 'heartfelt'], // 선택된 태그

  profileImage: null
})

// 태그 옵션
const styleOptions = [
  { value: 'energetic', label: '활발한' },
  { value: 'calm', label: '차분한' },
  { value: 'funny', label: '웃긴' },
  { value: 'wholesome', label: '힐링되는' },
  { value: 'cozy', label: '포근한' },
  { value: 'heartfelt', label: '감동적인' },
  { value: 'aesthetic', label: '감각적인' },
  { value: 'minimal', label: '깔끔한' },
  { value: 'outdoor', label: '야외감성' },
  { value: 'none', label: '상관없음' }
]


// 태그 선택 토글
const toggleTag = (tagValue) => {
  const index = form.value.styleTags.indexOf(tagValue)
  if (index === -1) {
    form.value.styleTags.push(tagValue)
  } else {
    form.value.styleTags.splice(index, 1)
  }
}

// 파일 업로드
const handleFileUpload = (e) => {
  form.value.profileImage = e.target.files[0]
}

// 저장 처리 (추후 API 연동)
const handleSave = () => {
  console.log('저장할 데이터:', form.value)
  alert('저장되었습니다!')
}
</script>



<style scoped>
.settings-container {
  max-width: 480px;
  margin: 130px auto;
  padding: 0 10px;
  font-family: 'Pretendard', sans-serif;
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
}

/* 1. 입력창 & 셀렉트 박스 공통 설정 */
input,
.form-group select {
  width: 100%;
  height: 46px;      /* 높이 고정 */
  padding: 0 12px;   /* 상하 패딩 0, 좌우 12px */
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  box-sizing: border-box;
}

/* 2. 읽기 전용 필드 (높이 맞춤 + 수직 정렬) */
.readonly-field {
  width: 100%;
  height: 46px;      /* 높이 고정 */
  padding: 0 12px;   /* 상하 패딩 0 */
  
  display: flex;     /* 텍스트 수직 정렬을 위해 flex 사용 */
  align-items: center; 
  
  background: #f5f5f5;
  border-radius: 8px;
  color: #555;
  font-size: 14px;
  box-sizing: border-box;
  margin: 0;
}

/* 태그 스타일 (기존 유지) */
.tag-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-chip {
  padding: 8px 14px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #f9f9f9;
  cursor: pointer;
  font-size: 13px;
}

.tag-chip.selected {
  background-color: #65481F;
  border-color: #65481F;
  color: white;
}

/* 3. 첨부파일 박스 (높이 맞춤 + 내부 정렬) */
.image-box {
  width: 100%;
  height: 46px;           /* 다른 입력창과 동일한 높이 */
  padding: 0 6px 0 12px;  /* 우측 패딩을 줄여 버튼 여백 확보 */
  
  display: flex;
  justify-content: space-between;
  align-items: center;    /* 내부 요소 수직 중앙 정렬 */
  
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
}

.image-box p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

/* 4. 파일 선택 버튼 (내부 텍스트 정렬) */
.file-btn {
  height: 32px;           /* 박스 안에 들어갈 적당한 높이 */
  padding: 0 14px;
  
  display: inline-flex;   /* 버튼 텍스트 정렬용 */
  align-items: center;
  justify-content: center;
  
  background: #eee;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}

.file-btn input {
  display: none;
}

/* 5. 저장 버튼 (중앙 정렬) */
.save-btn {
  display: block;        /* 블록 요소로 변경 */
  width: 60%;
  padding: 16px;
  background: #333;
  color: white;
  border-radius: 50px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 30px auto;     /* 상하 30px, 좌우 자동(중앙) */
}

.save-btn:hover {
  background: #000;
}
</style>