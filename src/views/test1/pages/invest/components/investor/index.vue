<template>
	<div class="AppBodyBox">
		<!-- 资产占比 -->
		<Echarts :Data="Data" id="echarts1" />
		<!-- 当年累计收益 -->
		<Echarts :Data="Data1" id="echarts2" />
		<!-- 综合投资收益率 -->
		<Echarts :Data="Data2" id="echarts3" />
	</div>
</template>

<script>
import Echarts from 'components/Echarts/index.vue'
export default {
	components: {
		Echarts
	},
	data() {
		const labelRight = {
			position: 'right'
		}
		const labelLeft = {
			position: 'left'
		}
		const bgColor = {
			type: 'linear',
			x: 0,  //右
			y: 0,  //下
			x2: 0,  //左
			y2: 1,  //上
			colorStops: [
				{
					offset: 0,
					color: 'pink' // 0% 处的颜色
				},
				{
					offset: 0.7,
					color: '#2378f7' // 70% 处的颜色
				},
				{
					offset: 1,
					color: '#83bff6' // 100% 处的颜色
				}
			]
		}
		return {
			Data: {
				title: {
					text: '资产占比'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					},
					formatter: function (params) {
						var tar = params[1];
						return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					splitLine: { show: false },
					data: ['流动性资产', '权益类资产', '固收类资产', '其他金融资产', '不动产', '其他'],
					axisLabel: {
						formatter: function(v) { return v.split('').join('\n') }
					}
				},
				yAxis: {
					type: 'value',
					axisLabel: { show: false }
				},
				series: [
					{
						name: 'Placeholder',
						type: 'bar',
						stack: 'Total',
						itemStyle: {
							borderColor: 'transparent',
							color: 'transparent'
						},
						emphasis: {
							itemStyle: {
								borderColor: 'transparent',
								color: 'transparent'
							}
						},
						data: [0, 13.8, 39.3, 89.9, 92.4, 100.3]
					},
					{
						name: 'Life Cost',
						type: 'bar',
						stack: 'Total',
						label: {
							show: true,
							position: 'top',
							formatter: function (v) {
								return v.value + '%';
							}
						},
						data: [13.8, 25.5, 50.6, 2.5, 7.9, 0.3],
						itemStyle: { color: bgColor }
					}
				]
			},
			Data1: {
				title: {
					text: '当年累计收益'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
					axisLabel: { show: false },
					position: 'top',
					splitLine: {
						show: true,
						lineStyle: {
							type: 'dashed'
						}
					}
				},
				yAxis: {
					type: 'category',
					splitLine: { show: true },
					data: [
						'其他',
						'不动产',
						'其他金融资产',
						'固收类资产',
						'权益类资产',
						'流动性资产'
					]
				},
				series: [
					{
						// name: '',
						type: 'bar',
						stack: 'Total',
						label: {
							show: true,
							formatter: '{c}'
						},
						data: [
							{ value: -0.5, label: labelLeft },
							{ value: 4.1, label: labelRight },
							{ value: -12.8, label: labelLeft },
							{ value: 21.2, label: labelRight },
							{ value: -258.1, label: labelLeft },
							{ value: 2.8, label: labelRight },
						]
					}
				]
			},
			Data2: {
				title: {
					text: '综合投资收益率'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
					axisLabel: { show: false },
					position: 'top',
					splitLine: {
						show: true,
						lineStyle: {
							type: 'dashed'
						}
					}
				},
				yAxis: {
					type: 'category',
					splitLine: { show: true },
					data: [
						'其他',
						'不动产',
						'其他金融资产',
						'固收类资产',
						'权益类资产',
						'流动性资产'
					]
				},
				dataset: [
					{
						source: [
							[1, -0.5],
							[2, 4.7],
							[3, -12.8],
							[4, 21.2],
							[5, -64.4],
							[6, 2.2]
						]
					},
					// {
					// 	transform: {
					// 		type: 'ecStat:regression',
					// 		config: {
					// 			method: 'exponential'
					// 		}
					// 	}
					// }
				],
				series: [
					{
						name: 'scatter',
						type: 'scatter',
						datasetIndex: 0
					},
					{
						name: 'line',
						type: 'line',
						smooth: true,
						datasetIndex: 1,
						symbolSize: 0.1,
						symbol: 'circle',
						label: { show: true, fontSize: 16 },
						labelLayout: { dx: -20 },
						encode: { label: 2, tooltip: 1 }
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