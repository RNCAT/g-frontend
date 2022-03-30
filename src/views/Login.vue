<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>

      <div class="column">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">ระบบจัดการข้อมูลที่พักเตาอิฐเกสท์เฮาส์</p>
          </div>
          <div class="card-content">
            <b-field label="อีเมล">
              <b-input v-model="email" maxlength="30" required></b-input>
            </b-field>

            <b-field label="รหัสผ่าน">
              <b-input v-model="password" type="password" required></b-input>
            </b-field>

            <br />
            <b-field>
              <b-button @click="login" type="is-primary" expanded>เข้าสู่ระบบ</b-button>
            </b-field>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/authorities/login`,
        {
          email: this.email,
          password: this.password,
        },
        {
          withCredentials: true,
        }
      )

      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/authorities/verify`, {
        withCredentials: true,
      })

      await this.$store.dispatch('authority', data)

      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 20%;
}
</style>
