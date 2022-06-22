<template>
  <div :style="{ width: screenWidth + 'px' }" class="swipeBox">
    <van-swipe class="my-swipe" :width="screenWidth" :autoplay="3000" :show-indicators="false">
      <van-swipe-item @click="ClickSwiper('/test1/OfficePremium')">总保费</van-swipe-item>
      <van-swipe-item @click="ClickSwiper('/test1/OfficePremium')">总保费</van-swipe-item>
      <van-swipe-item @click="ClickSwiper('/test1/OfficePremium')">总保费</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      screenWidth: null,
    };
  },
  mounted () {
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  watch: {
    screenWidth: {
      handler: function (val) {
        this.screenWidth = val
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    ClickSwiper (path) {
      this.$router.push(path)
    }
  },
}
</script>
<style lang='scss' scoped>
.swipeBox {
  padding: 0 4px;
  box-sizing: border-box;
}

.my-swipe {
  line-height: 200px;
}

.my-swipe /deep/ .van-swipe-item {
  display: inline-block;
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  background-color: #288b4a;
}
.van-swipe-item:nth-of-type(1) {
  background: url("../../../../assets/banner1.jpg") no-repeat center;
  background-size: 100% 100%;
}
.van-swipe-item:nth-of-type(2) {
  background: url("../../../../assets/banner2.jpg") no-repeat center;
  background-size: 100% 100%;
}
.van-swipe-item:nth-of-type(3) {
  background: url("../../../../assets/banner3.jpg") no-repeat center;
  background-size: 100% 100%;
}
</style>