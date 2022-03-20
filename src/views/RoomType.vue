<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table :roomTypes="roomTypes" :columns="columns" />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Form v-on:add:roomType="addRoomType" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/roomType/Table.vue'
import Form from '@/components/roomType/Form.vue'

import axios from 'axios'

export default {
  name: 'RoomType',
  components: {
    Table,
    Form,
  },
  data() {
    return {
      roomTypes: [],
      columns: [
        {
          field: 'room_type_id',
          label: 'ID',
          width: '40',
          numeric: true,
        },
        {
          field: 'name',
          width: '150',
          label: 'ชื่อประเภท',
        },
        {
          field: 'bed',
          width: '150',
          label: 'ประเภทเตียง',
        },
        {
          field: 'detail',
          label: 'รายละเอียด',
        },
      ],
    }
  },

  methods: {
    async getRoomTypes() {
      const { data } = await axios.get('http://localhost:3001/room-types')
      this.roomTypes = data
    },

    async addRoomType(roomType) {
      await axios.post('http://localhost:3001/room-types', roomType)

      this.$buefy.notification.open({
        message: 'เพิ่มข้อมูลประเภทห้องสำเร็จ!',
        type: 'is-success',
      })

      this.getRoomTypes()
    },
  },

  async mounted() {
    this.getRoomTypes()
  },
}
</script>

<style></style>
