<template>
  <div class="list-title">
    <ul class="onges" v-for="item in datas" :key="item.id">
      <li class="list-one">
        <b>{{item.name}}</b>
        <img class="list-imgs1" src="../../img/img8.png" alt />
        <img class="list-imgs2" @click="showPopup" src="../../img/img6.png" alt />

        <van-popup v-model="show" :style="{ height: '10%',width: '30%' }">
          {{item.tel}}
          <a href="tel:1xxxxxxxxxx">确认拨打</a>
        </van-popup>

        <img @click="onLocationMarker(item)" class="list-imgs3" src="../../img/img7.png" alt />
      </li>
      <li class="list-twos">
        {{item.address}}
        <!--  <span class="list-mi">3.2km</span> -->
      </li>
      <li class="list-threes">{{item.businessHours}}</li>
      <li class="list-threes">{{item.promotions.name}}</li>
      <li class="list-four" v-for="item in item.promotions" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { Popup } from 'vant'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  props: {},
  components: {},

  data() {
    return {
      datas: [],
      show: false
    }
  },
  computed: {
    ...mapState({
      listData: state => state.home.listData
    })
  },
  methods: {
    ...mapActions({
      getdata: 'home/getdata'
    }),
    async getCity() {
      const data = await this.getdata({ parentId: '-1' })
      if (data.result) {
        this.datas = data.data
        // 传递数据到store
        this.$store.commit('map/SET_MARKERS', data.data)
      }
    },
    onSwitcher() {},
    states(selected) {
      //获取二级时事件11111111111111
      console.log('111', selected)
    },
    twostates() {
      console.log('111', selecteds)
    },
    showPopup() {
      this.show = true
    },
    // 单挑地图定位标点
    onLocationMarker(data) {
      this.$emit('hide')
      this.$store.commit('map/SET_MARKERS', [data])
    }
  },
  created() {},
  mounted() {
    this.getCity()
  }
}
</script>
<style scoped lang="scss">
.list-title {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 190.5px;
  bottom: 2000px;
  .onges {
    height: 90px;
    margin: 15px 15px;
    .list-one {
      margin-top: 5px;
      font-size: 13px;
      position: relative;
    }
    .list-imgs1 {
      display: inline;
      width: 50px;
      margin-left: 2px;
      position: absolute;

      right: 21%;
    }
    .list-imgs2 {
      width: 30px;
      position: absolute;
      right: 10%;
      margin-top: 3px;
    }
    .list-imgs3 {
      width: 30px;
      position: absolute;
      right: 0%;
      margin-top: 3px;
    }
  }
  .list-twos {
    width: 70%;
    margin-top: 5px;
    font-size: 12px;
    position: relative;
  }
  .list-threes {
    margin-top: 3px;
    font-size: 14px;
  }
  .list-four {
    height: 20px;
    line-height: 20px;
    width: 20%;
    text-align: center;
    background: #ccc;
    color: #333333;
    border-radius: 0.3rem;
    margin-top: 5px;
    font-size: 14px;
  }
  .list-mi {
    position: absolute;
    right: 1%;
    top: 90%;
  }
}
</style>
