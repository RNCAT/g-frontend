<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/booking/Form.vue'

export default {
  name: 'Booking',
  components: {
    Form,
  },
}
</script>

<style></style>
