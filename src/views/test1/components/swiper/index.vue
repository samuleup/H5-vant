<template>
  <div :style="{ width: screenWidth + 'px' }" class="swipeBox">
    <van-swipe class="my-swipe" :width="screenWidth" :show-indicators="false">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
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
  background-color: #39a9ed;
}
</style>