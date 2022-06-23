<template>
  <div class='AppBodyBox'>
    <van-tabs v-model="active">
      <van-tab title="累计继续率">
        <div class="Box">
          <p class="Title">13月累计继续率</p>
          <Echarts :Data="Data1"></Echarts>
          <div class="FONT" @click="And">查看分公司排名</div>
        </div>
        <div class="Box">
          <p class="Title">25月累计继续率</p>
          <Echarts id="Data1" :Data="Data1"></Echarts>
          <div class="FONT" @click="And">查看分公司排名</div>
        </div>
      </van-tab>
      <van-tab title="其他">
        <div class="Box">
          <p class="Title">理赔获赔率</p>
          <Echarts id="Data2" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
        <div class="Box">
          <p class="Title">投诉总量</p>
          <Echarts id="Data3" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
        <div class="Box">
          <p class="Title">保全时效</p>
          <Echarts id="Data4" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
        <div class="Box">
          <p class="Title">出险支付时效</p>
          <Echarts id="Data5" :Data="TongbiHuanbi"></Echarts>
          <div class="FONT">查看分公司排名</div>
        </div>
      </van-tab>

    </van-tabs>
    <van-popup v-model="showPicker" position="bottom">
      <div class="Progress" v-for="(item,index) in Data" :key="index">
        <p class="p1">{{item.mum}}</p>
        <p class="p2">{{item.label}}</p>
        <p>
          <span :style="{width: item.value+'%'}" class="p3">{{item.value}}%</span>
        </p>
      </div>
    </van-popup>
  </div>
</template>

<script>

import Echarts from 'components/Echarts/index.vue'
export default {
  components: { Echarts },
  data () {
    return {
      active: 0,
      showPicker: false
    };
  },
  computed: {
    Data1 () {
      return {
        series: [
          {
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.3, '#67e0e3'],
                  [0.7, '#37a2da'],
                  [1, '#fd666d']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisLabel: {
              color: 'auto',
              distance: 40,
              fontSize: 20
            },
            detail: {
              valueAnimation: true,
              formatter: '{value} %',
              color: 'auto'
            },
            data: [
              {
                value: 70
              }
            ]
          }
        ]
      }
    },
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        },
        series: [
          {
            name: 'Highest',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
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
            name: 'Lowest',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
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
                    yAxis: 'max'
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                      formatter: 'Max'
                    },
                    type: 'max',
                    name: '最高点'
                  }
                ]
              ]
            }
          }
        ]
      }
    },
    Data () {
      return [
        { label: "山东", value: 90, mum: 1 },
        { label: "山东", value: 80, mum: 2 },
        { label: "山东", value: 70, mum: 3 },
        { label: "山东", value: 60, mum: 4 },
        { label: "山东", value: 50, mum: 5 },
        { label: "山东", value: 40, mum: 6 },
        { label: "山东", value: 33, mum: 7 },
      ]
    }
  },
  watch: {},
  methods: {
    And () {
      this.showPicker = true
    }
  },
}
</script>
<style lang='scss' scoped>
.Box {
  padding: 100px 10px;
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
.Progress {
  padding: 4px;
  p {
    padding: 10px 0;
    box-sizing: border-box;
    width: 82%;
    display: inline-block;
    font-size: 14px;
  }
  .p1 {
    width: 8%;
  }
  .p2 {
    width: 10%;
  }
  .p3 {
    display: inline-block;
    color: #fff;
    border-radius: 10px;
    background: linear-gradient(to right, #c1abde, #95b1ec);
    text-indent: 10px;
  }
}
</style>