<template>
  <div class="container">
    <VueHtml2pdf
      v-if="
        booking.BookingStatus.booking_status_id !== 1 &&
        booking.BookingStatus.booking_status_id !== 4
      "
      :show-layout="false"
      :float-layout="true"
      :enable-download="false"
      :preview-modal="true"
      filename="receipt"
      :pdf-quality="2"
      :manual-pagination="true"
      pdf-format="a5"
      pdf-orientation="portrait"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <div class="columns">
          <div class="column is-half">
            <h5 class="title is-5">ใบเสร็จรับเงิน เตาอิฐเกสเฮาส์</h5>
            <h6 class="subtitle is-6">
              วันที่ {{ new Date(booking.payments[0].createdAt).toLocaleDateString() }}
            </h6>
            <div class="content">
              <h6>ชื่อลูกค้า:</h6>
              <p>
                {{ booking.Customer.prefix }} {{ booking.Customer.name }}
                {{ booking.Customer.surname }}
              </p>
              <table class="table is-bordered">
                <thead>
                  <tr>
                    <th>หมายเลขห้อง</th>
                    <th>วันที่จอง</th>
                    <th>ราคา</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ booking.Room.number }}</td>
                    <td>
                      {{ new Date(booking.start).toLocaleDateString() }} -
                      {{ new Date(booking.end).toLocaleDateString() }}
                    </td>
                    <td>{{ booking.price }} ฿</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </VueHtml2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: 'ReceiptPage',
  components: {
    VueHtml2pdf,
  },
  props: ['booking'],
  async mounted() {
    await this.$refs.html2Pdf.generatePdf()

    // this.$emit('afterprint:booking')
  },
}
</script>

<style>
section {
  margin: 20px;
}
</style>
