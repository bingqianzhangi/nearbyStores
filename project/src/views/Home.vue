<template>
  <div class="home">
    <div class="head">
      <div class="root">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(el, index) in arrItem" :key="index" class="swiper-slide">
              <img class="img" :src="el.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>

      <div class="title" id="#title">
        <ul class="title-table">
          <li>
            <img class="img4" src="../img/img4.png" alt />
          </li>
          <li class="size">北京市朝阳区</li>
          <li @click="change()">
            <img v-if="show === false" name="arrow-down" class="img9" src="../img/img9.png" alt />
            <img class="img9" v-else name="arrow-up" src="../img/img10.png" alt />
          </li>
        </ul>
        <div class="size-two">仅显示授权店</div>
        <p class="quan" @click="changeScreen()">
          筛选
          <img class="img11" v-if="showScreen" name="arrow-up" src="../img/img10.png" alt />
          <img class="img11" v-else name="arrow-down" src="../img/img9.png" alt />
          <!--   <van-icon v-if="showScreen" name="arrow-up" />
          <van-icon v-else name="arrow-down" />-->
        </p>
        <p @click="changeView()">
          <!-- <img class="img6" src="../img/img3.png" alt /> -->
          <!--   <van-icon name="location-o" v-if="viewFlag" />
          <van-icon name="wap-home-o" v-else />-->
          <img class="img6" name="location-o" v-if="viewFlag" src="../img/img3.png" alt />
          <img class="img7" name="wap-home-o" v-else src="../img/img11.png" alt />
        </p>
      </div>

      <div class="screen" v-if="showScreen">
        <p class="shopping">售卖产品:</p>
        <div class="shopping_cigarette">
          <span class="cigarette_one">套装 / 替换 / 小烟等</span>
          <span class="cigarette_two">一次性小烟</span>
        </div>
        <p class="shopping2">热门活动:</p>
        <div class="shopping_cigarette2">
          <span class="cigarettethree">新品上市</span>
          <span class="cigarettefour">#旗舰店开业活动#</span>
        </div>
        <div class="function">
          <button class="reset">重置</button>
          <button class="confirm">确定</button>
        </div>
      </div>
      <!-- 地区弹框 -->
      <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
        <cascade />
      </van-popup>
    </div>
    <!-- 列表 -->
    <list v-if="viewFlag" @hide="onHideList" />
    <!-- 地图 -->
    <gdMap v-else />
  </div>
</template>

<script>
import Swiper from 'swiper'
import { Icon, Popup } from 'vant'
import cascade from '../components/cascade'
import gdMap from '../components/gdMap'
import list from '../components/list'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Index',
  props: {},
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    cascade,
    gdMap,
    list
  },
  data() {
    return {
      show: false,
      showScreen: false,
      value1: 0,
      viewFlag: true,
      arrItem: [
        {
          name: 'swiperSlide1',
          imgUrl: '/img/img1.jpg'
        },
        {
          name: 'swiperSlide51',
          imgUrl: '/img/img2.jpg'
        },
        {
          name: 'swiperSlide1111115',
          imgUrl: '/img/img1.jpg'
        }
      ]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    ...mapState({
      listData: state => state.home.listData,
      ActivityData: state => state.list.ActivityData
    })
    // ...mapGetters(home,['getdata'])
  },
  methods: {
    change() {
      this.show = !this.show
    },
    changeScreen() {
      this.showScreen = !this.showScreen
    },
    ...mapMutations({
      // updateFlag: "charts/updateFlag"
    }),
    ...mapActions({
      getdata: 'home/getdata',
      getActivity: 'list/getActivity'
    }),
    changeView() {
      this.viewFlag = !this.viewFlag
    },
    // 点击单条数据隐藏列表显示地图
    onHideList() {
      this.viewFlag = !this.viewFlag
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import '../assets/swiper.min.css';
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  head {
  }
  // overflow:hidden;
  .gdMap,
  .list-title {
    flex: 1;
    overflow-y: auto;
  }
  .swiper-container {
    width: 100%;
    height: 2.5rem;
  }
  .swiper-wrapper {
    width: 100%;
    height: 2.5rem;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    // height: 2.5rem;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
}
.title {
  font-size: 0.26rem;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  line-height: 60px;
  .title-table {
    display: flex;
    .img4 {
      width: 20px;
      height: 25px;
      margin-top: 16px;
    }
    .img9 {
      display: block;
      width: 20px;
      height: 13px;
      margin-top: 24px;
      margin-left: 5px;
    }
    .size {
      margin-left: 5px;
    }
  }

  .img6 {
    width: 20px;
    height: 25px;
    margin-top: 16px;
  }
  .img7 {
    width: 20px;
    height: 20px;
    margin-top: 19px;
  }
  .img11 {
    width: 13px;
    height: 10px;
  }
}
.screen {
  width: 100%;
  position: absolute;
  top: 3.5rem;
  left: 0rem;
  font-size: 0.26rem;
  border-bottom: 1px solid #ccc;
  z-index: 99;
  background: #fff;
  height: 3.5rem;
  border-top: 1px solid #ccc;
  .shopping {
    margin: 0.3rem 0.3rem;
  }
  .shopping_cigarette {
    margin: 0.3rem 0.3rem;
    display: flex;
    .cigarette_one {
      width: 40%;
      text-align: center;
      background: #000;
      color: #fff;
      border-radius: 1rem;
      height: 25px;
      line-height: 25px;
    }
    .cigarette_two {
      margin-left: 0.4rem;
      height: 25px;
      line-height: 25px;
      width: 23%;
      text-align: center;
      background: #ccc;
      color: #333333;
      border-radius: 1rem;
    }
  }
  .shopping2 {
    margin: 0.3rem 0.3rem;
  }
  .shopping_cigarette2 {
    margin: 0.3rem 0.3rem;
    display: flex;
    .cigarettethree {
      height: 25px;
      line-height: 25px;
      width: 20%;
      text-align: center;
      background: #ccc;
      color: #333333;
      border-radius: 1rem;
    }
    .cigarettefour {
      height: 25px;
      line-height: 25px;
      margin-left: 0.4rem;
      width: 39%;
      text-align: center;
      background: #ccc;
      color: #333333;
      border-radius: 1rem;
    }
  }
  .function {
    width: 100%;
    height: 19%;
    display: flex;
    justify-content: space-around;
    button {
      width: 50%;
      border: 0;
    }
    .reset {
      background: #ccc;
    }
    .confirm {
      background: #000;
      color: #fff;
    }
  }
}
.size-two {
  border: 1px solid #000;
  border-radius: 15px;
  height: 25px;
  width: 90px;
  text-align: center;
  line-height: 25px;
  margin-top: 15px;
}
.quan {
  border: 1px solid #000;
  border-radius: 15px;
  height: 25px;
  width: 55px;
  text-align: center;
  line-height: 25px;
  margin-top: 15px;
}
.img5 {
  text-align: center;
  width: 16px;
  height: 10px;
  margin-top: 2px;
  margin-left: 2px;
}
.img6 {
  display: inline;
  width: 25px;
  height: 30px;
  margin-top: 15px;
}
</style>
