<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">จัดการข้อมูลห้องพัก</p>
    </div>
    <div class="card-content">
      <b-table :data="data" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      data: [
        {
          id: 1,
          prefix: 'Mr.',
          first_name: 'Jesse',
          last_name: 'Simmons',
        },
        {
          id: 2,
          prefix: 'Mr.',
          first_name: 'John',
          last_name: 'Jacobs',
        },
        {
          id: 3,
          prefix: 'Mrs.',
          first_name: 'Tina',
          last_name: 'Gilbert',
        },
      ],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
        },
        {
          field: 'prefix',
          label: 'หมายเลขห้องพัก',
        },
        {
          field: 'first_name',
          label: 'ราคา',
        },
        {
          field: 'last_name',
          label: 'ประเภทห้อง',
        },
      ],
    }
  },

  methods: {
    async getRooms() {},
  },

  async mounted() {},
}
</script>

<style></style>
