<template>
  <div class='AppBodyBox'>
    <van-tabs v-model="active">
      <van-tab title="13月累计继续率">内容 1</van-tab>
      <van-tab title="25月累计继续率">内容 2</van-tab>
      <van-tab title="理赔获赔率">内容 3</van-tab>
      <van-tab title="投诉总量">内容 4</van-tab>
      <van-tab title="保全时效">内容 4</van-tab>
      <van-tab title="出险支付时效">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
  },
}
</script>
<style lang='scss' scoped>
.BtnBox {
  padding: 10px;
  background: #fff;
}
</style>