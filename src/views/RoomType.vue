<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table
          :roomTypes="roomTypes"
          :isLoaded="isLoading"
          v-on:toggle:add="toggleAddForm"
          v-on:update:roomType="toggleUpdateForm"
          v-on:delete:roomType="deleteRoomType"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <div v-if="showAddForm">
          <AddForm v-on:add:roomType="addRoomType" />
        </div>
        <div v-if="showUpdateForm">
          <UpdateForm :updateRoomType="selectedRoomType" v-on:update:roomType="updateRoomType" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/roomType/Table.vue'
import AddForm from '@/components/roomType/AddForm.vue'
import UpdateForm from '@/components/roomType/UpdateForm.vue'

import axios from 'axios'

export default {
  name: 'RoomType',
  components: {
    Table,
    AddForm,
    UpdateForm,
  },
  data() {
    return {
      roomTypes: [],
      isLoading: true,
      showAddForm: false,
      showUpdateForm: false,
      selectedRoomType: null,
    }
  },

  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm
      this.showUpdateForm = false
    },

    toggleUpdateForm(roomType) {
      this.showUpdateForm = true
      this.showAddForm = false

      this.selectedRoomType = roomType
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

    async updateRoomType(roomType) {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/room-types/${roomType.room_type_id}`,
        roomType
      )

      this.$buefy.notification.open({
        message: 'แก้ไขข้อมูลประเภทห้องสำเร็จ!',
        type: 'is-success',
      })

      this.showUpdateForm = false

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
