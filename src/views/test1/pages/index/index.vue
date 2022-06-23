<template>
  <div class="AppBodyBox">
    <!-- 轮播图 -->
    <div class="swiperBox">
      <swiper></swiper>
    </div>
    <!-- 板块 -->
    <div class="groupBox">
      <div class="icon">
        <img src="./07.png" alt="">
        <span>综合统计</span>
      </div>
      <van-grid :column-num="3">
        <van-grid-item v-for="(item, index) in GridList" :key="index" :to="'/test1/' + item.router">
          <div slot="default" class="defaultBox">
            <img class="img" :src="item.url" />
            <div slot="text" class="TextAlignCenter">{{ item.name }}</div>
          </div>
        </van-grid-item>
      </van-grid>
      <div class="icon">
        <img src="./08.png" alt="">
        <span>其他统计</span>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '../../components/swiper'
export default {
  components: {
    swiper
  },
  data () {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      GridList: [
        {
          name: "投资",
          value: "1",
          router: "invest",
          url: require('./01.png')
        },
        {
          name: "资产",
          value: "2",
          router: "property",
          url: require('./02.png')
        },
        {
          name: "品质",
          value: "3",
          router: "quality",
          url: require('./03.png')
        },
        {
          name: "KPI",
          value: "4",
          router: "KPI",
          url: require('./04.png')
        },
        {
          name: "风险监测",
          value: "5",
          router: "risk",
          url: require('./05.png')
        },
        {
          name: "实时保费",
          value: "6",
          router: "timePremium",
          url: require('./06.png')
        }
      ]

    };
  },
  mounted () {

  },
  methods: {
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    // 上拉加载
    onLoad () {
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
  overflow: hidden;
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
  text-align: center;
}

.van-grid-item__content {
  background-color: hsla(0, 0%, 100%, 0);
}
.img {
  width: 40px;
  height: 40px;
}
.icon {
  padding: 4px;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  img {
    margin: 0 10px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
}
</style>