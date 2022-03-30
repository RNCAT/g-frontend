<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">ข้อมูลการเข้าพักประจำเดือน</p>
    </div>
    <div class="card-content">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <b-field label="เดือน">
            <b-datepicker type="month" placeholder="คลิกเพื่อเลือก" v-model="selectMonth">
            </b-datepicker>
          </b-field>
        </div>
        <div class="column is-1">
          <b-field label="ค้นหา">
            <b-button
              @click="getMonthlyReport"
              type="is-primary"
              icon-right="fas fa-search"
            ></b-button>
          </b-field>
        </div>
      </div>
      <br />
      <div class="columns is-centered">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">จอง: {{ bookingCount }} ครั้ง</h1>
          <h1 class="title">ยกเลิก: {{ cancelCount }} ครั้ง</h1>
          <h1 class="title">รายรับทั้งหมด: {{ totalPrice }} บาท</h1>
          <h2 class="subtitle">ประจำเดือน {{ new Date(selectMonth).toLocaleDateString() }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs, { customParseFormat } from 'dayjs'

export default {
  name: 'MonthlyReport',
  data() {
    return {
      selectMonth: new Date(),
      bookingCount: 0,
      totalPrice: 0,
      cancelCount: 0,
      month: '',
    }
  },

  methods: {
    async getMonthlyReport() {
      this.selectMonth.setDate(1)
      this.selectMonth.setMonth(this.selectMonth.getMonth())
      this.selectMonth.setHours(0, 0, 0, 0)

      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/reports/monthly`, {
        month: this.selectMonth,
      })

      // console.log(this.selectMonth)
      // console.log(new Date(data.plusMonth))
      // console.log(data)

      this.bookingCount = data.bookingCount
      this.totalPrice = data.totalPrice
      this.cancelCount = data.cancelCount
    },
  },
}
</script>
