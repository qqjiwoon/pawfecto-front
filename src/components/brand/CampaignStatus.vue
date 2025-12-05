<template>
  <div class="status-page">
    <h2>Campaign Status</h2>

    <table>
      <tr>
        <th>Creator</th>
        <th>Status</th>
        <th>Deliverable</th>
      </tr>

      <tr v-for="item in statusList" :key="item.id">
        <td>{{ item.creator }}</td>
        <td>{{ item.status }}</td>
        <td>
          <button>View</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const statusList = ref([
  { id: 1, creator: "Dummy User", status: "Accepted" },
  { id: 2, creator: "Dummy User", status: "Completed" },
])
</script>
