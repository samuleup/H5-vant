<template>
	<div class='riskBodyBox'>
		<van-image :src="require('./headerbg.jpg')" width="100%">
			<p class="headerText">保险风险指标</p>
		</van-image>
		<!-- 卡片1 -->
		<div class="card">
			<p class="title">当期仪表盘</p>
			<van-dropdown-menu active-color="#1989fa">
				<van-dropdown-item v-model="value" :options="option" />
			</van-dropdown-menu>
			<!-- 仪表盘 -->
			<div class="tableClass">
				<div id="gauge" style="width: 100%;height: 400px;margin-top: -50px;"></div>
				<div id="gauge2" style="width: 100%;height: 400px;margin-top: -200px;"></div>
			</div>
		</div>
		<!--  卡片2 -->
		<div class="card" style="margin: -200px 20px 20px 20px;">
			<p class="title">指标历史值</p>
			<van-image v-if="value === 0" :src="require('./indexHistory.jpg')" width="100%"/>
			<van-image v-if="value === 1" :src="require('./indexHistory1.jpg')" width="100%"/>
			<van-image v-if="value === 2" :src="require('./indexHistory2.jpg')" width="100%"/>
		</div>
	</div>
</template>

<script>

export default {
	components: {},
	data() {
		return {
			value: 0,
			option: [
				{ text: '2021年第2季度', value: 0 },
				{ text: '2021年第1季度', value: 1 },
				{ text: '2020年第4季度', value: 2 }
			],
			gauge: {
				series: [
					{
						type: 'gauge',
						startAngle: 180,
						endAngle: 0,
						min: 0,
						max: 1,
						splitNumber: 8,
						axisLine: {
							lineStyle: {
								width: 6,
								color: [
									[0.25, '#FF6E76'],
									[0.5, '#FDDD60'],
									[0.75, '#58D9F9'],
									[1, '#7CFFB2']
								]
							}
						},
						pointer: {
							icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
							length: '12%',
							width: 20,
							offsetCenter: [0, '-60%'],
							itemStyle: {
								color: 'auto'
							}
						},
						axisTick: {
							length: 12,
							lineStyle: {
								color: 'auto',
								width: 2
							}
						},
						splitLine: {
							length: 20,
							lineStyle: {
								color: 'auto',
								width: 5
							}
						},
						axisLabel: {
							color: '#464646',
							fontSize: 20,
							distance: -60,
							formatter: function (value) { return '' }
						},
						title: {
							offsetCenter: [0, '-20%'],
							fontSize: 15
						},
						detail: {
							fontSize: 20,
							offsetCenter: [0, '0%'],
							valueAnimation: true,
							formatter: function (value) {
								return Math.round(value * 100) + '%';
							},
							color: 'auto'
						},
						data: [
							{
								value: 0.992,
								name: '13个月保单继续率'
							}
						]
					}
				]
			},
			gauge2: {
				series: [
					{
						type: 'gauge',
						startAngle: 180,
						endAngle: 0,
						min: 0,
						max: 1,
						splitNumber: 8,
						axisLine: {
							lineStyle: {
								width: 6,
								color: [
									[0.25, '#FF6E76'],
									[0.5, '#FDDD60'],
									[0.75, '#58D9F9'],
									[1, '#7CFFB2']
								]
							}
						},
						pointer: {
							icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
							length: '12%',
							width: 20,
							offsetCenter: [0, '-60%'],
							itemStyle: {
								color: 'auto'
							}
						},
						axisTick: {
							length: 12,
							lineStyle: {
								color: 'auto',
								width: 2
							}
						},
						splitLine: {
							length: 20,
							lineStyle: {
								color: 'auto',
								width: 5
							}
						},
						axisLabel: {
							color: '#464646',
							fontSize: 20,
							distance: -60,
							formatter: function (value) { return '' }
						},
						title: {
							offsetCenter: [0, '-20%'],
							fontSize: 15
						},
						detail: {
							fontSize: 20,
							offsetCenter: [0, '0%'],
							valueAnimation: true,
							formatter: function (value) {
								return Math.round(value * 100) + '%';
							},
							color: 'auto'
						},
						data: [
							{
								value: 0.05,
								name: '综合退保率'
							}
						]
					}
				]
			},
		};
	},
	computed: {

	},
	watch: {},
	methods: {
		drawGauge() {
			this.$echarts.init(document.getElementById('gauge')).setOption(this.gauge)
			this.$echarts.init(document.getElementById('gauge2')).setOption(this.gauge2)
		}
	},
	mounted() {
		this.drawGauge()
	}
}
</script>
<style lang='scss' scoped>
.riskBodyBox {
	padding: 20px 0;
	background: white;
}
.headerText {
	margin-top: -150px;
	margin-left: 40px;
	font-size: 50px;
	font-family: HYChaoCuSongJ;
	font-weight: 600;
	color: #fff;
}
.card {
	padding: 20px 0;
	background: #fff;
	position: relative;
	margin: 50px 20px 20px;
	border-radius: 10px;
}
.title {
	padding: 10px 0;
	font-weight: 600;
	font-size: 18px;
}
.tableClass {
	width: 320px;
	padding: 10px;
    overflow: hidden;
}
</style>