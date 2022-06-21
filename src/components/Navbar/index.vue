<template>
	<van-nav-bar title="标题" fixed>
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
	computed: {},
	watch: {},
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