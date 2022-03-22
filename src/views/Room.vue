<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table
          :rooms="rooms"
          :isLoaded="isLoading"
          v-on:toggle:add="toggleAddForm"
          v-on:update:room="toggleUpdateForm"
          v-on:delete:room="deleteRoom"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <div v-if="showAddForm">
          <AddForm v-on:add:room="addRoom" />
        </div>
        <div v-if="showUpdateForm">
          <UpdateForm :updateRoom="selectedRoom" v-on:update:room="updateRoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/room/Table.vue'
import AddForm from '@/components/room/AddForm.vue'
import UpdateForm from '@/components/room/UpdateForm.vue'

import axios from 'axios'

export default {
  name: 'Room',
  components: {
    Table,
    AddForm,
    UpdateForm,
  },
  data() {
    return {
      rooms: [],
      isLoading: true,
      showAddForm: false,
      showUpdateForm: false,
      selectedRoom: null,
    }
  },

  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm
      this.showUpdateForm = false
    },

    toggleUpdateForm(room) {
      this.showUpdateForm = true
      this.showAddForm = false

      this.selectedRoom = room
    },

    async getRooms() {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`)
      this.isLoading = false

      this.rooms = data
    },

    async addRoom(room) {
      await axios.post(`${import.meta.env.VITE_API_URL}/rooms`, room)

      this.$buefy.notification.open({
        message: 'เพิ่มข้อมูลห้องสำเร็จ!',
        type: 'is-success',
      })

      this.showAddForm = false

      this.getRooms()
    },

    async updateRoom(room) {
      await axios.patch(`${import.meta.env.VITE_API_URL}/rooms/${room.room_id}`, room)

      this.$buefy.notification.open({
        message: 'แก้ไขข้อมูลห้องสำเร็จ!',
        type: 'is-success',
      })

      this.showUpdateForm = false

      this.getRooms()
    },

    async deleteRoom(room) {
      await axios.delete(`${import.meta.env.VITE_API_URL}/rooms/${room.room_id}`)

      this.$buefy.notification.open({
        message: 'ลบข้อมูลห้องสำเร็จ!',
        type: 'is-success',
      })

      this.getRooms()
    },
  },

  async mounted() {
    await this.getRooms()
  },
}
</script>

<style></style>
