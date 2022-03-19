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
              <b-datetimepicker
                placeholder="คลิกเพื่อเลือก"
                :min-datetime="minCheckInDate"
                :max-datetime="maxCheckInDate"
                v-model="checkInDate"
              >
              </b-datetimepicker>
            </b-field>
          </div>
          <div class="column">
            <b-field label="วันที่เช็คเอาท์">
              <b-datetimepicker
                placeholder="คลิกเพื่อเลือก"
                :min-datetime="minCheckOutDate"
                :max-datetime="maxCheckOutDate"
                v-model="checkOutDate"
              >
              </b-datetimepicker>
            </b-field>
          </div>
          <div class="column is-one-fifth">
            <b-field label="ค้นหา">
              <b-button
                type="is-primary"
                icon-right="fa-solid fa-magnifying-glass"
                @click="search()"
              ></b-button>
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
    const minCheckInDate = new Date()
    const maxCheckInDate = new Date()
    const minCheckOutDate = new Date()
    const maxCheckOutDate = new Date()

    maxCheckInDate.setDate(minCheckInDate.getDate() + 90)
    minCheckOutDate.setDate(minCheckInDate.getDate() + 1)
    maxCheckOutDate.setDate(minCheckOutDate.getDate() + 90)

    return {
      minCheckInDate,
      maxCheckInDate,
      minCheckOutDate,
      maxCheckOutDate,
      checkInDate: new Date(),
      checkOutDate: new Date(),
    }
  },

  methods: {
    search() {
      console.log('ค้นหานะ')
    },
  },
}
</script>

<style></style>
