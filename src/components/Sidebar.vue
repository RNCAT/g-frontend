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
                icon="fa-solid fa-user-tie"
                label="จอง"
                tag="router-link"
                to="/"
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
            <b-menu-item icon="fa-solid fa-address-book" label="รายงาน">
              <b-menu-item
                icon="fas fa-wallet"
                label="รายรับประจำวัน"
                tag="router-link"
                to="/daily-report"
              ></b-menu-item>
              <b-menu-item
                icon="fa-solid fa-users"
                label="การเข้าพักประจำเดือน"
                tag="router-link"
                to="/monthly-report"
              ></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item icon="fa-solid fa-right-from-bracket" label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <b-button @click="open = true">Show</b-button>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
