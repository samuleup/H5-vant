<template>
  <div class='AppBodyBox'>
    <van-picker title="标题" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onConfirm (value, index) {
      this.$Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange (picker, value, index) {
      this.$Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel () {
      this.$Toast('取消');
    },
  },
}
</script>
<style lang='scss' scoped>
</style>