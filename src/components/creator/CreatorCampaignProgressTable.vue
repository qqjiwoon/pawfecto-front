<template>
  <div class="progress-table">

    <h2 class="page-title">Campaign Progress</h2>

    <div class="search-box">
      <input type="text" placeholder="Search Campaign..." v-model="searchQuery" />
      <span class="search-icon">🔍</span>
    </div>

    <table>
      <thead>
        <tr>
          <!-- <th class="checkbox-col"><input type="checkbox" /></th> -->
          <th>캠페인</th>
          <th>업로드 일시</th>
          <th>포스팅 링크</th>
          <th>상태</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in paginatedData" :key="item.id">
          
          <!-- <td class="checkbox-col">
            <input type="checkbox" />
          </td> -->

          <td>
            <div class="campaign-info">
              <img :src="item.campaign_image" class="campaign-img" alt="campaign" />
              <span class="campaign-name">{{ item.campaign_name }}</span>
            </div>
          </td>

          <td>{{ item.upload_date || '-' }}</td>

          <td>
            <div class="link-wrapper">
              <a v-if="item.post_link" :href="item.post_link" target="_blank" class="link-text">
                {{ item.post_link }}
              </a>
              <span v-else class="empty-dash">-</span>
            </div>
          </td>
          
          <td class="status-col">
            <div class="status-wrapper" @click.stop="toggleDropdown(item.id)">
              
              <div class="status-badge pointer">
                <span :class="['dot', item.status]"></span>
                <span class="status-text">{{ toKoreanStatus(item.status) }}</span>
              </div>

              <div 
                v-if="openDropdownId === item.id"
                class="dropdown"
              >
                <div
                  class="dropdown-item"
                  v-for="s in statusOptions"
                  :key="s"
                  @click="(event) => changeStatus(item.id, s, event)"
                >
                  {{ toKoreanStatus(s) }}
                </div>
              </div>

            </div>
          </td>

        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button class="page-btn" @click="prevPage" :disabled="currentPage === 1">
        ← Previous
      </button>

      <div class="pages">
        <span
          v-for="n in displayedPages"
          :key="n"
          :class="['page-number', n === currentPage ? 'active' : '']"
          @click="currentPage = n"
        >
          {{ n }}
        </span>
      </div>

      <button class="page-btn" @click="nextPage" :disabled="currentPage === totalPages">
        Next →
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* ------------------------------
   1. 더미 데이터
