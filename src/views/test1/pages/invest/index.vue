<template>
  <van-tabs v-model="active" class="AppBodyBox">
    <van-tab title="投产比" name="1">
      <ProductionThan></ProductionThan>
    </van-tab>
    <van-tab title="业务现金流" name="2">
      <flowFromOperations></flowFromOperations>
    </van-tab>
    <van-tab title="投资" name="3">
      <investor></investor>
    </van-tab>
  </van-tabs>
</template>

<script>
import ProductionThan from './components/ProductionThan'
import flowFromOperations from './components/flowFromOperations'
import investor from './components/investor'
export default {
  components: { ProductionThan, flowFromOperations, investor },
  data () {
    return {
      active: '1'
    };
  },
  computed: {
  },
  watch: {},
  methods: {

  },
}
</script>
<style lang='scss' scoped>
.AppBodyBox /deep/ .van-tabs__content {
  width: 100%;
}

.AppBodyBox /deep/ .van-tab__pane {
  width: 100%;
  height: 100%;
}
</style>