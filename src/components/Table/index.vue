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
            <span v-if="context.prop=='roomType'" style="color:cornflowerblue">{{ item[context.prop] }}</span>
            <span v-else>{{ item[context.prop] }}</span>
          </td>
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
            mum: 1,
            closedAccount: 1,
            givePrice: 1,
            noAccount: 1,
            roomType: "BOSS1",
            totalPrice: 1
          },
          {
            mum: 2,
            closedAccount: 2,
            givePrice: 2,
            noAccount: 2,
            roomType: "BOSS2",
            totalPrice: 2
          },
          {
            mum: 3,
            closedAccount: 3,
            givePrice: 3,
            noAccount: 3,
            roomType: "BOSS3",
            totalPrice: 3,
          },
          {
            mum: 4,
            closedAccount: 4,
            givePrice: 4,
            noAccount: 4,
            roomType: "BOSS4",
            totalPrice: 4
          },
          {
            mum: 5,
            closedAccount: 5,
            givePrice: 5,
            noAccount: 5,
            roomType: "BOSS5",
            totalPrice: 5
          },
          {
            mum: 6,
            closedAccount: 6,
            givePrice: 6,
            noAccount: 6,
            roomType: "BOSS6",
            totalPrice: 6
          },
          {
            mum: 7,
            closedAccount: 7,
            givePrice: 7,
            noAccount: 7,
            roomType: "BOSS7",
            totalPrice: 7
          },
          {
            mum: 8,
            closedAccount: 8,
            givePrice: 8,
            noAccount: 8,
            roomType: "BOSS8",
            totalPrice: 8
          },
          {
            mum: 9,
            closedAccount: 9,
            givePrice: 9,
            noAccount: 9,
            roomType: "BOSS9",
            totalPrice: 9
          },
          {
            mum: 10,
            closedAccount: 10,
            givePrice: 10,
            noAccount: 10,
            roomType: "BOSS10",
            totalPrice: 10
          },
          {
            mum: 11,
            closedAccount: 11,
            givePrice: 11,
            noAccount: 11,
            roomType: "BOSS11",
            totalPrice: 11,
          },
          {
            mum: 12,
            closedAccount: 12,
            givePrice: 12,
            noAccount: 12,
            roomType: "BOSS12",
            totalPrice: 12,
          },
          {
            mum: 13,
            closedAccount: 13,
            givePrice: 13,
            noAccount: 13,
            roomType: "BOSS13",
            totalPrice: 13,
          },
          {
            mum: 14,
            closedAccount: 14,
            givePrice: 14,
            noAccount: 14,
            roomType: "BOSS14",
            totalPrice: 14,
          },
          {
            mum: 15,
            closedAccount: 15,
            givePrice: 15,
            noAccount: 15,
            roomType: "BOSS15",
            totalPrice: 15,
          },
          {
            mum: 16,
            closedAccount: 16,
            givePrice: 16,
            noAccount: 16,
            roomType: "BOSS16",
            totalPrice: 16,
          },
          {
            mum: 17,
            closedAccount: 17,
            givePrice: 17,
            noAccount: 17,
            roomType: "BOSS17",
            totalPrice: 17,
          },
          {
            mum: 18,
            closedAccount: 18,
            givePrice: 18,
            noAccount: 18,
            roomType: "BOSS18",
            totalPrice: 18,
          },
          {
            mum: 19,
            closedAccount: 19,
            givePrice: 19,
            noAccount: 19,
            roomType: "BOSS19",
            totalPrice: 19,
          },
          {
            mum: 20,
            closedAccount: 20,
            givePrice: 20,
            noAccount: 20,
            roomType: "BOSS20",
            totalPrice: 20,
          },
          {
            mum: 21,
            closedAccount: 21,
            givePrice: 21,
            noAccount: 21,
            roomType: "BOSS21",
            totalPrice: 21,
          },
          {
            mum: 22,
            closedAccount: 22,
            givePrice: 22,
            noAccount: 22,
            roomType: "BOSS22",
            totalPrice: 22,
          },
          {
            mum: 23,
            closedAccount: 23,
            givePrice: 23,
            noAccount: 23,
            roomType: "BOSS23",
            totalPrice: 23,
          },
          {
            mum: 24,
            closedAccount: 24,
            givePrice: 24,
            noAccount: 24,
            roomType: "BOSS24",
            totalPrice: 24,
          },
          {
            mum: 25,
            closedAccount: 25,
            givePrice: 25,
            noAccount: 25,
            roomType: "BOSS25",
            totalPrice: 25,
          },
          {
            mum: 26,
            closedAccount: 26,
            givePrice: 26,
            noAccount: 26,
            roomType: "BOSS26",
            totalPrice: 26,
          },
          {
            mum: 27,
            closedAccount: 27,
            givePrice: 27,
            noAccount: 27,
            roomType: "BOSS27",
            totalPrice: 27,
          },
          {
            mum: 28,
            closedAccount: 28,
            givePrice: 28,
            noAccount: 28,
            roomType: "BOSS28",
            totalPrice: 28,
          },
          {
            mum: 29,
            closedAccount: 29,
            givePrice: 29,
            noAccount: 29,
            roomType: "BOSS29",
            totalPrice: 29,
          },
          {
            mum: 30,
            closedAccount: 0,
            givePrice: 0,
            noAccount: 0,
            roomType: "BOSS30",
            totalPrice: 3
          },
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
  font-size: 14px;
  font-weight: 600;
  .vant-table1 {
    .table1 {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      .th {
        background-color: #e1f0ff;
        text-align: center;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        height: 32px;
        .thBox {
          width: 100%;
          display: flex;
          span:nth-of-type(1) {
            flex: 1;
            display: inline-block;
            line-height: 32px;
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
      .tr {
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        height: 30px;
        line-height: 30px;
        .td {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
        }
      }
      .tr:nth-child(2n) {
        background: #f3f4f8;
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
        background-color: #e1f0ff;
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
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        .list-td {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
        }
      }
      .list-tr:nth-child(2n) {
        background: #f3f4f8;
      }
    }
  }
}
.red {
  color: red;
}
</style>