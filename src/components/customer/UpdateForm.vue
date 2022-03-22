<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">แก้ไขข้อมูลลูกค้า</p>
    </div>
    <div class="card-content">
      <br />
      <b-field horizontal label="ID">
        <b-input :value="updateCustomer.customer_id" disabled></b-input>
      </b-field>

      <b-field horizontal label="คำนำหน้า">
        <b-select v-model="updateCustomer.prefix" placeholder="คำนำหน้า" required>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
          <option value="นาย">นาย</option>
        </b-select>
      </b-field>

      <b-field horizontal label="ชื่อ">
        <b-input v-model="updateCustomer.name" required></b-input>
      </b-field>

      <b-field horizontal label="นามสกุล">
        <b-input v-model="updateCustomer.surname" required></b-input>
      </b-field>

      <b-field horizontal label="อีเมล">
        <b-input v-model="updateCustomer.email" required></b-input>
      </b-field>

      <b-field horizontal label="รหัสผ่าน">
        <b-input v-model="updateCustomer.password" required></b-input>
      </b-field>

      <b-field horizontal>
        <p class="control">
          <b-button
            label="แก้ไข"
            type="is-primary"
            @click="showUpdateForm(updateCustomer)"
            :disabled="
              !updateCustomer.prefix ||
              !updateCustomer.name ||
              !updateCustomer.surname ||
              !updateCustomer.password
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
  props: ['updateCustomer'],

  methods: {
    showUpdateForm(customer) {
      this.$emit('update:customer', customer)
    },
  },
}
</script>
