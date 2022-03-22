<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">แก้ไขข้อมูลห้องพัก</p>
    </div>
    <div class="card-content">
      <br />
      <b-field horizontal label="ID">
        <b-input :value="updateRoom.room_id" disabled></b-input>
      </b-field>

      <b-field horizontal label="หมายเลขห้อง">
        <b-input v-model="updateRoom.number" required pattern="[0-9]*">></b-input>
      </b-field>

      <b-field horizontal label="ราคา">
        <b-numberinput v-model="updateRoom.price" min="300" step="50"></b-numberinput>
      </b-field>

      <b-field horizontal label="ประเภทห้องพัก">
        <b-select v-model="updateRoom.roomTypeId" placeholder="ประเภทห้องพัก" required>
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
            label="แก้ไข"
            type="is-primary"
            @click="showUpdateRoom(updateRoom)"
            :disabled="!updateRoom.number || !updateRoom.price || !updateRoom.roomTypeId"
          />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateForm',
  props: ['updateRoom'],
  data() {
    return {
      roomTypes: [],
    }
  },

  methods: {
    showUpdateRoom(room) {
      this.$emit('update:room', room)
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
