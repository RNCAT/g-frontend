<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Form />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <RoomList />
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/home/Form.vue'
import RoomList from '@/components/home/RoomList.vue'
export default {
  name: 'Home',
  components: {
    Form,
    RoomList,
  },
  data() {
    const min = new Date()
    min.setDate(min.getDate() - 7)
    min.setHours(9)
    min.setMinutes(0)
    min.setSeconds(0)
    const max = new Date()
    max.setDate(max.getDate() + 7)
    max.setHours(18)
    max.setMinutes(0)
    max.setSeconds(0)
    return {
      minDatetime: min,
      maxDatetime: max,
    }
  },
}
</script>

<style></style>
