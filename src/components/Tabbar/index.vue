<template>
	<van-tabbar v-model="active" fixed :placeholder="true" :safe-area-inset-bottom="true">
		<van-tabbar-item icon="home-o" @click="Router('test1')">演示</van-tabbar-item>
		<van-tabbar-item icon="search" @click="Router('test2')">未定义</van-tabbar-item>
		<van-tabbar-item icon="friends-o" @click="Router('test3')">未定义</van-tabbar-item>
		<van-tabbar-item icon="setting-o" @click="Router('test4')">未定义</van-tabbar-item>
	</van-tabbar>
</template>

<script>
export default {
	components: {},
	data () {
		return {
			active: 0
		};
	},
	computed: {},
	watch: {},
	methods: {
		Router (data) {
			this.$router.push('/' + data)
		}
	},
}
</script>
<style lang="scss">
</style>