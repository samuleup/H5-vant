<template>
  <van-tabs v-model="active1" class="AppBodyBox">
    <van-tab title="当日" name="1">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03"></div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
    <van-tab title="月度" name="2">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03"></div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
    <van-tab title="季度" name="3">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03"></div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
    <van-tab title="年度" name="3">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03"></div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  data () {
    return {
      active1: '1',
      active2: '1'
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
.a01 {
  height: 378.57px;
  background: url("./01.png") no-repeat center;
  background-size: 100%;
}
.a02 {
  div:nth-of-type(1) {
    float: left;
    width: 50%;
    height: 68.57px;
    background: url("./02-1.png") no-repeat center;
    background-size: 100% 100%;
  }
  div:nth-of-type(2) {
    width: 50%;
    float: right;
    height: 68.57px;
    background: url("./02-2.png") no-repeat center;
    background-size: 100% 100%;
  }
}
.a03 {
  height: 661.57px;
  background: url("./03.png") no-repeat center;
  background-size: 100% 100%;
}
.a04 {
  .div:nth-of-type(1) {
    height: 422.57px;
    background: url("./04.png") no-repeat center;
    background-size: 100% 100%;
  }
  .div:nth-of-type(2) {
    height: 222.57px !important;
    background: url("./04.png") no-repeat center;
    background-size: 100% 200%;
  }
}
</style>