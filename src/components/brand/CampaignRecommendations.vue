<template>
  <div class="recommend-wrapper">

    <h2 class="title">Creator Recommendations</h2>

    <!-- 검색 -->
    <div class="search-box">
      <input 
        type="text" 
        v-model="keyword" 
        placeholder="Search Creator..."
        @input="filterCreators"
      />
      <button class="search-btn">🔍</button>
    </div>

    <!-- 결과 없음 -->
    <p v-if="filteredCreators.length === 0" class="no-result">
      찾으시는 크리에이터가 없습니다.
    </p>

    <!-- 테이블 -->
    <table v-else class="creator-table">
      <thead>
        <tr>
          <th>크리에이터</th>
          <th>반려동물</th>
          <th>팔로워 수</th>
          <th>스타일</th>
          <th>상태</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="creator in filteredCreators" :key="creator.id">
          <td class="creator-cell">
            <img :src="creator.profileImg" class="profile-img" />
            <div>
              <p class="name">{{ creator.name }}</p>
              <p class="handle">@{{ creator.handle }}</p>
            </div>
          </td>

          <td>{{ creator.petType }}</td>
          <td>{{ creator.followers.toLocaleString() }}</td>

          <td>
            <span 
              v-for="tag in creator.styleTags" 
              :key="tag" 
              class="tag"
            >
              #{{ tag }}
            </span>
          </td>

          <td>
            <span class="status" :class="creator.status">{{ creator.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import defaultImg from '@/assets/profile.jpg'

const creators = ref([
  {
    id: 1,
    name: "Mochi the Cat",
    handle: "mochi_cat",
    profileImg: defaultImg,
    petType: "Cat",
    followers: 5200,
    styleTags: ["감성적인", "차분한"],
    status: "Accepted"
  },
  {
    id: 2,
    name: "Bobby & Me",
    handle: "bobby_love",
    profileImg: defaultImg,
    petType: "Dog",
    followers: 8800,
    styleTags: ["활발한", "웃긴"],
    status: "Pending"
  },
  {
    id: 3,
    name: "Coco Studio",
    handle: "coco_daily",
    profileImg: defaultImg,
    petType: "Dog",
    followers: 12000,
    styleTags: ["야외감성", "힐링되는"],
    status: "Rejected"
  },
  {
    id: 4,
    name: "Nabi Life",
    handle: "nabi_home",
    profileImg: defaultImg,
    petType: "Cat",
    followers: 3400,
    styleTags: ["포근한", "감성적인"],
    status: "Completed"
  },
  {
    id: 5,
    name: "Sunny Paw",
    handle: "sunny_paw",
    profileImg: defaultImg,
    petType: "Dog",
    followers: 7600,
    styleTags: ["활발한", "야외감성"],
    status: "Accepted"
  },
  {
    id: 6,
    name: "Milk & Bread",
    handle: "milk_bread",
    profileImg: defaultImg,
    petType: "Cat",
    followers: 2900,
    styleTags: ["차분한", "깔끔한"],
    status: "Pending"
  },
  {
    id: 7,
    name: "Daisy’s World",
    handle: "daisy_flower",
    profileImg: defaultImg,
    petType: "Dog",
    followers: 5400,
    styleTags: ["힐링되는", "야외감성"],
    status: "Accepted"
  },
  {
    id: 8,
    name: "Mango House",
    handle: "mango_house",
    profileImg: defaultImg,
    petType: "Cat",
    followers: 4100,
    styleTags: ["감동적인", "포근한"],
    status: "Rejected"
  },
  {
    id: 9,
    name: "Pudding Time",
    handle: "pudding_time",
    profileImg: defaultImg,
    petType: "Dog",
    followers: 6100,
    styleTags: ["활발한", "웃긴"],
    status: "Completed"
  }
])


const keyword = ref("")
const filteredCreators = ref([...creators.value]) // 초기 목록

function filterCreators() {
  const k = keyword.value.toLowerCase()
  filteredCreators.value = creators.value.filter(c =>
    c.name.toLowerCase().includes(k) ||
    c.handle.toLowerCase().includes(k)
  )
}
</script>

<style scoped>
.recommend-wrapper {
  margin-top: 60px;
  text-align: center;
}

.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 35px;
}

.search-box {
  width: 280px;
  margin: 0 auto 20px;
  display: flex;
  gap: 8px;
}

.search-box input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.search-btn {
  padding: 8px 12px;
  border: none;
  background: #ddd;
  border-radius: 8px;
  cursor: pointer;
}

.no-result {
  margin-top: 20px;
  font-size: 15px;
  color: #666;
}

.creator-table {
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
}

.creator-table th {
  font-weight: 600;
  font-size: 14px;
  color: #555;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}

.creator-table td {
  padding: 14px 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 14px;
}

.creator-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
}

.tag {
  background: #f1f5ff;
  color: #6495ff;
  padding: 4px 10px;
  border-radius: 12px;
  margin-right: 6px;
  font-size: 12px;
}

.status {
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 12px;
}

.Accepted {
  background: #e5f4e8;
  color: #3c7c46;
}

.Pending {
  background: #fff7da;
  color: #967a00;
}

.Rejected {
  background: #ffe7e7;
  color: #b60000;
}

.Completed {
  background: #e8e8e8;
  color: #444;
}
</style>
