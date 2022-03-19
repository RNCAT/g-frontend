<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">รายละเอียดการจอง</p>
    </div>
    <div class="card-content">
      <section>
        <b-field horizontal label="หมายเลขห้องพัก">
          <b-input name="subject" value="001" expanded disabled></b-input>
        </b-field>

        <b-field horizontal label="วันที่เช็คอิน">
          <b-datepicker disabled> </b-datepicker>
        </b-field>

        <b-field horizontal label="วันที่เช็คเอาท์">
          <b-datepicker disabled> </b-datepicker>
        </b-field>

        <b-field horizontal label="ราคา">
          <b-input name="subject" value="500" expanded disabled></b-input>
        </b-field>

        <b-field horizontal label="จำนวนผู้เข้าพัก">
          <b-numberinput placeholder="1" :min="1" max="2"></b-numberinput>
        </b-field>

        <b-field horizontal label="ลูกค้า">
          <b-select placeholder="">
            <option value="1">Bulma</option>
            <option value="2">Vue.js</option>
            <option value="3">Buefy</option>
          </b-select>
        </b-field>

        <b-field horizontal label="วิธีการชำระเงิน">
          <b-select placeholder="">
            <option value="1">เงินสด</option>
            <option value="2">โอน</option>
          </b-select>
        </b-field>

        <b-field horizontal>
          <p class="control">
            <b-button label="ยืนยันการจอง" type="is-primary" />
          </p>
        </b-field>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
}
</script>

<style></style>