------------------------------ */
const progressData = ref([
  {
    id: 1,
    campaign_name: "NaturaFresh 오리 연어 강아지 사료",
    campaign_image: "https://picsum.photos/50?random=101",
    upload_date: "2025-11-25",
    post_link: "https://www.instagram.com/p/dogfood01",
    status: "complete"
  },
  {
    id: 2,
    campaign_name: "PawHug 저자극 발바닥 보습밤",
    campaign_image: "https://picsum.photos/50?random=102",
    upload_date: "2025-11-24",
    post_link: "https://www.instagram.com/p/pawbalm02",
    status: "complete"
  },
  {
    id: 3,
    campaign_name: "WoofyClean 물때 제거용 강아지 입욕제",
    campaign_image: "https://picsum.photos/50?random=103",
    upload_date: "",
    post_link: "",
    status: "incomplete"
  },
  {
    id: 4,
    campaign_name: "AirSoft 초경량 강아지 하네스",
    campaign_image: "https://picsum.photos/50?random=104",
    upload_date: "2025-11-20",
    post_link: "https://www.instagram.com/p/harness03",
    status: "complete"
  },
  {
    id: 5,
    campaign_name: "NaturalTreat 닭가슴살 수제간식",
    campaign_image: "https://picsum.photos/50?random=105",
    upload_date: "",
    post_link: "",
    status: "incomplete"
  },
  {
    id: 6,
    campaign_name: "DogFit 관절강화 영양보충제",
    campaign_image: "https://picsum.photos/50?random=106",
    upload_date: "2025-11-18",
    post_link: "https://www.instagram.com/p/joint04",
    status: "complete"
  },
  {
    id: 7,
    campaign_name: "SniffJoy 강아지 노즈워크 매트",
    campaign_image: "https://picsum.photos/50?random=107",
    upload_date: "",
    post_link: "",
    status: "incomplete"
  },
  {
    id: 8,
    campaign_name: "PureMouth 치석 케어 덴탈껌",
    campaign_image: "https://picsum.photos/50?random=108",
    upload_date: "",
    post_link: "",
    status: "incomplete"
  },
  {
    id: 9,
    campaign_name: "SleepyPaw 메모리폼 강아지 방석",
    campaign_image: "https://picsum.photos/50?random=109",
    upload_date: "2025-11-22",
    post_link: "https://www.instagram.com/p/dogbed05",
    status: "complete"
  },
  {
    id: 10,
    campaign_name: "HappyWalk 3m 자동 리드줄",
    campaign_image: "https://picsum.photos/50?random=110",
    upload_date: "",
    post_link: "",
    status: "incomplete"
  },
  {
    id: 11,
    campaign_name: "FreshCoat 저자극 샴푸 펫워시",
    campaign_image: "https://picsum.photos/50?random=111",
    upload_date: "2025-11-16",
    post_link: "https://www.instagram.com/p/shampoo06",
    status: "complete"
  },
  {
    id: 12,
    campaign_name: "TailFun 소리나는 강아지 공 장난감",
    campaign_image: "https://picsum.photos/50?random=112",
    upload_date: "",
    post_link: "",
    status: "incomplete"
  },
  {
    id: 13,
    campaign_name: "PetGuard 야외 산책용 LED 목걸이",
    campaign_image: "https://picsum.photos/50?random=113",
    upload_date: "2025-11-21",
    post_link: "https://www.instagram.com/p/ledcollar07",
    status: "complete"
  },
  {
    id: 14,
    campaign_name: "SoftBite 강아지 치아건강 껌",
    campaign_image: "https://picsum.photos/50?random=114",
    upload_date: "",
    post_link: "",
    status: "incomplete"
  },
  {
    id: 15,
    campaign_name: "WarmNest 겨울용 강아지 패딩 베스트",
    campaign_image: "https://picsum.photos/50?random=115",
    upload_date: "2025-11-23",
    post_link: "https://www.instagram.com/p/dogvest08",
    status: "complete"
  }])

/* ------------------------------
   2. 검색 및 필터링 로직
------------------------------ */
const searchQuery = ref("")
const itemsPerPage = 6 // 화면에 적절히 보이도록 조정
const currentPage = ref(1)

const filteredData = computed(() => {
  if (!searchQuery.value) return progressData.value
  return progressData.value.filter(item =>
    item.campaign_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredData.value.slice(start, start + itemsPerPage)
})

const displayedPages = computed(() => {
  return Array.from({ length: totalPages.value }, (_, i) => i + 1)
})

/* ------------------------------
   3. 이벤트 핸들러
------------------------------ */
const prevPage = () => { if (currentPage.value > 1) currentPage.value-- }
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++ }

const formatStatus = (status) => {
  return status.charAt(0).toUpperCase() + status.slice(1)
}


/* ------------------------------
   4. 상태 관련 로직 (Offers 코드 반영)
------------------------------ */

// 1. 상태 텍스트 변환 (한글)
const toKoreanStatus = (status) => {
  switch (status) {
    case 'incomplete': return '미완료' // Progress에만 있는 상태가 있다면 추가
    case 'complete': return '완료'     // Progress 기존 데이터 호환용
    default: return status
  }
}

// 2. 상태 옵션 (변경 가능한 목록)
const statusOptions = ['completed', 'incompleted']

/* 🔥 상태 변경 Dropdown 관리 */
const openDropdownId = ref(null)

const toggleDropdown = (id) => {
  openDropdownId.value = openDropdownId.value === id ? null : id
}

// [중요] 특정 item의 상태 변경 (데이터 소스: progressData)
const changeStatus = (id, newStatus, event) => {
  event.stopPropagation(); 

  // offers 대신 progressData를 찾도록 수정
  const item = progressData.value.find(o => o.id === id)
  if (item) item.status = newStatus

  openDropdownId.value = null
}
</script>

