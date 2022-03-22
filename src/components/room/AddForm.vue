<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">เพิ่มข้อมูลห้องพัก</p>
    </div>
    <div class="card-content">
      <br />
      <b-field horizontal label="หมายเลขห้อง">
        <b-input v-model="room.number" required pattern="[0-9]*">></b-input>
      </b-field>

      <b-field horizontal label="ราคา">
        <b-numberinput v-model="room.price" min="300" step="50"></b-numberinput>
      </b-field>

      <b-field horizontal label="ประเภทห้องพัก">
        <b-select v-model="room.roomTypeId" placeholder="ประเภทห้องพัก" required>
          <option
            v-for="roomType in roomTypes"
            :key="roomType.room_type_id"
            :value="roomType.room_type_id"
          >
            {{ roomType.name }}
          </option>
        </b-select>
      </b-field>

      <b-field horizontal>
        <p class="control">
          <b-button
            label="เพิ่ม"
            type="is-primary"
            @click="addRoom"
            :disabled="!room.number || !room.price || !room.roomTypeId"
          />
        </p>
      </b-field>
      <h2>{{ room }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddForm',
  data() {
    return {
      room: {
        number: null,
        price: null,
        roomTypeId: null,
      },
      roomTypes: [],
    }
  },

  methods: {
    async addRoom() {
      this.$emit('add:room', this.room)

      this.room.number = null
      this.room.price = null
      this.room.roomTypeId = null
    },

    async getRoomTypes() {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/room-types`)

      this.roomTypes = data
    },
  },

  async mounted() {
    await this.getRoomTypes()
  },

  computed: {
    roomDetail() {
      return this.room
    },
  },
}
</script>
