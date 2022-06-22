<template>
	<div class="AppBodyBox">
		<Echarts :Data="dataOptions" id="totalLiability"></Echarts>
		<Echarts :Data="dataOptions1" id="Reserve"></Echarts>
		<Echarts :Data="dataOptions2" id="Bondspayable"></Echarts>
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
					data: ['准备金', '应付债券', '应付赔付款', '应付保单红利', '上市公司同业对标', '银保公司同业对标', '其他'],
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
			},
			// 准备金
			dataOptions1: {
				title: [
					{
						text: '准备金'
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
					bottom: '9%',
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
					data: ['2018', '2019', '2020', '2021', '2022'],
					// boundaryGap: false,
					// axisLabel: {
					// 	formatter: function(v) { return v.split('').join('\n') }
					// }
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
							gt: 0,
							lt: 5,
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
						data: [20, 12, 24, 19, 5]
					}
				]
			},
			// 应付债券
			dataOptions2: {
				title: [
					{
						text: '应付债券'
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
					bottom: '9%',
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
					data: ['2018', '2019', '2020', '2021', '2022'],
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
							gt: 0,
							lt: 5,
							color: 'rgba(89, 10, 20, 0.5)'
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
						data: [2, 12, 9, 15, 5]
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