<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">จัดการข้อมูลลูกค้า</p>
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
          email: 'jesse@gmail.com',
        },
        {
          id: 2,
          prefix: 'Mr.',
          first_name: 'John',
          last_name: 'Jacobs',
          email: 'john@gmail.com',
        },
        {
          id: 3,
          prefix: 'Mrs.',
          first_name: 'Tina',
          last_name: 'Gilbert',
          email: 'tima@gmail.com',
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
          label: 'คำนำหน้า',
        },
        {
          field: 'first_name',
          label: 'ชื่อ',
        },
        {
          field: 'last_name',
          label: 'นามสกุล',
        },
        {
          field: 'email',
          label: 'อีเมล',
          centered: true,
        },
      ],
    }
  },

  methods: {
    async getCustomers() {},
  },

  async mounted() {},
}
</script>

<style></style>
