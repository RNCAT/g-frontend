<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">ข้อมูลห้องพัก</p>
    </div>
    <div class="card-content">
      <div class="level-right">
        <b-button @click="toggleAdd" type="is-primary">เพิ่ม</b-button>
      </div>
      <b-table :data="rooms" hoverable paginated :per-page="5" :loading="isLoaded">
        <b-table-column field="number" label="หมายเลขห้อง" width="20" searchable v-slot="props">
          {{ props.row.number }}
        </b-table-column>

        <b-table-column field="price" label="ราคา" width="80" searchable v-slot="props">
          {{ props.row.price }} ฿
        </b-table-column>

        <b-table-column
          field="RoomType.name"
          label="ประเภทห้องพัก"
          width="80"
          searchable
          v-slot="props"
        >
          {{ props.row.RoomType.name }}
        </b-table-column>

        <b-table-column label="actions" width="100" centered v-slot="props">
          <b-button @click="updateRoom(props.row)" label="แก้ไข" type="is-warning" /> &nbsp;
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
  props: ['rooms', 'isLoaded'],

  methods: {
    toggleAdd() {
      this.$emit('toggle:add')
    },

    updateRoom(room) {
      this.$emit('update:room', room)
    },

    confirmDelete(room) {
      this.$buefy.dialog.confirm({
        title: 'ลบห้องพัก ',
        message: `คุณต้องการลบห้องพัก: <b>${room.number}</b> ใช่ไหม?`,
        type: 'is-danger',
        onConfirm: () => this.$emit('delete:room', room),
      })
    },
  },
}
</script>
