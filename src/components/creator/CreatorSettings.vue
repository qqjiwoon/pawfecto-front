<template>
  <div class="signup-container">

    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label>아이디</label>
        <input type="text" v-model="form.loginId" required />
      </div>

      <div class="form-group">
        <label>비밀번호</label>
        <input type="password" v-model="form.password" required />
      </div>

      <div class="form-group">
        <label>비밀번호 확인</label>
        <input type="password" v-model="form.passwordConfirm" required />
      </div>

      <div class="form-group">
        <label>브랜드 명</label>
        <input type="text" v-model="form.brandName" required />
      </div>

      <div class="form-group">
        <label>이메일 주소</label>
        <input type="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label>전화번호</label>
        <input type="text" v-model="form.phoneNumber" required />
      </div>

      <div class="form-group">
        <label>이름</label>
        <input type="text" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label>주소</label>
        <input type="text" v-model="form.address" required />
      </div>

      <div class="form-group">
        <label>반려동물 종류</label>
        <select v-model="form.petType">
          <option value="">선택하세요</option>
          <option value="dog">강아지</option>
          <option value="cat">고양이</option>
        </select>
      </div>

      <div class="form-group">
        <label>SNS 계정명</label>
        <input type="text" v-model="form.snsHandle" placeholder="@puppy_ssafy" />
      </div>

      <div class="form-group">
        <label>SNS 계정 URL</label>
        <input type="text" v-model="form.snsUrl" placeholder="https://instagram.com/..." />
      </div>

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
            {{ tag.label }}
            </span>
        </div>
        <div class="selected-tags" v-if="form.styleTags.length > 0">
            <span
            v-for="tag in form.styleTags"
            :key="tag"
            class="selected-item"
            >
            #{{ getLabel(tag) }}
            </span>
        </div>
    </div>  

      <div class="form-group">
        <label>프로필 이미지</label>
        <input type="file" @change="handleFileUpload" />
      </div>

      <button type="submit" class="submit-btn">가입하기</button>
    </form>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
    accountType: 'creator',
    loginId: '',
    password: '',
    passwordConfirm: '',
    brandName: '',
    email: '',
    phoneNumber: '',
    name: '',
    address: '',
    petType: '',
    snsHandle: '',
    snsUrl: '',
    styleTags: [],
    profileImage: null,
})

const handleFileUpload = (e) => {
  form.value.profileImage = e.target.files[0]
}

const styleOptions = [
  { value: 'outdoor', label: '아웃도어' },
  { value: 'energetic', label: '활발함' },
  { value: 'minimal', label: '미니멀' },
  { value: 'aesthetic', label: '감성' },
  { value: 'heartfelt', label: '따뜻함' },
  { value: 'funny', label: '재미있음' },
]

const toggleTag = (tagValue) => {
  const index = form.value.styleTags.indexOf(tagValue)

  if (index === -1) {
    form.value.styleTags.push(tagValue) // 선택
  } else {
    form.value.styleTags.splice(index, 1) // 해제
  }
}

const getLabel = (value) => {
  const found = styleOptions.find(tag => tag.value === value)
  return found ? found.label : value
}

const handleSignup = (() =>{
    console.log('form.value')
    console.log('form submitted!!!')
})

watch(
  () => form.value.accountType,
  (newValue) => {
    if (newValue === 'brand') {
      router.push('/signup/brand')
    }
  }
)


</script>

<style scoped>

.signup-container {
  max-width: 480px;
  margin: 60px auto;
  text-align: center;
  padding: 0 20px;
  font-family: 'Pretendard', sans-serif;
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 35px;
}

.account-type {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 35px;
  font-size: 15px;
  font-weight: 500;
}

.account-type input {
  margin-right: 6px;
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.form-group select {
  width: 105%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #000;
}

.tag-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.tag-chip {
  padding: 8px 14px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #f8f8f8;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  transition: 0.2s;
}

.tag-chip:hover {
  background: #eee;
}

.tag-chip.selected {
  background: #000;
  color: #fff;
  border-color: #000;
}

.selected-tags {
  margin-top: 12px;
}

.selected-item {
  margin-right: 10px;
  font-size: 14px;
  color: #333;
}

.submit-btn {
  width: 105%;
  padding: 14px;
  margin-top: 50px;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #222;
}

</style>