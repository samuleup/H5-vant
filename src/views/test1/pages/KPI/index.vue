<template>
	<div class='AppBodyBox'>
		<!-- 顶部 -->
		<div class="top">
			<p>机构KPI排行榜</p>
			<van-tabs v-model="active" sticky>
				<van-tab v-for="index in ['综合得分', '达成得分', '品质得分', '管理得分']" :title="index" :key="index">
					<div class="rankingBox">
						<!-- <van-image :src="require('./cityIcon/bj.png')" @click="toDetail({city: '北京', badge: 2})" style="margin-top: 30px;">
							<p>北京</p>
						</van-image>
						<van-image :src="require('./cityIcon/qd.png')" @click="toDetail({city: '青岛', badge: 1})">
							<p>青岛</p>
						</van-image>
						<van-image :src="require('./cityIcon/zj.png')" @click="toDetail({city: '浙江', badge: 3})" style="margin-top: 30px;">
							<p>浙江</p>
						</van-image> -->
					</div>
				</van-tab>
			</van-tabs>
		</div>
		<!-- 板块 -->
		<van-cell-group v-for="(item, index) in ranking" :key="index" inset>
			<van-cell value="内容">
				<van-badge :content="item.badge" color="#8AB6E3" />
				<van-image round width="30px" height="30px" :src="item.imageSrc" />
				<span>{{item.city}}</span>
				<span>{{item.score}}</span>
				<span @click="toDetail(item)" style="font-weight: 200;">查看详情</span>
			</van-cell>
		</van-cell-group>
	</div>
</template>

<script>

export default {
	components: {
	},
	data () {
		return {
			active: '综合得分',
			currentRate: 0,
			gradientColor: {
				'0%': '#3fecff',
				'100%': '#6149f6',
			},
			ranking: [
				{
					badge: 4,
					imageSrc: require('./cityIcon/sz.png'),
					city: '深圳',
					score: '8.87'
				}, {
					badge: 5,
					imageSrc: require('./cityIcon/tj.png'),
					city: '天津',
					score: '8.67'
				}, {
					badge: 6,
					imageSrc: require('./cityIcon/ss.png'),
					city: '山西',
					score: '8.49'
				}, {
					badge: 7,
					imageSrc: require('./cityIcon/sd.png'),
					city: '山东',
					score: '8.43'
				}, {
					badge: 8,
					imageSrc: require('./cityIcon/hn.png'),
					city: '湖南',
					score: '8.32'
				}, {
					badge: 9,
					imageSrc: require('./cityIcon/js.png'),
					city: '江苏',
					score: '8.30'
				}, {
					badge: 10,
					imageSrc: require('./cityIcon/nm.png'),
					city: '内蒙古',
					score: '8.18'
				}
			],
		};
	},
	computed: {},
	watch: {},
	methods: {
		toDetail (item) {
			this.$router.push('/test1/KPIDetail?city=' + item.city + '&rank=' + item.badge)
		}
	},
}
</script>
<style lang='scss' scoped>
.top {
	padding-top: 10px;
}
.rankingBox {
	display: flex;
	justify-content: space-evenly;
	height: 180px;
	background-image: url("./f.jpg");
	background-repeat: no-repeat;
	background-size: 98% 100%;
	background-position: bottom;
	p {
		margin-top: -15px;
	}
}
.van-image {
	height: 60px;
	font-size: larger;
	font-weight: 600;
	text-align: center;
	line-height: 55px;
}
.van-badge {
	width: 30px;
	height: 30px;
	font-size: 15px;
	padding: 5px 3px;
}
.van-cell__value--alone {
	display: flex;
	justify-content: space-between;
}
.van-cell {
	font-size: 18px;
	font-weight: 600;
	padding: 15px 16px;
}
p {
	text-align: center;
	font-size: 20px;
	font-weight: 600;
}
</style>