<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">แก้ไขข้อมูลประเภทห้องพัก</p>
    </div>
    <div class="card-content">
      <br />
      <b-field horizontal label="ID">
        <b-input :value="updateRoomType.room_type_id" disabled></b-input>
      </b-field>

      <b-field horizontal label="ชื่อประเภท">
        <b-input v-model="updateRoomType.name"></b-input>
      </b-field>

      <b-field horizontal label="ประเภทเตียง">
        <b-select v-model="updateRoomType.bed" placeholder="ประเภทเตียง">
          <option value="เตียงเดี่ยว">เตียงเดี่ยว</option>
          <option value="เตียงคู่">เตียงคู่</option>
        </b-select>
      </b-field>

      <b-field horizontal label="รายละเอียด">
        <b-input v-model="updateRoomType.detail" type="textarea"></b-input>
      </b-field>

      <b-field horizontal>
        <p class="control">
          <b-button
            label="แก้ไข"
            type="is-primary"
            @click="showUpdateForm(updateRoomType)"
            :disabled="!updateRoomType.name || !updateRoomType.bed || !updateRoomType.detail"
          />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateForm',
  props: ['updateRoomType'],

  methods: {
    showUpdateForm(roomType) {
      this.$emit('update:roomType', roomType)
    },
  },
}
</script>

<style></style>
