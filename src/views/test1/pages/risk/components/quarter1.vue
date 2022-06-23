<template>
	<div>
		<Echarts :Data="GeneralIndicators" id="GeneralIndicators"></Echarts>
		<van-image :src="require('./table.jpg')" @click="toIndex"></van-image>
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
			GeneralIndicators: {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'category',
						data: ['公司整体风险偏好', '大类资产配置', '保险风险', '运营与合规风险', '洗钱与欺诈风险']
					}
				],
				yAxis: [
					{
						type: 'value'
					}
				],
				series: [
					{
						name: '安全区间',
						type: 'bar',
						stack: 'Ad',
						emphasis: {
							focus: 'series'
						},
						data: [320, 332, 301, 334, 390]
					},
					{
						name: '预警期间',
						type: 'bar',
						stack: 'Ad',
						emphasis: {
							focus: 'series'
						},
						data: [120, 132, 101, 134, 90]
					},
					{
						name: '突破限额',
						type: 'bar',
						stack: 'Ad',
						emphasis: {
							focus: 'series'
						},
						data: [220, 182, 191, 234, 290]
					}
				]
			},
		};
	},
	computed: {
		DimeConfig() {
			return [
				{
					label: '风险指标类别',
					prop: 'roomType'
				},
				{
					label: '合计',
					prop: 'closedAccount'
				},
				{
					label: '绿',
					prop: 'noAccount'
				},
				{
					label: '黄',
					prop: 'givePrice'
				},
				{
					label: '红',
					prop: 'totalPrice'
				}
			]
		},
	},
	mounted() {
	},
	methods: {
		toIndex() {
			this.$router.push('/test1/riskIndex')
		},
	},
}
</script>
<style lang='scss' scoped>
</style>