<template>
  <div>
    <Sidebar v-if="this.$store.state.authority" />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Sidebar,
  },

  computed: {
    ...mapGetters(['authority']),
  },

  async created() {
    if (!this.$store.state.authority) {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/authorities/verify`, {
          withCredentials: true,
        })

        await this.$store.dispatch('authority', data)

        this.$router.push('/')
      } catch (error) {
        this.$router.push('/login')
      }
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap');
* {
  font-family: 'Kanit', sans-serif;
}
</style>