<style scoped>
/* Campaign Offers와 동일한 레이아웃 스타일 적용 
*/

.progress-table {
  width: 100%;
  max-width: 1200px;   /* 최대 폭 제한 */
  margin: 0 auto;       /* 가운데 정렬 */
  padding: 0 32px;      /* 좌우 여백 */
  box-sizing: border-box;
}

/* 제목 */
.page-title {
  text-align: center;
  font-size: 40px;      /* Offers와 동일 */
  font-weight: 700;
  margin: 140px 0 80px 0; /* Offers와 동일 */
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
  border-radius: 20px; /* 둥근 모서리 */
  width: 220px;
}

.search-icon {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

/* 테이블 공통 */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px; /* Offers와 동일 */
}

thead {
  border-bottom: 1px solid #eee;
}

th {
  text-align: left;
  padding: 14px 16px; /* Offers와 동일 */
  color: #777;        /* Offers와 동일 */
}

tbody tr {
  border-bottom: 1px solid #f0f0f0;
}

td {
  padding: 18px 16px; /* Offers와 동일 */
  border: none;
  vertical-align: middle; /* 기본 정렬 유지 (div로 감싸서 해결) */
  color: #333;
}

/* 체크박스 컬럼 */
.checkbox-col {
  width: 40px;
  text-align: center;
}

/* 캠페인 정보 (이미지+텍스트) */
.campaign-info {
  display: flex;
  align-items: center;
  gap: 10px; /* Offers의 brand-col gap과 동일 */
}

.campaign-img {
  width: 36px;  /* Offers와 동일한 사이즈 */
  height: 36px;
  border-radius: 999px; /* 완전 원형 */
  object-fit: cover;
  border: 1px solid #eee;
}

.campaign-name {
  font-weight: 500; /* 살짝 강조 */
}

/* 링크 스타일 */
.link-wrapper {
  display: flex;
  align-items: center;
}

.link-text {
  color: #666;
  text-decoration: none;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}

.link-text:hover {
  text-decoration: underline;
  color: #333;
}

.empty-dash {
  color: #ccc;
}

/* [추가/수정] 상태 및 드롭다운 스타일 */

.status-col {
  position: relative; /* 드롭다운 기준점 */
  overflow: visible;  /* 드롭다운이 잘리지 않게 설정 */
}

.status-wrapper {
  position: relative;
  display: inline-block;
}

.status-badge {
  /* 기존 스타일 유지 */
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid #eee;
  border-radius: 6px;
  background-color: #fff;
  font-size: 13px;
  color: #444;
  /* 클릭 가능함을 표시 */
  cursor: pointer; 
}

.status-badge:hover {
  background-color: #f9f9f9; /* 호버 효과 추가 */
}

/* 드롭다운 박스 스타일 (Offers와 동일) */
.dropdown {
  position: absolute;
  top: 40px; /* 배지 바로 아래 */
  left: 0;
  width: 100px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* 약간의 그림자 추가 추천 */
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
  color: #333;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* 기존 Dot 스타일 유지 */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dot.complete, .dot.completed, .dot.accepted { background-color: #4caf50; } /* 초록 */
.dot.incomplete, .dot.pending { background-color: #ff9800; } /* 주황/노랑 */
.dot.rejected { background-color: #f44336; } /* 빨강 */

/* 상태 배지 (Dot 스타일은 Progress 고유 디자인 유지하되 폰트는 통일) */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid #eee;
  border-radius: 6px; /* Figma 디자인 반영 */
  background-color: #fff;
  font-size: 13px;
  color: #444;
}

/* 상태 점 (Dot) */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot.complete {
  background-color: #4caf50;
}

.dot.incomplete {
  background-color: #f44336;
}


/* Pagination (Offers와 완벽하게 동일한 스타일) */
.pagination {
  display: flex;
  justify-content: center; /* 중앙 정렬 */
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
  color: #333;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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