<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Form v-on:search:room="toggleSearchRoom" />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <div v-if="isShowSearchRoom">
          <RoomSearchTable :availableRooms="rooms" @select:room="selectedRoom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/home/Form.vue'
import RoomList from '@/components/home/RoomList.vue'
import RoomSearchTable from '@/components/home/RoomSearchTable.vue'

import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Form,
    RoomList,
    RoomSearchTable,
  },
  data() {
    return {
      isShowSearchRoom: false,
      selectDate: null,
      rooms: [],
    }
  },

  methods: {
    async toggleSearchRoom(date) {
      this.isShowSearchRoom = true

      await this.getSearchRooms(date)
    },

    async getSearchRooms(date) {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/rooms/search`, date)

      this.selectDate = date
      this.rooms = data
    },

    selectedRoom(room) {
      this.$router.push({
        name: 'booking',
        params: {
          room: room,
          date: this.selectDate,
        },
      })
    },
  },
}
</script>
