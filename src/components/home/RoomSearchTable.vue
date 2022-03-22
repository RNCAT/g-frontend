<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">ห้องพักที่ว่าง</p>
    </div>
    <div class="card-content">
      <b-table :data="availableRooms" hoverable>
        <b-table-column field="number" label="หมายเลข" width="20" v-slot="props">
          {{ props.row.number }}
        </b-table-column>

        <b-table-column field="RoomType.name" label="ประเภทห้องพัก" width="50" v-slot="props">
          {{ props.row.RoomType.name }}
        </b-table-column>

        <b-table-column field="RoomType.detail" label="รายละเอียด" width="150" v-slot="props">
          {{ props.row.RoomType.detail }}
        </b-table-column>

        <b-table-column field="price" label="ราคา" width="30" v-slot="props">
          {{ props.row.price }} ฿
        </b-table-column>

        <b-table-column label="actions" width="100" centered v-slot="props">
          <b-button @click="selectedRoom(props.row)" label="จอง" type="is-info" /> &nbsp;
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
  name: 'RoomSearchTable',
  props: ['availableRooms', 'isLoaded'],

  methods: {
    selectedRoom(room) {
      this.$emit('select:room', room)
    },
  },
}
</script>

<style></style>
