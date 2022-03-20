<template>
  <div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/authority/Table.vue'

export default {
  name: 'DailyReport',
  components: {
    Table,
  },
}
</script>

<style></style>
