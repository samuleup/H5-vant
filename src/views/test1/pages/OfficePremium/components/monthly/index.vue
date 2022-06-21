<template>
  <div>
    <Table :tableConfig="DimeConfig"></Table>
  </div>
</template>

<script>
import Table from 'components/Table'
export default {
  props: {
    DimeConfig: {
      type: Array
    }
  },
  components: { Table },
  computed: {

  },
  watch: {},
  methods: {

  },
}
</script>
<style lang='scss' scoped>
</style>