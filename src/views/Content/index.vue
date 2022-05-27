<template>
	<van-pull-refresh class="wrapper" v-model="isLoading" @refresh="onRefresh">
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<van-cell v-for="item in PageItem" :key="item" :title="item" />
		</van-list>
	</van-pull-refresh>
</template>

<script>
export default {
	components: {
	},
	data () {
		return {
			isLoading: false,
			PageSize: 12,
			total: 100,
			totalList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
			PageItem: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
			loading: false,
			finished: false,

		};
	},
	computed: {},
	watch: {},
	methods: {
		// 下拉刷新
		onRefresh () {
			setTimeout(() => {
				this.isLoading = false;
				this.PageSize = 12
				this.total = 100
				this.PageItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
			}, 1000);
		},
		// 上拉加载
		onLoad () {
			setTimeout(() => {
				// 异步更新数据
				this.PageItem = [...this.PageItem, ...this.totalList.slice(this.PageItem.length, (this.PageItem.length + this.PageSize))]
				// 加载状态结束
				this.loading = false;
				// 数据全部加载完成
				if (this.PageItem.length == this.total) {
					this.finished = true;
				}
			}, 1000);
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
</style>