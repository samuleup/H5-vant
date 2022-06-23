<template>
  <van-tabs v-model="active1" class="AppBodyBox">
    <van-tab title="当日" name="1">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03">
        <ChinaEcharts />
        <div class="ulBox">
          <ul class="and" style="z-index:999;background: rgb(247 247 247);">
            <p style="height: 12px; "> </p>
            <li v-for="index in 5" :key="index">
              <p style="height: 16px; line-height: 16px;">{{index}}</p>
            </li>
          </ul>
          <ul style="background: rgb(247 247 247);">
            <p style="color:rgb(150 159 154) ;">总保费前五名</p>
            <li v-for="(item,index) in List1" :key="index">
              <p>{{item.label}}</p>
              <p>{{item.value}}</p>
            </li>
          </ul>
          <ul style="background: rgb(239 239 239);">
            <p style="color:rgb(150 159 154) ;">总保费后五名</p>
            <li v-for="(item,index) in List2" :key="index">
              <p>{{item.label}}</p>
              <p>{{item.value}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
    <van-tab title="月度" name="2">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03"></div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
    <van-tab title="季度" name="3">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03"></div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
    <van-tab title="年度" name="3">
      <div class="a01" @click="$router.push('/timePremium1?code=1')"></div>
      <div class="a02">
        <div @click="$router.push('/timePremium1?code=2')"></div>
        <div @click="$router.push('/timePremium1?code=2')"></div>
      </div>
      <div class="a03"></div>
      <div class="a04">
        <van-tabs v-model="active2">
          <van-tab title="渠道">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="子公司">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
          <van-tab title="整体">
            <div class="div" @click="$router.push('/timePremium1?code=3')"></div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
import ChinaEcharts from '../../../../components/ChinaEcharts/index.vue';
export default {
    data() {
        return {
            active1: "1",
            active2: "1",
            List1: [
                {
                    label: "江苏",
                    value: "1203",
                },
                {
                    label: "山东",
                    value: "789",
                },
                {
                    label: "四川",
                    value: "399",
                },
                {
                    label: "陕西",
                    value: "367",
                },
                {
                    label: "天津",
                    value: "253",
                }
            ],
            List2: [
                {
                    label: "青岛",
                    value: "64",
                },
                {
                    label: "苏州",
                    value: "58",
                },
                {
                    label: "北京",
                    value: "46",
                },
                {
                    label: "海南",
                    value: "22",
                },
                {
                    label: "黑龙江",
                    value: "21",
                }
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {},
    components: { ChinaEcharts }
}
</script>
<style lang='scss' scoped>
.and {
  width: 0%;
}
.AppBodyBox /deep/ .van-tabs__content {
  width: 100%;
}

.AppBodyBox /deep/ .van-tab__pane {
  width: 100%;
  height: 100%;
}
.a01 {
  height: 378.57px;
  background: url("./01.png") no-repeat center;
  background-size: 100%;
}
.a02 {
  div:nth-of-type(1) {
    float: left;
    width: 50%;
    height: 68.57px;
    background: url("./02-1.png") no-repeat center;
    background-size: 100% 100%;
  }
  div:nth-of-type(2) {
    width: 50%;
    float: right;
    height: 68.57px;
    background: url("./02-2.png") no-repeat center;
    background-size: 100% 100%;
  }
}
.a03 {
  height: 661.57px;
}
.a04 {
  .div:nth-of-type(1) {
    height: 422.57px;
    background: url("./04.png") no-repeat center;
    background-size: 100% 100%;
  }
  .div:nth-of-type(2) {
    height: 222.57px !important;
    background: url("./04.png") no-repeat center;
    background-size: 100% 200%;
  }
}
.ulBox {
  width: 100%;
  font-size: 14px;
  display: flex;
  padding: 10px 4%;
  box-sizing: border-box;
  margin-top: -50px;
}
ul {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  p {
    text-align: center;
    margin-bottom: 10px;
  }
}
li {
  padding: 10px;
  p {
    width: 50%;
    display: inline-block;
    text-align: center;
  }
}
</style>