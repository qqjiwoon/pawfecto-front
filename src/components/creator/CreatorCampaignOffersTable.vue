<template>
  <div class="offers-table">

    <!-- 제목 -->
    <h2 class="offers-title">Campaign Offers</h2>

    <!-- 상단 검색 박스 -->
    <div class="search-box">
      <input type="text" placeholder="Search Product..." v-model="searchQuery" />
      <span class="search-icon">🔍</span>
    </div>

    <!-- 테이블 -->
    <table>
      <thead>
        <tr>
          <!-- <th><input type="checkbox" /></th> -->
          <th>브랜드</th>
          <th>상품</th>
          <th>최소 팔로워 수</th>
          <th>스타일</th>
          <th>시작일</th>
          <th>마감일</th>
          <th>상태</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="offer in paginatedOffers" :key="offer.id">
          <td>
            <div class="brand-col">
              <img :src="offer.brand_image" class="brand-img" />
              <span>{{ offer.brand_name }}</span>
            </div>
          </td>

          <td>{{ offer.product_name }}</td>
          <td>{{ offer.min_follower_count }}</td>

          <td>
            <div class="style-col">
              <span
                v-for="style in offer.styles"
                :key="style"
                class="style-tag"
              >
                #{{ style }}
              </span>
            </div>
          </td>

          <td>{{ offer.start_date }}</td>
          <td>{{ offer.end_date }}</td>

          <td class="status-col">
            <div class="status-wrapper" @click.stop="toggleDropdown(offer.id)">
              <span :class="['status', offer.status]">
                {{ toKoreanStatus(offer.status) }}
              </span>

              <div 
                v-if="openDropdownId === offer.id"
                class="dropdown"
              >
                <div
                class="dropdown-item"
                v-for="s in statusOptions"
                :key="s"
                @click="(event) => changeStatus(offer.id, s, event)"
                >
                {{ toKoreanStatus(s) }}
                </div>

              </div>
            </div>
          </td>

        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="pagination">
      <button class="page-btn" @click="prevPage">← Previous</button>

      <div class="pages">
        <span
          v-for="n in totalPages"
          :key="n"
          :class="['page-number', n === currentPage ? 'active' : '']"
          @click="currentPage = n"
        >
          {{ n }}
        </span>
      </div>

      <button class="page-btn" @click="nextPage">Next →</button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  creatorId: Number
})

/* ------------------------------
   1. 상태 텍스트 변환  ===> 백엔드 연결 시 상태 업데이트 되도록 수정 필요(axios)
------------------------------ */
const toKoreanStatus = (status) => {
  switch (status) {
    case 'pending': return '대기중'
    case 'accepted': return '수락됨'
    case 'rejected': return '거절됨'
    case 'completed': return '완료됨'
    default: return status
  }
}

/* ------------------------------
   2. 상태 옵션 (ENUM 기반)
------------------------------ */
const statusOptions = ['pending', 'accepted', 'rejected', 'completed']

/* 🔥 상태 변경 Dropdown 관리 */
const openDropdownId = ref(null)

const toggleDropdown = (id) => {
  openDropdownId.value = openDropdownId.value === id ? null : id
}

// 특정 offer의 상태 변경
const changeStatus = (id, newStatus, event) => {
  event.stopPropagation(); // 🔥 드롭다운 닫힘 방해하는 버블링 차단

  const item = offers.value.find(o => o.id === id)
  if (item) item.status = newStatus

  openDropdownId.value = null   // 🔥 확실하게 드롭다운 닫힘
}



