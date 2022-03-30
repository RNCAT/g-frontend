<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="true"
      :overlay="false"
      mobile="reduce"
      expand-on-hover
      :open="true"
    >
      <div class="p-1">
        <img
          src="http://placekitten.com/250/150"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="fa-solid fa-calendar" label="การจอง">
              <b-menu-item
                icon="fas fa-calendar-check"
                label="จอง"
                tag="router-link"
                to="/"
              ></b-menu-item>
              <b-menu-item
                icon="fas fa-list"
                label="รายการจอง"
                tag="router-link"
                to="/booking-manage"
              ></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="fa fa-cog" label="จัดการข้อมูล">
              <b-menu-item
                icon="fa-solid fa-user-tie"
                label="เจ้าหน้าที่"
                tag="router-link"
                to="/authorities"
              ></b-menu-item>
              <b-menu-item
                icon="fa-solid fa-user"
                label="ลูกค้า"
                tag="router-link"
                to="/customers"
              ></b-menu-item>
              <b-menu-item
                icon="fas fa-bed"
                label="ห้องพัก"
                tag="router-link"
                to="/rooms"
              ></b-menu-item>
              <b-menu-item
                icon="fa-solid fa-hotel"
                label="ประเภทห้องพัก"
                tag="router-link"
                to="/room-types"
              >
              </b-menu-item>
            </b-menu-item>
            <b-menu-item
              icon="fa-solid fa-address-book"
              tag="router-link"
              to="/report"
              label="รายงาน"
            >
            </b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item icon="fas fa-door-closed" label="Logout" @click="logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <b-button @click="open = true">Show</b-button>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sidebar',
  methods: {
    async logout() {
      await axios.post(`${import.meta.env.VITE_API_URL}/authorities/logout`, null, {
        withCredentials: true,
      })

      await this.$store.dispatch('authority', null)

      this.$router.push('/login')
    },
  },
}
</script>
