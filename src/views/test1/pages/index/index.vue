<template>
	<div class="AppBodyBox">
		<!-- 轮播图 -->
		<div class="swiperBox">
			<swiper></swiper>
		</div>
		<!-- 板块 -->
		<div class="groupBox">
			<van-grid :column-num="3">
				<van-grid-item v-for="(item, index) in GridList" :key="index" :to="'/test1/' + item.router">
					<div slot="default" class="defaultBox" @click="showPopup(item)">
						<van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
						<div slot="text" class="TextAlignCenter">{{ item.name }}</div>
					</div>
				</van-grid-item>
			</van-grid>
      <!-- 品质弹出框 -->
			<van-popup v-model="show">
				<van-grid square>
					<van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" />
				</van-grid>
        111
			</van-popup>
		</div>
	</div>
</template>

<script>
import swiper from '../../components/swiper'
export default {
	components: {
		swiper
	},
	data() {
		return {
			current: '0',
			show: false,
			isLoading: false,
			loading: false,
			finished: false,
			GridList: [
				{
					name: "投资",
					value: "1",
					router: "invest"
				},
				{
					name: "资产",
					value: "2",
					router: "property"
				},
				{
					name: "品质",
					value: "3",
					router: ""
					// router: "quality"
				},
				{
					name: "KPI",
					value: "4",
					router: "KPI"
				},
				{
					name: "风险监测",
					value: "5",
					router: "risk"
				},
				{
					name: "实时保费",
					value: "6",
					router: "timePremium"
				}
			]

		};
	},
	mounted() {

	},
	methods: {
		// 下拉刷新
		onRefresh() {
			setTimeout(() => {
				this.isLoading = false;
			}, 2000);
		},
		// 上拉加载
		onLoad() {
			setTimeout(() => {
				// 异步更新数据
				// 加载状态结束
				this.loading = false;
				// 数据全部加载完成
				let a = '1'
				if (a == a) {
					this.finished = true;
				}
			}, 2000);
		},
		showPopup(item) {
			// 选择品质时，展示弹出层
			this.show = item.value === '3'
		},
	},
}
</script>
<style lang="scss">
.MaxView {
	width: 100%;
	height: 100%;
	overflow: auto;
}

.groupBox {
	width: 98%;
	position: absolute;
	background: #fff;
	border-radius: 10px;
	top: 222px;
	left: 1%;
}

.finishedBox {
	position: fixed;
	bottom: 5px;
	left: 50%;
	transform: translate(-50%);
}

.TextAlignCenter {
	padding-top: 6px;
	height: 20px;
	font-size: 14px;
	line-height: 20px;
}

.defaultBox {
	padding: 20px;
}

.van-grid-item__content {
	background-color: hsla(0, 0%, 100%, 0);
}
</style>