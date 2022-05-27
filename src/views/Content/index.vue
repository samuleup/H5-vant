<template>
	<div class='MaxView'>
		<div v-for="(item, index) in 100" :key="index">content{{ item }}</div>
	</div>
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
	},
}
</script>
<style lang="scss">
.MaxView {
	width: 100%;
	height: 100%;
	overflow: auto;
}
</style>