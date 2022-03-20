<template>
  <div>
    <Sidebar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap');
* {
  font-family: 'Kanit', sans-serif;
}
</style>