/* ------------------------------
   더미 데이터
------------------------------ */
const offers = ref([
  {
    id: 1,
    brand_name: "PuppyGram",
    brand_image: "https://picsum.photos/50?dog=1",
    product_name: "고단백 오리 강아지 트릿",
    min_follower_count: 3000,
    styles: ["활발한", "웃긴"],
    start_date: "2025-11-20",
    end_date: "2025-12-10",
    status: "accepted"
  },
  {
    id: 2,
    brand_name: "WoofLife",
    brand_image: "https://picsum.photos/50?dog=2",
    product_name: "노즈워크 퍼즐 장난감",
    min_follower_count: 5000,
    styles: ["감각적인", "깔끔한"],
    start_date: "2025-11-18",
    end_date: "2025-12-15",
    status: "pending"
  },
  {
    id: 3,
    brand_name: "MongFriends",
    brand_image: "https://picsum.photos/50?dog=3",
    product_name: "강아지 겨울 패딩 베스트",
    min_follower_count: 6000,
    styles: ["포근한", "힐링되는"],
    start_date: "2025-11-22",
    end_date: "2025-12-20",
    status: "completed"
  },
  {
    id: 4,
    brand_name: "HappyBark",
    brand_image: "https://picsum.photos/50?dog=4",
    product_name: "천연 성분 치석 제거 간식",
    min_follower_count: 2000,
    styles: ["차분한", "감동적인"],
    start_date: "2025-11-25",
    end_date: "2025-12-22",
    status: "rejected"
  },
  {
    id: 5,
    brand_name: "OutdoorPaws",
    brand_image: "https://picsum.photos/50?dog=5",
    product_name: "산책용 하네스 + 리드줄 세트",
    min_follower_count: 7000,
    styles: ["야외감성", "활발한"],
    start_date: "2025-11-12",
    end_date: "2025-12-05",
    status: "accepted"
  },


  {
    id: 6,
    brand_name: "PuppyGram",
    brand_image: "https://picsum.photos/50?dog=1",
    product_name: "고단백 오리 강아지 트릿",
    min_follower_count: 3000,
    styles: ["활발한", "웃긴"],
    start_date: "2025-11-20",
    end_date: "2025-12-10",
    status: "accepted"
  },
  {
    id: 7,
    brand_name: "WoofLife",
    brand_image: "https://picsum.photos/50?dog=2",
    product_name: "노즈워크 퍼즐 장난감",
    min_follower_count: 5000,
    styles: ["감각적인", "깔끔한"],
    start_date: "2025-11-18",
    end_date: "2025-12-15",
    status: "pending"
  },
  {
    id: 8,
    brand_name: "MongFriends",
    brand_image: "https://picsum.photos/50?dog=3",
    product_name: "강아지 겨울 패딩 베스트",
    min_follower_count: 6000,
    styles: ["포근한", "힐링되는"],
    start_date: "2025-11-22",
    end_date: "2025-12-20",
    status: "completed"
  },
  {
    id: 9,
    brand_name: "HappyBark",
    brand_image: "https://picsum.photos/50?dog=4",
    product_name: "천연 성분 치석 제거 간식",
    min_follower_count: 2000,
    styles: ["차분한", "감동적인"],
    start_date: "2025-11-25",
    end_date: "2025-12-22",
    status: "rejected"
  },
  {
    id: 10,
    brand_name: "OutdoorPaws",
    brand_image: "https://picsum.photos/50?dog=5",
    product_name: "산책용 하네스 + 리드줄 세트",
    min_follower_count: 7000,
    styles: ["야외감성", "활발한"],
    start_date: "2025-11-12",
    end_date: "2025-12-05",
    status: "accepted"
  },


  {
    id: 11,
    brand_name: "PuppyGram",
    brand_image: "https://picsum.photos/50?dog=1",
    product_name: "고단백 오리 강아지 트릿",
    min_follower_count: 3000,
    styles: ["활발한", "웃긴"],
    start_date: "2025-11-20",
    end_date: "2025-12-10",
    status: "accepted"
  },
  {
    id: 12,
    brand_name: "WoofLife",
    brand_image: "https://picsum.photos/50?dog=2",
    product_name: "노즈워크 퍼즐 장난감",
    min_follower_count: 5000,
    styles: ["감각적인", "깔끔한"],
    start_date: "2025-11-18",
    end_date: "2025-12-15",
    status: "pending"
  },
  {
    id: 13,
    brand_name: "MongFriends",
    brand_image: "https://picsum.photos/50?dog=3",
    product_name: "강아지 겨울 패딩 베스트",
    min_follower_count: 6000,
    styles: ["포근한", "힐링되는"],
    start_date: "2025-11-22",
    end_date: "2025-12-20",
    status: "completed"
  },
  {
    id: 14,
    brand_name: "HappyBark",
    brand_image: "https://picsum.photos/50?dog=4",
    product_name: "천연 성분 치석 제거 간식",
    min_follower_count: 2000,
    styles: ["차분한", "감동적인"],
    start_date: "2025-11-25",
    end_date: "2025-12-22",
    status: "rejected"
  },
  {
    id: 15,
    brand_name: "OutdoorPaws",
    brand_image: "https://picsum.photos/50?dog=5",
    product_name: "산책용 하네스 + 리드줄 세트",
    min_follower_count: 7000,
    styles: ["야외감성", "활발한"],
    start_date: "2025-11-12",
    end_date: "2025-12-05",
    status: "accepted"
  }
])

