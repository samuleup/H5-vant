<template>
  <div :id="id" :style="{ width: 100 + '%', height: Height + 'px' }" class="echarts">
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
    };
  },
  mounted () {
    this.aa()
  },
  watch: {
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
.echarts {
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>