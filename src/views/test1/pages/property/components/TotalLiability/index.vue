<template>
	<div class="AppBodyBox">
		<Echarts :Data="dataOptions" id="totalLiability"></Echarts>
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
			dataOptions: {
				title: [
					{
						text: '总资产'
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
					data: ['准备金', '应付债券', '应付赔付款', '应付保单红利', '其他', '上市公司同业对标', '银保公司同业对标'],
					scale: true,
					axisTick: {
						alignWithLabel: true
					},
					axisLabel: {
						formatter: function(v) { return v.split('').join('\n') }
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
							[4.05, 49.6],
							[6.03, 72.4],
							[5.02, 56.8]
						],
						type: 'scatter'
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
.AppBodyBox {
	padding: 20px 0;
}
</style>