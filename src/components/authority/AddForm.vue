<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">เพิ่มข้อมูลเจ้าหน้าที่</p>
    </div>
    <div class="card-content">
      <br />
      <b-field horizontal label="คำนำหน้า">
        <b-select v-model="authority.prefix" placeholder="คำนำหน้า" required>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
          <option value="นาย">นาย</option>
        </b-select>
      </b-field>

      <b-field horizontal label="ชื่อ">
        <b-input v-model="authority.name" required></b-input>
      </b-field>

      <b-field horizontal label="นามสกุล">
        <b-input v-model="authority.surname" required></b-input>
      </b-field>

      <b-field horizontal label="อีเมล">
        <b-input v-model="authority.email" required></b-input>
      </b-field>

      <b-field horizontal label="รหัสผ่าน">
        <b-input v-model="authority.password" required></b-input>
      </b-field>

      <b-field horizontal>
        <p class="control">
          <b-button
            label="เพิ่ม"
            type="is-primary"
            @click="addAuthority"
            :disabled="!authority.prefix || !authority.name || !authority.surname"
          />
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data() {
    return {
      authority: {
        prefix: null,
        name: null,
        surname: null,
        email: null,
        password: null,
      },
    }
  },

  methods: {
    addAuthority() {
      this.$emit('add:authority', this.authority)
    },
  },
}
</script>
