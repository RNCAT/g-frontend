<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <DailyReport />
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths"></div>
    </div>
  </div>
</template>

<script>
import DailyReport from '@/components/report/DailyReport.vue'

export default {
  name: 'Report',
  components: {
    DailyReport,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
