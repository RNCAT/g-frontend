<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">จองห้องพัก</p>
    </div>
    <div class="card-content">
      <div class="container">
        <div class="columns">
          <div class="column">
            <b-field label="วันที่เช็คอิน">
              <b-datepicker
                placeholder="คลิกเพื่อเลือก"
                :min-date="minCheckInDate"
                :max-date="maxCheckInDate"
                v-model="date.checkInDate"
              >
              </b-datepicker>
            </b-field>
          </div>
          <div class="column">
            <b-field label="วันที่เช็คเอาท์">
              <b-datepicker
                placeholder="คลิกเพื่อเลือก"
                :min-date="minCheckOutDate"
                :max-date="maxCheckOutDate"
                v-model="date.checkOutDate"
              >
              </b-datepicker>
            </b-field>
          </div>
          <div class="column is-one-fifth">
            <b-field label="ค้นหา">
              <b-button type="is-primary" icon-right="fas fa-search" @click="search()"></b-button>
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    const today = new Date()

    return {
      minCheckInDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      maxCheckInDate: new Date(today.getFullYear(), today.getMonth() + 3, today.getDate()),
      minCheckOutDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
      maxCheckOutDate: new Date(today.getFullYear(), today.getMonth() + 3, today.getDate() + 1),
      date: {
        checkInDate: new Date(),
        checkOutDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
      },
    }
  },

  methods: {
    search() {
      this.date.checkInDate.setHours(0, 0, 0, 0)
      this.date.checkOutDate.setHours(0, 0, 0, 0)

      this.$emit('search:room', this.date)
    },
  },
}
</script>

<style></style>
