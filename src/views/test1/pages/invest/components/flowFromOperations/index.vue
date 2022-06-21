<template>
  <div class="AppBodyBox">
    <Echarts :Data="Data1"></Echarts>
  </div>
</template>

<script>

import Echarts from 'components/Echarts/index.vue'
export default {
  components: {
    Echarts
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
            formatter: '{value}'
          }
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [124.3, 51.2, -37.5, 43.9, -4.7, -13.8, -1.7, 0.0, 74.3, 96.6, 63.7, 47.4],
            symbolSize: 7,
            itemStyle: {
              normal: {
                color: '#FAB077',
                lineStyle: {
                  color: '#E2DCEF'
                },
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
</style>