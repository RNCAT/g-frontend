<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">จัดการข้อมูลเจ้าหน้าที่</p>
    </div>
    <div class="card-content">
      <div class="level-right">
        <b-button @click="toggleAdd" type="is-primary">เพิ่ม</b-button>
      </div>
      <b-table :data="authorities" hoverable paginated :per-page="5" :loading="isLoaded">
        <b-table-column field="prefix" label="คำนำหน้า" width="80" searchable v-slot="props">
          {{ props.row.prefix }}
        </b-table-column>

        <b-table-column field="name" label="ชื่อ" width="80" searchable v-slot="props">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column field="surname" label="นามสกุล" width="80" searchable v-slot="props">
          {{ props.row.surname }}
        </b-table-column>

        <b-table-column field="email" label="อีเมล" width="150" searchable v-slot="props">
          {{ props.row.email }}
        </b-table-column>

        <b-table-column label="actions" width="100" centered v-slot="props">
          <b-button @click="updateAuthority(props.row)" label="แก้ไข" type="is-warning" /> &nbsp;
          <b-button @click="confirmDelete(props.row)" label="ลบ" type="is-danger" />
        </b-table-column>

        <template #empty>
          <div class="has-text-centered">No records</div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['authorities', 'isLoaded'],

  methods: {
    toggleAdd() {
      this.$emit('toggle:add')
    },

    updateAuthority(authority) {
      authority.password = ''

      this.$emit('update:authority', authority)
    },

    confirmDelete(authority) {
      this.$buefy.dialog.confirm({
        title: 'ลบเจ้าหน้าที่ ',
        message: `คุณต้องการลบเจ้าหน้าที่: <b>${authority.name}</b> ใช่ไหม?`,
        type: 'is-danger',
        onConfirm: () => this.$emit('delete:authority', authority),
      })
    },
  },
}
</script>
