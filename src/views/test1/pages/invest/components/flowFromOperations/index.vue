<template>
	<div class="AppBodyBox">
		<Echarts :Data="Data1"></Echarts>
		<!-- 累计业务现金流 -->
		<div class="bottomBox">
			<p class="title">2022累计业务现金流</p>
			<div style="margin: 10px 0;">
				<span>现金流入：</span>
				<span class="amount">1158.99</span>
			</div>
			<div style="margin: 10px 0;">
				<span>现金流出：</span>
				<span class="amount">453.67</span>
			</div>
			<van-field value="307.12" label="给付支出" label-width="16.2rem" disabled />
			<van-field value="17.12" label="退保金" label-width="16.2rem" disabled />
			<van-field value="57.12" label="手续费和佣金支出" label-width="16.2rem" disabled />
			<van-field value="27.12" label="业务及管理费" label-width="16.2rem" disabled />
			<van-field value="36.72" label="其他支出" label-width="16.2rem" disabled />
			<div style="margin: 10px 0;">
				<span>业务现金流：</span>
				<span class="amount">143.67</span>
			</div>
		</div>
	</div>
</template>

<script>

import VantPicker from 'components/VantPicker'
import Echarts from 'components/Echarts/index.vue'
export default {
	components: {
		Echarts,
		VantPicker
	},
	data() {
		return {
		};
	},
	computed: {
		Data1() {
			return {
				title: {
					text: '各月业务现金流'
				},
				tooltip: {
					trigger: 'axis'
				},
				yAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01', '2022.02', '2022.03', '2022.04', '2022.05']
				},
				xAxis: {
					type: 'value',
					axisLabel: {
						formatter: '{value}'
					},
					axisLabel: { show: false },
					splitLine: {
						show: true,
						lineStyle: {
							type: 'dashed'
						}
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				color: '#E2DCEF',
				series: [
					{
						name: 'Highest',
						type: 'line',
						data: [124.3, 51.2, -37.5, 43.9, -4.7, -13.8, -1.7, 0.0, 74.3, 96.6, 63.7, 47.4],
						symbolSize: 7,
						itemStyle: {
							normal: {
								color: '#FAB077'
							}
						},
						areaStyle: {
							color: this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
								{
									offset: 0,
									color: 'rgba(213,72,120,0.8)'
								},
								{
									offset: 1,
									color: 'rgba(213,72,120,0.2)'
								}
							])
						},
					}
				]
			}
		}
	},
	watch: {},
	methods: {
	},
}
</script>
<style lang='scss' scoped>
.AppBodyBox {
	padding: 20px 0;
}
.bottomBox {
	padding: 20px;
}
.title {
	font-weight: bold;
	font-size: 18px;
}
.amount {
	margin-left: 50%;
	color: rgb(70, 64, 251);
}
.van-cell {
	padding: 5px 16px;
}
</style>