<template>
  <div class='AppBodyBox'>
    <!-- 顶部 -->
    <div class="top">
      <p>机构KPI排行榜</p>
      <van-tabs v-model="active" sticky>
        <van-tab v-for="index in ['综合得分', '达成得分', '品质得分', '管理得分']" :title="index" :key="index">
          <div class="rankingBox">
            <van-image :src="require('@/assets/img/银牌.png')" style="margin-top: 30px;">
              北京
            </van-image>
            <van-image :src="require('@/assets/img/金牌.png')">
              青岛
            </van-image>
            <van-image :src="require('@/assets/img/铜牌.png')" style="margin-top: 30px;">
              浙江
            </van-image>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 板块 -->
    <van-cell-group v-for="(item, index) in ranking" :key="index" inset>
      <van-cell value="内容" @click="toDetail(item)">
        <van-badge :content="item.badge" color="#1989fa" />
        <van-image round width="30px" height="30px" :src="item.imageSrc" />
        <span>{{item.city}}</span>
        <span>{{item.score}}</span>
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
        // {
        // 	badge: 1,
        // 	imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        // 	city: '青岛',
        // 	score: '9.87'
        // }, {
        // 	badge: 2,
        // 	imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        // 	city: '北京',
        // 	score: '9.17'
        // }, {
        // 	badge: 3,
        // 	imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
        // 	city: '浙江',
        // 	score: '8.99'
        // }, 
        {
          badge: 4,
          imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          city: '深圳',
          score: '8.87'
        }, {
          badge: 5,
          imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          city: '天津',
          score: '8.67'
        }, {
          badge: 6,
          imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          city: '山西',
          score: '8.49'
        }, {
          badge: 7,
          imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          city: '山东',
          score: '8.43'
        }, {
          badge: 8,
          imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          city: '湖南',
          score: '8.32'
        }, {
          badge: 9,
          imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          city: '江苏',
          score: '8.30'
        }, {
          badge: 10,
          imageSrc: 'https://img01.yzcdn.cn/vant/cat.jpeg',
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
      console.log(item);
      this.$router.push('/test1/KPIDetail')
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
  justify-content: center;
  height: 180px;
  background-image: url("../../../../assets/img/排行榜.png");
  background-repeat: no-repeat;
  background-size: 175px 110px;
  background-position: bottom;
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