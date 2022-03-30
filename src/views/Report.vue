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
      <div class="column is-four-fifths">
        <MonthlyReport />
      </div>
    </div>
  </div>
</template>

<script>
import DailyReport from '@/components/report/DailyReport.vue'
import MonthlyReport from '@/components/report/MonthlyReport.vue'

export default {
  name: 'Report',
  components: {
    DailyReport,
    MonthlyReport,
  },
}
</script>