/* ------------------------------
   3. 검색 필터 + Pagination
------------------------------ */

const searchQuery = ref("")
const currentPage = ref(1)
const itemsPerPage = 6

// 검색 필터
const filteredOffers = computed(() => {
  if (!searchQuery.value) return offers.value
  return offers.value.filter(o =>
    o.product_name.includes(searchQuery.value) ||
    o.brand_name.includes(searchQuery.value)
  )
})

// 총 페이지 수 계산
const totalPages = computed(() =>
  Math.ceil(filteredOffers.value.length / itemsPerPage)
)

// 현재 페이지 데이터 잘라내기
const paginatedOffers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredOffers.value.slice(start, start + itemsPerPage)
})

// 이전/다음 페이지 이동
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

</script>

<style scoped>

.offers-table {
  width: 100%;
  max-width: 1200px;   /* 최대 폭 제한 */
  margin: 0 auto;       /* 가운데 정렬 */
  padding: 0 32px;      /* 좌우 여백 */
  box-sizing: border-box;
}


/* 제목 */
.offers-title {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin: 140px 0 80px 0;
  color: #222;
}

/* 검색 박스 */
.search-box {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
  position: relative;
  margin-right: 20px;
}

.search-box input {
  padding: 10px 36px 10px 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 220px;
}

.search-icon {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

/* 테이블 */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

thead {
  border-bottom: 1px solid #eee;
}

th {
  text-align: left;
  padding: 14px 16px;
  color: #777;
}

tbody tr {
  border-bottom: 1px solid #f0f0f0;
}

td {
  padding: 18px 16px;
  border: none;
  vertical-align: middle;
}


/* 브랜드 이미지 + 이름 */
.brand-col {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-img {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  object-fit: cover;
}

/* 스타일 태그 */
.style-col {
  display: flex;
  gap: 6px;
  align-items: center;
}

.style-tag {
  background-color: #f0eaff;
  color: #6b4fd8;
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 8px;
}


/* -------------------------
   상태 Dropdown 스타일
------------------------- */

.status-col {
  position: relative;
}

.status-wrapper {
  position: relative;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 100;
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* 상태 스타일들 */
.status {
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-block;
}

.status.pending {
  background-color: #fff5d6;
  color: #b88a00;
  border: 1px solid #f3dca0;
}

.status.accepted {
  background-color: #e8e8e8;
  color: #333;
  border: 1px solid #bebebe;
}

.status.rejected {
  background-color: #ffe0e0;
  color: #cc0000;
  border: 1px solid #ffbcbc;
}

.status.completed {
  background-color: #daf5df;
  color: #2e7d32;
  border: 1px solid #b3e6c1;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 20px;
}

.page-btn {
  background: white;
  border: 1px solid #d1d1d1;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.pages {
  display: flex;
  gap: 8px;
}

.page-number {
  padding: 4px 8px;
  cursor: pointer;
  color: #666;
}

.page-number.active {
  font-weight: bold;
  color: #000;
}
</style>