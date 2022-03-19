<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <FormUpload />
      </div>
    </div>
  </div>
</template>

<script>
import FormUpload from '@/components/booking/FormUpload.vue'

export default {
  name: 'BookingUpload',
  components: {
    FormUpload,
  },
}
</script>

<style></style>
