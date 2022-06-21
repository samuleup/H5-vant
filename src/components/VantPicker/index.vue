<template>
  <div class='AppBodyBox'>
    <van-field readonly clickable name="picker" :value="value" :label="label" :placeholder="placeholder"
      @click="showPicker = true" />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
  </div>
</template>

<script>

export default {
  props: {
    Andlabel: {
      type: String,
      default: "选择器"
    },
    AndList: {
      type: Array,
      default: () => { return ['杭州', '宁波', '温州', '嘉兴', '湖州'] }
    },
    DefauVal: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      value: this.DefauVal,
      label: this.Andlabel,
      columns: this.AndList,
      placeholder: '点击选择' + this.Andlabel,
      showPicker: false,
    };
  },
  watch: {
    label (NewVal) {
      this.label = NewVal
    },
    placeholder () {
      this.placeholder = '点击选择' + this.label
    },
    columns (NewVal) {
      this.columns = NewVal
    },
    value (NewVal) {
      this.value = NewVal
    },
  },
  methods: {
    onConfirm (value) {
      this.value = value;
      this.$emit('onConfirm', value)
      this.showPicker = false;
    },
  },
}
</script>
<style lang='scss' scoped>
</style>