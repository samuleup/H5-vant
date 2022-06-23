<template>
  <div class='AppBodyBox'>
    <div v-if="code==1" class="a1"></div>
    <div v-if="code==2" class="a2"></div>
    <div v-if="code==3" class="a3"></div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      code: ""
    };
  },
  created () {
    this.code = this.$router.currentRoute.query.code
  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>
.a1 {
  height: 960px;
  background: url("./01.png") no-repeat center;
  background-size: 100%;
}
.a2 {
  height: 700px;
  background: url("./02.png") no-repeat center;
  background-size: 100%;
}
.a3 {
  height: 700px;
  background: url("./03.png") no-repeat center;
  background-size: 100%;
}
</style>