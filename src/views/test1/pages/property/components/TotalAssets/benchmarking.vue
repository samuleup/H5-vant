<template>
	<div>
		<Echarts :Data="dataOptions1" id="Reserve1"></Echarts>
		<Echarts :Data="dataOptions2" id="Bondspayable1"></Echarts>
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
			// 上市公司同业对标
			dataOptions1: {
				title: [
					{
						text: '上市公司同业对标'
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
					data: ['中邮保险', '中国人寿', '平安寿', '太保寿', '新华保险', '人寿保', '对标公司平均'],
					axisLabel: {
						interval: 0,
						rotate: 40,
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
							gt: 0,
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
						data: [30, 25, 24, 19, 25, 13, 15],
						//设置面积区域为渐变效果
						areaStyle: {
							color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
								{
									offset: 0.4,
									color: "#B0C4DE",
								},
								{
									offset: 1,
									color: "#48D1CC",
								},
							]),
						}
					}
				]
			},
			// 银保公司同业对标
			dataOptions2: {
				title: [
					{
						text: '银保公司同业对标'
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
					data: ['中邮保险', '中国人寿', '平安寿', '太保寿', '新华保险', '人寿保', '对标公司平均'],
					axisLabel: {
						interval: 0,
						rotate: 40,
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
							gt: 0,
							lt: 7,
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
						data: [22, 12, 9, 15, 15, 9, 13]
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