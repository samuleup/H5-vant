<template>
	<div class='HomeBox'>
		<Navbar></Navbar>
		<div class="route">
			<router-view />
		</div>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Navbar from 'components/Navbar'
import Tabbar from 'components/Tabbar'
export default {
	components: { Navbar, Tabbar },
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
.HomeBox {
	width: 100%;
	height: 100%;
	display: flex;
	padding: 46px 0 50px 0;
	box-sizing: border-box;
}

.route {
	flex: 1;
}
</style>