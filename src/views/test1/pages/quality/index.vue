<template>
  <div class='AppBodyBox'>
    <van-tabs v-model="active1">
      <van-tab title="累计继续率">
        <div class="Box">
          <p class="Title">13月累计继续率</p>
          <div class="zhibiao">
            <p>
              <span></span>指标1
            </p>
            <p>
              <span></span>指标2
            </p>
            <p>
              <span></span>指标3
            </p>
          </div>
          <Echarts :Data="Data1"></Echarts>
          <div class="FONT" @click="And">查看分公司排名</div>
        </div>
        <div class="Box">
          <p class="Title">25月累计继续率</p>
          <div class="zhibiao">
            <p>
              <span></span>指标1
            </p>
            <p>
              <span></span>指标2
            </p>
            <p>
              <span></span>指标3
            </p>
          </div>
          <Echarts id="Data1" :Data="Data1"></Echarts>
          <div class="FONT" @click="And">查看分公司排名</div>
        </div>
      </van-tab>
      <van-tab title="其他">
        <div style="padding-top:40px">
          <h2 style="padding:20px;text-align: center; font-weight: 600;">综合</h2>
          <van-grid :column-num="3">
            <van-grid-item v-for="(item,index) in List" :key="index" @click="$router.push('/defa')">
              <p class="t1">{{item.value}}</p>
              <p class="t1">{{item.label}}</p>
            </van-grid-item>
          </van-grid>
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
      active1: 0,
      showPicker: false,
      List: [
        { label: '保全失效', value: "1.31" },
        { label: '出险支付时效', value: "1.30" },
        { label: '申请支付时效', value: "1.33" },
        { label: '投诉办结及时率', value: "1.50" },
        { label: '核保函件回销', value: "1.10" },
        { label: '呼入工单', value: "1.60" },
        { label: '个人医疗结案率', value: "1.11" },
        { label: '报案受理', value: "1.341" },
        { label: '投诉工单办结', value: "1.350" },
        { label: '呼出工单', value: "1.36" }
      ]
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
.t1:nth-of-type(1) {
  font-size: 16px;
  text-align: center;
  color: #fd666d;
  padding-bottom: 10px;
}
.t1:nth-of-type(2) {
  font-size: 14px;
  color: #000000;
  text-align: center;
}
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
.zhibiao {
  padding: 10px 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    span {
      display: inline-block;
      margin-right: 6px;
      width: 8px;
      height: 8px;
    }
  }

  p:nth-of-type(1) {
    span {
      background: #67e0e3;
    }
  }
  p:nth-of-type(2) {
    span {
      background: #37a2da;
    }
  }
  p:nth-of-type(3) {
    span {
      background: #fd666d;
    }
  }
}
</style>