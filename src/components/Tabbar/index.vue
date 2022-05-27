<template>
	<van-tabbar v-model="active" fixed :placeholder="true" :safe-area-inset-bottom="true">
		<van-tabbar-item icon="home-o">标签</van-tabbar-item>
		<van-tabbar-item icon="search">标签</van-tabbar-item>
		<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
		<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
	},
}
</script>
<style lang="scss">
</style>