<template>
  <div class='riskBodyBox'>
    <van-image :src="require('./header.jpg')" width="100%"></van-image>
    <!-- 卡片1 -->
    <div class="card">
      <p class="title">大类指标红黄绿分布情况</p>
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="value" :options="option" />
      </van-dropdown-menu>
      <!-- 风险指标类别  表格 -->
      <div class="tableClass" @click="toIndex">
        <Quarter1 v-if="value === 0 || value === 2 || value === 4"/>
        <Quarter2 v-if="value === 1 || value === 3"/>
      </div>
    </div>
    <!--  卡片2 -->
    <div class="card" style="margin: 20px 20px 20px;">
      <p class="title">风险综合评估</p>
      <Echarts :Data="riskAssessment" id="riskAssessment"></Echarts>
    </div>
  </div>
</template>

<script>
import Echarts from 'components/Echarts/index.vue'
import Table from 'components/Table'
import Quarter1 from './components/quarter1.vue'
import Quarter2 from './components/quarter2.vue'

export default {
  components: { Echarts, Table, Quarter1, Quarter2 },
  data () {
    return {
      value: 0,
      option: [
        { text: '2021年第2季度', value: 0 },
        { text: '2021年第1季度', value: 1 },
        { text: '2020年第4季度', value: 2 },
        { text: '2020年第3季度', value: 3 },
        { text: '2020年第2季度', value: 4 }
      ],
      riskAssessment: {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        radar: [
          {
            indicator: [
              { text: '公司整体风险偏好' },
              { text: '洗钱与欺诈风险' },
              { text: '大类资产配置' },
              { text: '运营与合规风险' },
              { text: '保险风险' }
            ],
            center: ['45%', '40%'],
            radius: 80,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            axisName: {
              formatter: '【{value}】',
              color: '#428BD4'
            },
            splitArea: {
              areaStyle: {
                color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(211, 253, 250, 0.8)'
              }
            }
          }
        ],
        series: [
          {
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 4
              }
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: 'Data A'
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: 'Data B',
                areaStyle: {
                  color: 'rgba(255, 228, 52, 0.6)'
                }
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    
  },
  watch: {},
  methods: {
    toIndex () {
      this.$router.push('/test1/riskIndex')
    }
  },
}
</script>
<style lang='scss' scoped>
.riskBodyBox {
  padding: 20px 0;
  background: white;
}
.card {
  padding: 20px 0;
  background: #f0f2f6;
  position: relative;
  margin: -50px 20px 20px;
  border-radius: 10px;
}
.title {
  padding: 10px 0;
  font-weight: 600;
  font-size: 18px;
}
.tableClass {
  width: 320px;
  overflow: hidden;
  padding: 10px;
}
</style>