<template>
  <div>
    <!-- 资产汇总 -->
    <Assets />
    <van-tabs v-model="active" class="AppBodyBox">
      <van-tab title="总资产" name="1">
        <TotalAssets></TotalAssets>
      </van-tab>
      <van-tab title="总负债" name="2">
        <TotalLiability></TotalLiability>
      </van-tab>
      <van-tab title="净资产" name="3">
        <NetAssets></NetAssets>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Assets from './components/Assets'
import TotalAssets from './components/TotalAssets'
import TotalLiability from './components/TotalLiability'
import NetAssets from './components/NetAssets'
export default {
  components: { TotalAssets, TotalLiability, NetAssets, Assets },
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
  height: 94%;
}

.AppBodyBox /deep/ .van-tab__pane {
  width: 100%;
  height: 100%;
}
</style>