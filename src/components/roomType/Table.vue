<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">ข้อมูลประเภทห้องพัก</p>
    </div>
    <div class="card-content">
      <b-table :data="roomTypes" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['roomTypes', 'columns'],
}
</script>

<style></style>
