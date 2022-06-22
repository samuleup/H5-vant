<template>
	<div class="AppBodyBox">
		<Echarts :Data="dataOptions" id="netAssets"></Echarts>
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
						text: '净资产'
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
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				xAxis: {
					type: 'category',
					data: ['实收资本', '其他综合收益', '留存收益', '上市公司同业对标', '银保公司同业对标'],
					boundaryGap: false,
					axisLabel: {
						formatter: function(v) { return v.split('').join('\n') }
					}
				},
				yAxis: {
					type: 'value',
					boundaryGap: [0, '30%']
				},
				visualMap: {
					type: 'piecewise',
					show: false,
					dimension: 0,
					seriesIndex: 0,
					pieces: [
						{
							gt: 1,
							lt: 3,
							color: 'rgba(0, 0, 180, 0.4)'
						},
						{
							gt: 5,
							lt: 7,
							color: 'rgba(0, 0, 180, 0.4)'
						}
					]
				},
				series: [
					{
						type: 'line',
						smooth: 0.6,
						symbol: 'none',
						lineStyle: {
							color: '#5470C6',
							width: 5
						},
						markLine: {
							symbol: ['none', 'none'],
							label: { show: false },
							data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
						},
						areaStyle: {},
						data: [200, 560, 750, -180, 50]
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