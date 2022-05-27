<template>
	<div class='wrapper HomeBox'>
		<div class="navbar">
			<Navbar></Navbar>
		</div>
		<div class="router">
			<router-view />
		</div>
		<div class="tabbar">
			<Tabbar></Tabbar>
		</div>
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
	padding: 40px 0;
	position: relative;
	display: flex;
	overflow: hidden;
}

.router {
	width: 100%;
}

.navbar {
	width: 100%;
	height: 40px;
	position: fixed;
	background: rgb(168, 168, 168);
	left: 0;
	top: 0;
}

.tabbar {
	position: fixed;
	width: 100%;
	height: 40px;
	line-height: 40px;
	left: 0;
	bottom: 0;
	background: rgb(168, 168, 168);
}
</style>