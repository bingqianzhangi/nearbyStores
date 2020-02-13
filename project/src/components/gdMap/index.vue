<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-map">
      <el-amap-marker
        v-for="(marker, index) in markers"
        :position="marker.position"
        :events="marker.events"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :vid="index"
        :key="index"
      />
    </el-amap>
  </div>
</template>

<script>
export default {
  // props: {
  //   markers: {
  //     type: Array,
  //     default() {
  //       return []
  //     }
  //   }
  // },
  data() {
    return {
      zoom: 11
    }
  },
  computed: {
    markers() {
      return this.$store.state.map.markers
    },
    center() {
      return this.markers[0].position
    }
  }
}
</script>

<style lang="scss" scoped>
// 地图为异步加载，需要为容器设置高度，否则地图无法显示
.amap-map {
  width: 100%;
  height: 486px;
}
.toggle-img {
  width: 80px;
  height: 80px;
  position: absolute;
  left: 5px;
  color: red;
  z-index: 999;
  font-size: 40px;
}
</style>
