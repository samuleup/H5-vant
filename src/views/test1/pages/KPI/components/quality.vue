<template>
	<div class="AppBodyBox">
		<div class="box">
			<Echarts :Data="Data" id="quality" />
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
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					}
				},
				legend: {
					data: ['继续率达成值', '继续率目标值']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'category',
						data: ['营销', '银保长期', '银保直营', '中介'],
						axisPointer: {
							type: 'shadow'
						},
						axisLabel: {
							interval: 0
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '继续率',
						min: 0,
						max: 100,
						// interval: 50,
						axisLabel: {
							formatter: '{value} %'
						}
					}
				],
				series: [
					{
						name: '继续率达成值',
						type: 'bar',
						tooltip: {
							valueFormatter: function (value) {
								return value + ' ml';
							}
						},
						data: [
							24.0, 34.9, 27.0, 23.2
						]
					},
					{
						name: '继续率目标值',
						type: 'bar',
						tooltip: {
							valueFormatter: function (value) {
								return value + ' ml';
							}
						},
						data: [
							82.6, 75.9, 49.0, 26.4
						]
					}
				]
			}
		}
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