<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">ข้อมูลห้องพัก</p>
    </div>
    <div class="card-content">
      <b-table :data="data" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['rooms', 'isLoaded'],

  methods: {
    async getRooms() {},
  },

  async mounted() {},
}
</script>

<style></style>
