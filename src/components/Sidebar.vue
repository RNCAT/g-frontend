<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :overlay="overlay"
      :mobile="mobile"
      expand-on-hover
      v-model="open"
    >
      <div class="p-1">
        <img
          src="http://placekitten.com/250/150"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="fa-solid fa-calendar" label="การจอง"></b-menu-item>
            <b-menu-item icon="fa-solid fa-gear" label="จัดการข้อมูล">
              <b-menu-item icon="fa-solid fa-user-tie" label="เจ้าหน้าที่"></b-menu-item>
              <b-menu-item icon="fa-solid fa-user" label="ลูกค้า"></b-menu-item>
              <b-menu-item icon="fa-solid fa-house" label="ห้องพัก"></b-menu-item>
              <b-menu-item icon="fa-solid fa-hotel" label="ประเภทห้องพัก"></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="fa-solid fa-address-book" label="รายงาน">
              <b-menu-item icon="fa-solid fa-sack-dollar" label="รายรับประจำวัน"></b-menu-item>
              <b-menu-item icon="fa-solid fa-users" label="การเข้าพักประจำเดือน"></b-menu-item>
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
  data() {
    return {
      open: true,
      overlay: false,
      fullheight: true,
      mobile: 'reduce',
    }
  },
}
</script>
