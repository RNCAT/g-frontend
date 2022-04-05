<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">จัดการข้อมูลการจอง</p>
    </div>
    <div class="card-content">
      <b-table :data="bookingList" hoverable>
        <b-table-column field="Room.number" label="เลขห้อง" width="80" searchable v-slot="props">
          {{ props.row.Room.number }}
        </b-table-column>

        <b-table-column field="start" label="วันที่จอง" width="180" centered v-slot="props">
          {{ new Date(props.row.start).toLocaleDateString() }} -
          {{ new Date(props.row.end).toLocaleDateString() }}
        </b-table-column>

        <b-table-column field="Customer" label="ลูกค้า" width="200" centered v-slot="props">
          {{ props.row.Customer.prefix }} {{ props.row.Customer.name }}
          {{ props.row.Customer.surname }}
        </b-table-column>

        <b-table-column field="price" label="ราคา" width="70" v-slot="props">
          {{ props.row.price }} ฿
        </b-table-column>

        <b-table-column field="BookingStatus" label="สถานะ" width="60" centered v-slot="props">
          <b-tag
            v-if="props.row.BookingStatus.booking_status_id === 1"
            type="is-warning"
            size="is-medium"
            >{{ props.row.BookingStatus.name }}</b-tag
          >
          <b-tag
            v-else-if="props.row.BookingStatus.booking_status_id === 2"
            type="is-success"
            size="is-medium"
            >{{ props.row.BookingStatus.name }}</b-tag
          >
          <b-tag
            v-else-if="props.row.BookingStatus.booking_status_id === 5"
            type="is-info"
            size="is-medium"
            >{{ props.row.BookingStatus.name }}</b-tag
          >
          <b-tag
            v-else-if="props.row.BookingStatus.booking_status_id === 6"
            type="is-link"
            size="is-medium"
            >{{ props.row.BookingStatus.name }}</b-tag
          >
          <b-tag
            v-else-if="props.row.BookingStatus.booking_status_id === 4"
            type="is-danger"
            size="is-medium"
            >{{ props.row.BookingStatus.name }}</b-tag
          >
        </b-table-column>

        <b-table-column label="พิมพ์" width="20" centered v-slot="props">
          <b-button
            v-if="
              props.row.BookingStatus.booking_status_id !== 1 &&
              props.row.BookingStatus.booking_status_id !== 4
            "
            icon-left="fas fa-print"
            type="is-dark"
            @click="print(props.row)"
          >
          </b-button>
        </b-table-column>

        <b-table-column field="BookingStatus" label="actions" width="200" centered v-slot="props">
          <b-button
            v-if="props.row.BookingStatus.booking_status_id === 1"
            label="ยืนยันชำระเงิน"
            type="is-success"
            @click="paidBooking(props.row)"
          />
          <b-button
            v-if="props.row.BookingStatus.booking_status_id === 2"
            label="เช็คอิน"
            type="is-info"
            @click="checkInBooking(props.row)"
          />
          <b-button
            v-if="props.row.BookingStatus.booking_status_id === 5"
            label="เช็คเอาท์"
            type="is-link"
            @click="checkOutBooking(props.row)"
          />

          &nbsp;
          <b-button
            v-if="props.row.BookingStatus.booking_status_id === 1"
            label="ยกเลิก"
            type="is-danger"
            @click="cancelBooking(props.row)"
          />
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: 'Table',
  components: {
    VueHtml2pdf,
  },
  props: ['bookingList', 'isLoading'],
  methods: {
    paidBooking(booking) {
      this.$buefy.dialog.confirm({
        message: `ยืนยันการชำระเงิน <b>${booking.price}</b> บาท?`,
        onConfirm: () => this.$emit('paid:booking', booking.booking_id),
      })
    },
    checkInBooking(booking) {
      this.$emit('checkin:booking', booking.booking_id)
    },
    checkOutBooking(booking) {
      this.$emit('checkout:booking', booking.booking_id)
    },
    cancelBooking(booking) {
      this.$buefy.dialog.confirm({
        message: `ยกเลิกการจองใช่หรือไม่?`,
        type: 'is-danger',
        onConfirm: () => this.$emit('cancel:booking', booking.booking_id),
      })
    },

    print(booking) {
      this.$emit('print:booking', booking)
    },
  },
}
</script>

<style></style>
