<template>
  <div class="AppBodyBox">
    <p class="Title">
      <span> 2022 1-4月</span>
      <span> 2021 1-4月</span>
    </p>
    <ul>
      <li class="item" v-for="(item, index) in List" :key="index">
        <div class="itemBox left">
          <p v-if="item.leftKey < 30" class="BoxInem1 BoxInem">
            <span> {{ item.leftKey }}%</span>
            <span class="Inem1 bg1" :style="{ width: `${item.leftKey}%` }"> </span>
          </p>
          <p class="BoxInem1 BoxInem" v-else>
            <span class=" Inem2  bg1" :style="{ width: `${item.leftKey}%` }">
              {{ item.leftKey }}%
            </span>
          </p>
        </div>
        <div class="itemBox content">{{ item.Title }}</div>
        <div class="itemBox right">
          <p v-if="item.rightKey < 30" class="BoxInem2 BoxInem">
            <span class="Inem1 bg2" :style="{ width: `${item.rightKey}%` }"> </span>
            <span> {{ item.rightKey }}%</span>
          </p>
          <p class="BoxInem2 BoxInem" v-else>
            <span class="Inem2  bg2" :style="{ width: `${item.rightKey}%` }">
              {{ item.rightKey }}%
            </span>
          </p>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      List: [
        {
          Title: "直属营销标保费用率",
          leftKey: "10",
          rightKey: "79.67",
        }, {
          Title: "银保特定规模产品费用率",
          leftKey: "80.5",
          rightKey: "19.67",
        }, {
          Title: "银保标保费用率",
          leftKey: "80",
          rightKey: "29.67",
        }, {
          Title: "中介营销标保费用率",
          leftKey: "90",
          rightKey: "49.67",
        }, {
          Title: "战略价值短险赔付率",
          leftKey: "10.0",
          rightKey: "19.67",
        }, {
          Title: "战略价值短险回报率",
          leftKey: "10.20",
          rightKey: "93.67",
        }, {
          Title: "战略价值短险保值率",
          leftKey: "99.0",
          rightKey: "91.67",
        }
      ]
    };
  },
  mounted () {
  },
  methods: {
  },
}
</script>
<style lang='scss' scoped>
.AppBodyBox {
  padding: 20px 0;
  background: #FFFFFF;
}

.Title {
  font-size: 14px;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
  background: #FFFFFF;
}

.item {
  padding: 0 20px;
  display: flex;
  margin: 10px 0;
}

.left,
.right {
  width: 30%;
  height: 48px;
  padding-top: 13px !important;
  background: repeating-linear-gradient(90deg, #F6F6F6 7%, #FFFFFF 8%, #F6F6F6 10%);
}

.content {
  text-align: center;
  font-size: 14px;
  flex: 1;
}

.itemBox {
  padding: 6px;
  box-sizing: border-box;
  width: 30%;
  display: inline-block;
  font-size: 14px;

  .BoxInem {
    display: flex;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .BoxInem1 {
    justify-content: flex-end;
  }

  .BoxInem2 {
    justify-content: left;
  }

  .bg1 {
    background: linear-gradient(to right, #c1abde, #95b1ec);
  }

  .bg2 {
    background: linear-gradient(to right, #f9adaa, #ded6f3);
  }


  .Inem1 {
    color: #000000;
  }

  .Inem2 {
    color: #FFFFFF;
  }
}
</style>