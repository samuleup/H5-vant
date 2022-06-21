<template>
  <div class="AppBodyBox">
    <p class="fontText">维度选择</p>
    <div>

    </div>
    <van-tabs v-model="active" class="AppBodyBox">
      <van-tab title="月度" name="1">
        <monthly></monthly>
      </van-tab>
      <van-tab title="季度" name="2">
        <quarter></quarter>
      </van-tab>
      <van-tab title="年度" name="3">
        <annual></annual>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// VantPicker
import monthly from './components/monthly'
import quarter from './components/quarter'
import annual from './components/annual'
export default {
  components: {
    monthly, quarter, annual
  },
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