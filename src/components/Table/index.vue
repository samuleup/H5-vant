<template>
  <div class="vant-tableBox" :style="{ width: screenWidth + 'px' }">

    <div class="vant-table1">
      <table class="table1">
        <tr>
          <th class="th" v-for="(item, index) in FledConfig" :key="index">
            <div class="thBox">
              <span>{{ item.label }}</span>
              <span @click="ClickIcon(index)" ref="ClickIconth" class="iconBox">
                <van-icon name="arrow-up" class="red" />
                <van-icon name="arrow-down" />
              </span>
            </div>
          </th>
        </tr>
        <tr v-for="(item, index) in Data" ref="ClickIcontr" :key="index" class="tr">
          <td class="td" v-for="(context, i) in FledConfig" ref="ClickIcontd" :data="context.prop" :key="i">
            {{ item[context.prop] }}</td>
        </tr>
      </table>
    </div>

    <div class="vant-table2">
      <table cellspacing="0" :style="bgcolor" class="table2">
        <tr>
          <th class="th" v-for="(item, index) in tableConfig" :key="index">
            <div class="thBox">
              <span>{{ item.label }}</span>
              <span @click="ClickIcon(index)" ref="ClickIconth" class="iconBox">
                <van-icon name="arrow-up" class="red" />
                <van-icon name="arrow-down" />
              </span>
            </div>
          </th>
        </tr>
        <tr v-for="(item, index) in Data" ref="ClickIcontr" :key="index" class="list-tr">
          <td class="list-td" v-for="(context, i) in tableConfig" ref="ClickIcontd" :data="context.prop" :key="i">
            {{ item[context.prop] }}</td>
        </tr>
      </table>
    </div>

  </div>
</template>
<script>

export default {
  props: {
    bgcolor: {
      type: Object
    },
    tableData: {
      type: Array,
      default: () => {
        return [
          {
            mum: 2,
            closedAccount: 0,
            givePrice: 0,
            noAccount: 0,
            roomType: "BOSS卡座1",
            totalPrice: 1
          },
          {
            mum: 1,
            closedAccount: 0,
            givePrice: 0,
            noAccount: 0,
            roomType: "BOSS卡座2",
            totalPrice: 2
          },
          {
            mum: 3,
            closedAccount: 0,
            givePrice: 0,
            noAccount: 0,
            roomType: "BOSS卡座3",
            totalPrice: 0
          },
          {
            mum: 4,
            closedAccount: 0,
            givePrice: 0,
            noAccount: 0,
            roomType: "BOSS卡座4",
            totalPrice: 0
          },
          {
            mum: 5,
            closedAccount: 0,
            givePrice: 0,
            noAccount: 0,
            roomType: "BOSS卡座5",
            totalPrice: 1
          },
          {
            mum: 6,
            closedAccount: 0,
            givePrice: 0,
            noAccount: 0,
            roomType: "BOSS卡座6",
            totalPrice: 3
          }
        ]
      },
    },
    tableConfig: {
      type: Array,
      default: () => {
        return [
          {
            label: '机构',
            prop: 'roomType'
          },
          {
            label: '总保费',
            prop: 'closedAccount'
          },
          {
            label: '保费排序',
            prop: 'noAccount'
          },
          {
            label: '同比',
            prop: 'givePrice'
          },
          {
            label: '环比',
            prop: 'totalPrice'
          },
          {
            label: '达成率',
            prop: 'totalPrice'
          }
        ]
      }
    },
    FledConfig: {
      type: Array,
      default: () => {
        return [{
          label: '排名',
          prop: 'mum'
        }]
      }
    },
  },
  data () {
    return {
      screenWidth: null,
      ClickIconShow: false,
      Data: this.tableData.sort(this.ascendingChain("mum"))
    };
  },
  computed: {

  },
  mounted () {
    this.ClickIconShow = false
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  },
  watch: {
    screenWidth: {
      handler: function (val) {
        this.screenWidth = val
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    ClickIcon (index) {
      this.ClickIconShow = !this.ClickIconShow
      let data = null
      if (!this.ClickIconShow) {
        data = this.Data.sort(this.ascendingChain(this.$refs.ClickIcontd[index].getAttribute('data')))
      } else {
        data = this.Data.sort(this.descendingChain(this.$refs.ClickIcontd[index].getAttribute('data')))
      }
      this.Data = data
      this.$refs.ClickIconth[index].childNodes.forEach(e => {
        Object.keys(e.classList).forEach(ele => {
          if ((e.classList[ele] == 'red')) {
            e.classList.remove('red')
          } else {
            e.classList.add('red')
          }
        })
      })
    },
    // 升序
    ascendingChain (property) {
      return function (obj1, obj2) {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1 < value2 ? -1 : value1 > value2 ? 1 : 0
      }
    },
    // 降序
    descendingChain (property) {
      return function (obj1, obj2) {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1 < value2 ? 1 : value1 > value2 ? -1 : 0
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.vant-tableBox {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  .vant-table1 {
    .table1 {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      .th {
        background-color: #a0a0a0;
        text-align: center;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        height: 32px;
        line-height: 32px;
      }
      .tr {
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        height: 20px;
        line-height: 20px;
        .td {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
        }
      }
    }
  }
  .vant-table2 {
    flex: 1;
    overflow: auto;
    box-sizing: border-box;
    .table2 {
      width: 600px;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      .th {
        background-color: #a0a0a0;
        text-align: center;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        .thBox {
          width: 100%;
          display: flex;
          span:nth-of-type(1) {
            flex: 1;
            display: inline-block;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            font-weight: 600;
          }
          span:nth-of-type(2) {
            width: 14px;
            padding: 0 6px;
            i {
              font-weight: 600;
              font-size: 0.12px;
            }
          }
        }
      }
      .list-tr {
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        .list-td {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
        }
      }
    }
  }
}
.red {
  color: red;
}
</style>