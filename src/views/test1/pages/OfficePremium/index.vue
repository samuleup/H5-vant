<template>
  <div class="AppBodyBox">
    <p class="fontText">保费类别</p>
    <van-tabs v-model="active">
      <van-tab title="总保费" name="0">
        <dime :DimeConfig="DimeConfig1"></dime>
      </van-tab>
      <van-tab title="新单保费" name="1">
        <dime :DimeConfig="DimeConfig2"></dime>
      </van-tab>
      <van-tab title="续期保费" name="2">
        <dime :DimeConfig="DimeConfig3"></dime>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import dime from './components/dime'
export default {
  components: {
    dime
  },
  data () {
    return {
      active: '0',
    };
  },
  computed: {

    DimeConfig1 () {
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
    },
    DimeConfig2 () {
      return [
        {
          label: '机构',
          prop: 'roomType'
        },
        {
          label: '新单保费',
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
    },
    DimeConfig3 () {
      return [
        {
          label: '机构',
          prop: 'roomType'
        },
        {
          label: '续期保费',
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
  watch: {},
  methods: {
  },
}
</script>
<style lang='scss' scoped>
.AppBodyBox /deep/ .van-tabs__content {
  width: 100%;
  height: 94%;
}

.AppBodyBox /deep/ .van-tab__pane {
  width: 100%;
  height: 100%;
}
.dimen {
  display: flex;
  flex-wrap: wrap;
}
</style>