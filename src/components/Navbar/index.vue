<template>
  <van-nav-bar :title="routerName" fixed>
    <template #left>
      <van-icon @click="onClickLeft" name="arrow-left" size="18" />
    </template>
    <template #right>
      <van-icon @click="onClickRight" name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    };
  },
  computed: {
    routerName: {
      get () {
        return this.$store.state.routerName
      },
      set () { }
    }
  },
  watch: {
  },
  methods: {
    onClickRight () {

    },
    onClickLeft () {
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="scss">
</style>