<template>
	<div class='DetailBodyBox'>
		<!-- 顶部 -->
		<div class="top">
			<p class="title">{{city}}分公司</p>
		</div>
		<!-- 板块 -->
		<div class="content">
			<p style="display:inline-block;margin-right: 20px;">KPI得分</p>
			<van-button color="linear-gradient(to right, #5234FF, #8689D4)" style="border-radius: 14px;">
				当前系统排名第{{rank}}
			</van-button>
			<van-row type="flex" justify="center">
				<van-col span="6">
					<p>4.12/8.2</p>
					<span>达成得分</span>
				</van-col>
				<van-col span="6">
					<p>0.6/1.2</p>
					<span>品质得分</span>
				</van-col>
				<van-col span="6">
					<p>0.87/1.6</p>
					<span>管理得分</span>
				</van-col>
			</van-row>
			<p style="margin-right: 20px;">AI数据</p>
			<van-image :src="require('./e.jpg')" style="padding: 10px;">
				综合第{{rank}}名
			</van-image>
			<van-image :src="require('./AI.png')" style="padding: 5px;" />
			<van-tabs v-model="active">
				<van-tab title="品质达成" name="1">
					<quality></quality>
				</van-tab>
				<van-tab title="保费达成" name="2">
					<Premium></Premium>
				</van-tab>
				<van-tab title="管理达成" name="3">
					<management></management>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
import quality from './components/quality.vue';
import Premium from './components/Premium.vue';
import management from './components/management.vue';
export default {
	components: {
		quality,
		Premium,
		management
	},
	data () {
		return {
			active: '1',
			city: '',
			rank: null,
		};
	},
	computed: {},
	watch: {},
	methods: {
	},
	mounted () {
		let query = this.$router.currentRoute.query
		this.city = query.city
		this.rank = query.rank
	}
}
</script>
<style lang='scss' scoped>
.DetailBodyBox {
	background-color: #6eb2eb;
	display: flex;
	flex-direction: column;
}
.top {
	padding-top: 40px;
	height: 70px;
	box-sizing: border-box;
}
.title {
	margin-left: 50px;
	color: white;
}
.content {
	padding: 20px;
	border-radius: 5px;
	flex: 1;
	background: #ffffff;
}
.van-row {
	margin: 30px 0;
}
.van-image {
	font-size: larger;
	font-weight: 600;
	line-height: 55px;
	color: #5234ff;
	padding: inherit;
}
.van-cell__value--alone {
	display: flex;
	justify-content: space-between;
}
.van-cell {
	font-size: 18px;
	font-weight: 600;
	padding: 15px 16px;
}
p {
	font-size: 20px;
	font-weight: 600;
}
</style>