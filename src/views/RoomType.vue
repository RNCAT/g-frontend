<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table
          :roomTypes="roomTypes"
          :isLoaded="isLoading"
          v-on:delete:roomType="deleteRoomType"
          v-on:toggle:add="toggleAddForm"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <div v-if="showAddForm">
          <Form v-on:add:roomType="addRoomType" />
        </div>
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
      isLoading: true,
      showAddForm: false,
    }
  },

  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm
    },

    async getRoomTypes() {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/room-types`)
      this.isLoading = false

      this.roomTypes = data
    },

    async addRoomType(roomType) {
      await axios.post(`${import.meta.env.VITE_API_URL}/room-types`, roomType)

      this.$buefy.notification.open({
        message: 'เพิ่มข้อมูลประเภทห้องสำเร็จ!',
        type: 'is-success',
      })

      this.showAddForm = false

      this.getRoomTypes()
    },

    async deleteRoomType(roomType) {
      await axios.delete(`${import.meta.env.VITE_API_URL}/room-types/${roomType.room_type_id}`)

      this.$buefy.notification.open({
        message: 'ลบข้อมูลประเภทห้องสำเร็จ!',
        type: 'is-success',
      })

      await this.getRoomTypes()
    },
  },

  async mounted() {
    this.getRoomTypes()
  },
}
</script>

<style></style>
