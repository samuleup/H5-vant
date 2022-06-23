<template>
  <div class='AppBodyBox'>
    <div class="a01"></div>
    <Echarts :Data="dataOptions" id="totalAssets"></Echarts>
  </div>
</template>

<script>
import Echarts from 'components/Echarts/index.vue'
export default {
  components: { Echarts },
  data () {
    return {
      dataOptions: {
        title: [
          {
            text: '实时增长率'
          },
          {
            text: '单位：亿元',
            left: '80%',
            textStyle: {
              fontSize: 13,
              color: '#A9A9A9'
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['总保费', '新单保费', '赔付保费', '上市公司同业对标', '银保公司同业对标'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              formatter: function (v) { return v.split('').join('\n') }
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [200, 334, 90, 330, 220],
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {  // 使用方法二的写法
              color: {
                type: 'linear',
                x: 0,  //右
                y: 0,  //下
                x2: 0,  //左
                y2: 1,  //上
                colorStops: [
                  {
                    offset: 0,
                    color: 'pink' // 0% 处的颜色
                  },
                  {
                    offset: 0.7,
                    color: '#2378f7' // 70% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#83bff6' // 100% 处的颜色
                  }
                ]
              }
            }
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
}
</script>
<style lang='scss' scoped>
.AppBodyBox {
  padding: 10px 20px;
  box-sizing: border-box;
}
.a01 {
  width: 100%;
  height: 400px;
  background: url("./01.png");
}
</style>