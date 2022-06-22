<template>
  <div class="AppBodyBox">
    <Echarts :Data="Data1"></Echarts>
    <!-- 累计业务现金流 -->
    <div class="bottomBox">
      <p class="title">2022累计业务现金流</p>
      <van-cell class="block" value="1158.99" icon="back-top" title="现金流入" />
      <van-cell class="block" value="453.67" icon="back-top" title=" 现金流出" />
      <div style="padding:0 20px">
        <van-cell value="307.12" title="给付支出" />
        <van-cell value="17.12" title="退保金" />
        <van-cell value="57.12" title="手续费和佣金支出" />
        <van-cell value="27.12" title="业务及管理费" />
        <van-cell value="36.72" title="其他支出" />
      </div>
      <van-cell class="block" value="143.67" title="业务现金流" />
    </div>
  </div>
</template>

<script>

import Echarts from 'components/Echarts/index.vue'
export default {
  components: {
    Echarts,
  },
  data () {
    return {
    };
  },
  computed: {
    Data1 () {
      return {
        title: {
          text: '各月业务现金流'
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01', '2022.02', '2022.03', '2022.04', '2022.05']
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        color: '#E2DCEF',
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [124.3, 51.2, -37.5, 43.9, -4.7, -13.8, -1.7, 0.0, 74.3, 96.6, 63.7, 47.4],
            symbolSize: 7,
            itemStyle: {
              normal: {
                color: '#FAB077'
              }
            },
            areaStyle: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'rgba(213,72,120,0.8)'
                },
                {
                  offset: 1,
                  color: 'rgba(213,72,120,0.2)'
                }
              ])
            },
          }
        ]
      }
    }
  },
  watch: {},
  methods: {
  },
}
</script>
<style lang='scss' scoped>
.AppBodyBox {
  padding: 20px 0;
}
.bottomBox {
  padding: 20px;
}
.title {
  padding: 10px 0;
  font-weight: 600;
  font-size: 18px;
}
.amount {
  margin-left: 50%;
  color: rgb(70, 64, 251);
}
.bottomBox /deep/.van-cell {
  padding: 5px 0px;
  color: rgb(155, 155, 155) !important;
}
.block > .van-cell__title {
  font-size: 18px;
  color: #3b4053;
}
.block > .van-cell__value {
  font-size: 16px;
  color: #116dcf;
}
</style>