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
          @print:booking="printBooking"
        />
      </div>
    </div>
    <Receipt v-if="booking" :booking="booking" @afterprint:booking="booking = null" />
  </div>
</template>

<script>
import Table from '@/components/booking/Table.vue'
import Receipt from '@/components/booking/Receipt.vue'
import axios from 'axios'
import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: 'BookingManage',
  components: {
    Table,
    Receipt,
    VueHtml2pdf,
  },
  data() {
    return {
      bookingList: [],
      booking: null,
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

    printBooking(booking) {
      this.booking = booking
    },
  },

  async mounted() {
    await this.getBookingList()
    // console.log(this.bookingList)
  },
}
</script>

<style></style>
