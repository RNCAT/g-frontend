<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table
          :bookingList="bookingList"
          @paid:booking="paidBooking"
          @checkin:booking="checkInBooking"
          @checkout:booking="checkOutBooking"
          @cancel:booking="cancelBooking"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/booking/Table.vue'
import axios from 'axios'

export default {
  name: 'BookingManage',
  components: {
    Table,
  },
  data() {
    return {
      bookingList: [],
    }
  },

  methods: {
    async getBookingList() {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/booking`)
      this.bookingList = data
    },

    async paidBooking(bookingId) {
      await axios.patch(`${import.meta.env.VITE_API_URL}/booking/paid`, { bookingId })

      await this.getBookingList()
    },

    async checkInBooking(bookingId) {
      await axios.patch(`${import.meta.env.VITE_API_URL}/booking/check-in`, { bookingId })

      await this.getBookingList()
    },

    async checkOutBooking(bookingId) {
      await axios.patch(`${import.meta.env.VITE_API_URL}/booking/check-out`, { bookingId })

      await this.getBookingList()
    },

    async cancelBooking(bookingId) {
      await axios.patch(`${import.meta.env.VITE_API_URL}/booking/cancel`, { bookingId })

      await this.getBookingList()
    },
  },

  async mounted() {
    await this.getBookingList()
    console.log(this.bookingList)
  },
}
</script>

<style></style>
