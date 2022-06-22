<template>
	<div class="AppBodyBox">
		<div class="box">
			<!-- 资产占比 -->
			<Echarts :Data="Data" id="management" />
		</div>
	</div>
</template>

<script>
import Echarts from 'components/Echarts/index.vue'
export default {
	components: {
		Echarts
	},
	data() {
		return {
			Data: {
				legend: {
					top: 'bottom'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				series: [
					{
						name: 'Nightingale Chart',
						type: 'pie',
						radius: [10, 100],
						center: ['50%', '50%'],
						roseType: 'area',
						itemStyle: {
							borderRadius: 8
						},
						data: [
							{ value: 40, name: '银保新人三转率' },
							{ value: 38, name: '银保全员直营活动率' },
							{ value: 32, name: '营销一个月新人实动率' },
							{ value: 30, name: '营销主管实动率' },
							{ value: 28, name: '营销实动人力增长率' }
						]
					}
				]
			}
		};
	},
	mounted() {
	},
	methods: {

	},
}
</script>
<style lang='scss' scoped>
.box {
	padding: 0px 20px 60px 20px;
}
</style>