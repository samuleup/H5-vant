<template>
	<div class="AppBodyBox">
		<Echarts :Data="dataOptions" id="Asstes"></Echarts>
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
						text: '资产',
						left: 'center'
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
					trigger: 'item'
				},
				legend: {
					orient: 'vertical',
					left: 'left'
				},
				series: [
					{
						type: 'pie',
						radius: '50%',
						data: [
							{ value: 1500, name: '总资产' },
							{ value: 435, name: '总负债' },
							{ value: 1065, name: '净资产' }
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
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