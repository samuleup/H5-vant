<template>
  <div>
    <p class="fontText">维度选择</p>
    <div class="dimen">
      <van-field readonly clickable name="datetimePicker" :value="value" label="时间选择" placeholder="点击选择时间"
        @click="showPicker = true" />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker type="year-month" title="选择年月" @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>

      <VantPicker Andlabel="机构维度" DefauVal="全部机构" :AndList="['全部机构','南部','中部','西部','东部','其他']"></VantPicker>
      <VantPicker Andlabel="缴费期维度" DefauVal="10年以上" :AndList="['2-3年交','3-5年交','5-10年交','10年以上','其他']"></VantPicker>
      <VantPicker Andlabel="险种类型维度" DefauVal="其他" :AndList="['寿险','财险','其他']"></VantPicker>
      <VantPicker Andlabel="所属渠道维度" DefauVal="北京海淀一" :AndList="['北京朝阳一','北京东城一','北京海淀一','其他']"></VantPicker>
    </div>
    <van-tabs v-model="active">
      <van-tab title="当日" name="0">
        <Day></Day>
      </van-tab>
      <van-tab title="月度" name="1">
        <monthly></monthly>
      </van-tab>
      <van-tab title="季度" name="2">
        <quarter></quarter>
      </van-tab>
      <van-tab title="年度" name="3">
        <annual></annual>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

import Day from './Day'
import monthly from './monthly'
import quarter from './quarter'
import annual from './annual'
import VantPicker from 'components/VantPicker'
export default {
  components: { Day, monthly, quarter, annual, VantPicker },
  data () {
    return {

      active: '0',
      currentDate: new Date(),
      showPicker: false,
    };
  },
  computed: {
    value () {
      var times = this.dateFormat(this.currentDate)
      return times
    },
  },
  methods: {

    onConfirm (time) {
      this.currentDate = time;
      this.showPicker = false;
    },
    dateFormat (dateData) {
      var date = new Date(dateData)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      const time = y + '-' + m
      return time
    }
  },
}
</script>
<style lang='scss' scoped>
</style>