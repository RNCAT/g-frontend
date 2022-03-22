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
          <RoomSearchTable :availableRooms="rooms" />
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
    const min = new Date()
    min.setDate(min.getDate() - 7)
    min.setHours(9)
    min.setMinutes(0)
    min.setSeconds(0)
    const max = new Date()
    max.setDate(max.getDate() + 7)
    max.setHours(18)
    max.setMinutes(0)
    max.setSeconds(0)
    return {
      minDatetime: min,
      maxDatetime: max,
      isShowSearchRoom: false,
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

      this.rooms = data
    },
  },
}
</script>

<style></style>
