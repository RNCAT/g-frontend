<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">รายรับประจำวัน</p>
    </div>
    <div class="card-content">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <b-field label="วันที่">
            <b-datepicker placeholder="คลิกเพื่อเลือก" v-model="selectDate"> </b-datepicker>
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
  name: 'DailyReport',
  data() {
    return {
      selectDate: new Date(),
      totalPrice: 0,
    }
  },

  methods: {
    async getDailyReport() {
      this.selectDate.setHours(0, 0, 0, 0)

      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/reports/daily`, {
        date: this.selectDate,
      })

      this.totalPrice = data.totalPrice
    },
  },
}
</script>
