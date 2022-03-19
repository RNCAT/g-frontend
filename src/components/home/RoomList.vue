<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <div class="column">
          <Room />
        </div>
        <div class="column">
          <Room />
        </div>
        <div class="column">
          <Room />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Room from '@/components/home/Room.vue'

export default {
  name: 'RoomList',
  components: {
    Room,
  },
}
</script>

<style></style>
