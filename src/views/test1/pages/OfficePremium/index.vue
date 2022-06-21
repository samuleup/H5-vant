<template>
  <div class="AppBodyBox">
    <p class="fontText">保费类别</p>
    <van-tabs v-model="active">
      <van-tab title="当日" name="0">
        <dime></dime>
      </van-tab>
      <van-tab title="月度" name="1">
      </van-tab>
      <van-tab title="季度" name="2">
      </van-tab>
      <van-tab title="年度" name="3">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import dime from './components/dime'
export default {
  components: {
    dime
  },
  data () {
    return {
      active: '0',
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
.dimen {
  display: flex;
  flex-wrap: wrap;
}
</style>