<template>
  <div class='AppBodyBox'>
    <div style="background-color: #f3f4f8;padding: 10px 20px;box-sizing: border-box;">
      <VantPicker Andlabel="时间维度" DefauVal="2022-01"
        :AndList="['2022-01','2021-01','2019-01','2018-01','2017-01','2016-01']"></VantPicker>
      <VantPicker Andlabel="机构维度" DefauVal="全部" :AndList="['全部机构','南部','中部','西部','东部','其他']"></VantPicker>
      <VantPicker Andlabel="险种维度" DefauVal="" :AndList="['全部机构','南部','中部','西部','东部','其他']"></VantPicker>
      <VantPicker Andlabel="环比同比" DefauVal="环比" :AndList="['环比','同比']"></VantPicker>
      <VantPicker Andlabel="缴费期维度" DefauVal="" :AndList="['全部机构','南部','中部','西部','东部','其他']"></VantPicker>
    </div>
    <van-tabs v-model="active2" type="card" swipeable>
      <van-tab title="理赔获赔率">
        <div class="Box">
          <Echarts id="Data2" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
      </van-tab>
      <van-tab title="投诉总量">
        <div class="Box">
          <Echarts id="Data3" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
      </van-tab>
      <van-tab title="保全时效">
        <div class="Box">
          <Echarts id="Data4" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
      </van-tab>
      <van-tab title="出险时效">
        <div class="Box">
          <Echarts id="Data5" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

import Echarts from 'components/Echarts/index.vue'
import VantPicker from 'components/VantPicker'
export default {
  components: { Echarts, VantPicker },
  data () {
    return {

      active2: 0,
    };
  },
  computed: {
    TongbiHuanbi () {
      return {
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        toolbox: {
          show: true,

        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '上升',
            type: 'line',
            data: [100, 200, 300, 400, 500, 600, 900],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '下降',
            type: 'line',
            data: [46, 25, 1, 67, 0, 41, 66],
            markPoint: {
              data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                    },
                    name: '最高点'
                  }
                ]
              ]
            }
          }
        ]
      }
    },
  },
  watch: {},
  methods: {

  },
}
</script>
<style lang='scss' scoped>
.Box {
  padding: 20px 10px 100px 10px;
  background: #fff;
}

.Title {
  height: 40xp;
  line-height: 40px;
  text-align: center;
  font-weight: 800;
}
.FONT {
  height: 40xp;
  line-height: 40px;
  text-align: center;
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
}
</style>