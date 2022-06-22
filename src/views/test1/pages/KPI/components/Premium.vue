<template>
	<div class="AppBodyBox">
		<div class="box">
			<Echarts :Data="Data" id="premium" />
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
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['分公司渠道达成率', '总公司渠道达成率']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['2021-03', '2021-07', '2021-10', '2022-01', '2022-04']
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						formatter: '{value} %'
					}
				},
				series: [
					{
						name: '分公司渠道达成率',
						type: 'line',
						data: [20, 62, 99, 114, 90]
					},
					{
						name: '总公司渠道达成率',
						type: 'line',
						data: [32, 78, 110, 134, 146]
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