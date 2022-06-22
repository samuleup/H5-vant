<template>
  <div :id="id" :style="{ width: screenWidth + 'px', height: Height + 'px' }">
  </div>
</template>

<script>
export default {
  props: {
    Data: {
      type: Object,
    },
    Height: {
      type: Number,
      default: 392
    },
    id: {
      type: String,
      default: 'echarts'
    }
  },
  data () {
    return {
      screenWidth: null,
    };
  },
  mounted () {
    this.aa()
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
    aa () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(this.id));
      // 绘制图表
      myChart.setOption(this.Data);
    }
  },
}
</script>
<style lang='scss' scoped>
#echarts {
  padding: 0 20px;
  box-sizing: border-box;
}
</style>