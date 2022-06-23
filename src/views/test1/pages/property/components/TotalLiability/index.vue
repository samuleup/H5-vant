<template>
	<div class="AppBodyBox">
		<Echarts :Data="dataOptions" id="totalLiability"></Echarts>
		<benchmarking />
	</div>
</template>

<script>
import Echarts from 'components/Echarts/index.vue'
import Benchmarking from './benchmarking.vue';
export default {
	components: {
		Echarts,
		Benchmarking
	},
	data() {
		return {
			dataOptions: {
				title: [
					{
						text: '总负债'
					},
					{
						text: '单位：亿元',
						left: '80%',
						textStyle: {
							fontSize: 13,
							color: '#A9A9A9'
						}
					}
				],
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: ['准备金', '应付债券', '应付赔付款', '应付保单红利', '其他'],
					scale: true,
					axisTick: {
						alignWithLabel: true
					},
					axisLabel: {
						formatter: function (v) { return v.split('').join('\n') }
					}
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				yAxis: {
					scale: true
				},
				series: [
					{
						symbolSize: 20,
						data: [
							[0.07, 69.5],
							[3.03, 42.3],
							[2.02, 44.7],
							[1.05, 33.3],
							[5.02, 56.8]
						],
						type: 'scatter'
					}
				]
			},
		};
	},
	mounted() {
	},
	methods: {

	},
}
</script>
<style lang='scss' scoped>
.AppBodyBox {
	padding: 20px 0;
}
</style>