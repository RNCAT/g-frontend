<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">แก้ไขข้อมูลเจ้าหน้าที่</p>
    </div>
    <div class="card-content">
      <br />
      <b-field horizontal label="ID">
        <b-input :value="updateAuthority.authority_id" disabled></b-input>
      </b-field>

      <b-field horizontal label="คำนำหน้า">
        <b-select v-model="updateAuthority.prefix" placeholder="คำนำหน้า" required>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
          <option value="นาย">นาย</option>
        </b-select>
      </b-field>

      <b-field horizontal label="ชื่อ">
        <b-input v-model="updateAuthority.name" required></b-input>
      </b-field>

      <b-field horizontal label="นามสกุล">
        <b-input v-model="updateAuthority.surname" required></b-input>
      </b-field>

      <b-field horizontal label="อีเมล">
        <b-input v-model="updateAuthority.email" required></b-input>
      </b-field>

      <b-field horizontal label="รหัสผ่าน">
        <b-input v-model="updateAuthority.password" required></b-input>
      </b-field>

      <b-field horizontal>
        <p class="control">
          <b-button
            label="แก้ไข"
            type="is-primary"
            @click="showUpdateForm(updateAuthority)"
            :disabled="
              !updateAuthority.prefix ||
              !updateAuthority.name ||
              !updateAuthority.surname ||
              !updateAuthority.password
            "
          />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  props: ['updateAuthority'],

  methods: {
    showUpdateForm(authority) {
      this.$emit('update:authority', authority)
    },
  },
}
</script>
