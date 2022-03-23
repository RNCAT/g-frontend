<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">รายรับประจำวัน</p>
    </div>
    <div class="card-content">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <b-field label="เดือน">
            <b-datepicker type="month" placeholder="คลิกเพื่อเลือก" v-model="selectDate">
            </b-datepicker>
          </b-field>
        </div>
        <div class="column is-1">
          <b-field label="ค้นหา">
            <b-button
              @click="getDailyReport"
              type="is-primary"
              icon-right="fas fa-search"
            ></b-button>
          </b-field>
        </div>
      </div>
      <br />
      <div class="columns is-centered">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">รายรับทั้งหมด: {{ totalPrice }} บาท</h1>
          <h2 class="subtitle">ประจำวันที่ {{ new Date(selectDate).toLocaleDateString() }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MonthlyReport',
  data() {
    return {
      selectMonth: new Date(),
      bookingCount: 0,
      totalPrice: 0,
      cancelCount: 0,
    }
  },

  methods: {
    async getMonthlyReport() {
      this.selectMonth.setDate(0)
      this.selectMonth.setHours(0, 0, 0, 0)

      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reports/${this.selectDate}`)

      this.totalPrice = data.totalPrice
    },
  },
}
</script>
