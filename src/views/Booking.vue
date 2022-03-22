<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Form :room="room" :date="date" v-on:confirm:booking="addBooking" />
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/booking/Form.vue'
import axios from 'axios'

export default {
  name: 'Booking',
  props: ['room', 'date'],

  components: {
    Form,
  },

  methods: {
    async addBooking(bookingData) {
      await axios.post(`${import.meta.env.VITE_API_URL}/booking`, {
        start: bookingData.checkInDate,
        end: bookingData.checkOutDate,
        price: bookingData.price,
        customer_id: bookingData.customerId,
        authority_id: bookingData.authorityId,
        booking_status_id: 1,
        room_id: bookingData.roomId,
      })

      this.$router.push('/booking-manage')
    },
  },

  created() {
    if (!this.room || !this.date) {
      this.$router.push('/')
    }
  },
}
</script>

<style></style>
