<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">ข้อมูลประเภทห้องพัก</p>
    </div>
    <div class="card-content">
      <div class="level-right">
        <b-button @click="toggleAdd" type="is-primary">เพิ่ม</b-button>
      </div>
      <b-table :data="roomTypes" hoverable paginated :per-page="5" :loading="isLoaded">
        <b-table-column field="name" label="ชื่อประเภท" width="80" searchable v-slot="props">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column field="bed" label="ประเภทเตียง" width="80" searchable v-slot="props">
          {{ props.row.bed }}
        </b-table-column>

        <b-table-column field="detail" label="detail" width="150" searchable v-slot="props">
          {{ props.row.detail }}
        </b-table-column>

        <b-table-column label="actions" width="100" centered v-slot="props">
          <b-button @click="updateRoomType(props.row)" label="แก้ไข" type="is-warning" /> &nbsp;
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
  props: ['roomTypes', 'isLoaded'],

  methods: {
    toggleAdd() {
      this.$emit('toggle:add')
    },

    updateRoomType(roomType) {
      this.$emit('update:roomType', roomType)
    },

    confirmDelete(roomType) {
      this.$buefy.dialog.confirm({
        title: 'ลบประเภทห้องพัก ',
        message: `คุณต้องการลบประเภทห้องพัก: <b>${roomType.name}</b> ใช่ไหม?`,
        type: 'is-danger',
        onConfirm: () => this.$emit('delete:roomType', roomType),
      })
    },
  },
}
</script>
