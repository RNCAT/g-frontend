<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">รายละเอียดการจอง</p>
    </div>
    <div class="card-content" v-if="hasData">
      <section>
        <b-field horizontal label="หมายเลขห้องพัก">
          <b-input name="subject" :value="room.room_id" expanded disabled></b-input>
        </b-field>

        <b-field horizontal label="วันที่เช็คอิน">
          <b-datepicker :value="date.checkInDate" disabled> </b-datepicker>
        </b-field>

        <b-field horizontal label="วันที่เช็คเอาท์">
          <b-datepicker :value="date.checkOutDate" disabled> </b-datepicker>
        </b-field>

        <b-field horizontal label="ราคา">
          <b-input name="subject" v-model="bookingData.price" expanded disabled></b-input>
        </b-field>

        <b-field horizontal label="ลูกค้า">
          <b-select v-model="bookingData.customerId" required>
            <option
              v-for="customer in customers"
              :key="customer.customer_id"
              :value="customer.customer_id"
            >
              {{ customer.name }} {{ customer.surname }}
            </option>
          </b-select>
        </b-field>

        <b-field horizontal>
          <p class="control">
            <b-button @click="confirmBooking" label="ยืนยันการจอง" type="is-primary" />
          </p>
        </b-field>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Form',
  props: ['room', 'date'],
  data() {
    return {
      hasData: false,
      customers: [],
      bookingData: {
        roomId: null,
        checkInDate: null,
        checkOutDate: null,
        price: null,
        customerId: null,
        authorityId: 1,
      },
    }
  },

  methods: {
    async getCustomers() {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/customers`)

      this.customers = data
    },

    confirmBooking() {
      this.$emit('confirm:booking', this.bookingData)
    },
  },

  async mounted() {
    if (!this.room || !this.date) {
    } else {
      this.date.checkOutDate.setHours(7, 0, 0, 0)

      const t1 = this.date.checkInDate.getTime()
      const t2 = this.date.checkOutDate.getTime()

      this.bookingData.price = Math.floor((t2 - t1) / (24 * 3600 * 1000)) * this.room.price
      this.bookingData.roomId = this.room.room_id
      this.bookingData.checkInDate = this.date.checkInDate
      this.bookingData.checkOutDate = this.date.checkOutDate

      await this.getCustomers()
      this.hasData = true
    }
  },
}
</script>
