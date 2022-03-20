<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">จัดการข้อมูลประเภทห้องพัก</p>
    </div>
    <div class="card-content">
      <br />
      <b-field horizontal label="ชื่อประเภท">
        <b-input v-model="roomType.name"></b-input>
      </b-field>

      <b-field horizontal label="ประเภทเตียง">
        <b-select v-model="roomType.bed" placeholder="ประเภทเตียง">
          <option value="เตียงเดี่ยว">เตียงเดี่ยว</option>
          <option value="เตียงคู่">เตียงคู่</option>
        </b-select>
      </b-field>

      <b-field horizontal label="รายละเอียด">
        <b-input v-model="roomType.detail" type="textarea"></b-input>
      </b-field>

      <b-field horizontal>
        <p class="control">
          <b-button
            label="เพิ่ม"
            type="is-primary"
            @click="addRoomType(roomType)"
            :disabled="!roomType.name || !roomType.bed || !roomType.detail"
          />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      roomType: {
        name: null,
        bed: null,
        detail: null,
      },
    }
  },

  methods: {
    async addRoomType(roomType) {
      this.$emit('add:roomType', roomType)

      this.roomType.name = null
      this.roomType.bed = null
      this.roomType.detail = null
    },
  },
}
</script>

<style></style>
