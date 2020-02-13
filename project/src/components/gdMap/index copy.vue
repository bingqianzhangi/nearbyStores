<template>
  <div class='gdMap'>
    <div id="all-map" class="map"></div>
    <van-action-sheet v-model="baseShow" :actions="actions"> </van-action-sheet>
    <!-- <div class="mapFooter" v-if="baseShow">44444444444</div> -->
  </div>
</template>
<script>
import AMap from "AMap";
import AMapUI from "AMapUI";
import { ActionSheet } from "vant";
export default {
  props: {},
  components: {
    [ActionSheet.name]: ActionSheet
  },
  data() {
    return {
      gps: [116.368904, 39.923423],
      center: [
        [116.368904, 39.923423],
        [116.382122, 39.921176],
        [116.387271, 39.922501],
        [116.398258, 39.9146]
      ],
      baseShow: false,
      actions: [
        { name: "选项" },
        { name: "选项" },
        { name: "选项", subname: "描述信息" }
      ]
    };
  },
  computed: {},
  methods: {
    GaodeMap() {
      var map = new AMap.Map("all-map", {
        center: this.gps, // [纬度，经度]
        resizeEnable: true,
        zoom: 10
      });
      var infoWindow = new AMap.InfoWindow({
        // content:'<div>高德地图</div>',
        offset: new AMap.Pixel(0, -30)
      });
      for (var i = 0; i < this.center.length; i++) {
        var marker = new AMap.Marker({
          position: this.center[i],
          map: map
        });
        // marker.setMap(map);
        // marker.content = "我是第" + (i + 1) + "个Marker";
        // marker.content =  `<van-action-sheet v-model="this.baseShow">4545</van-action-sheet>`;
      }
      marker.on("click", markerClick);
      // marker.emit("click", { target: marker });
      function markerClick(e) {
        this.baseShow = true;
        console.log(this.baseShow, "11111");
        // infoWindow.setContent(e.target.content);
        // infoWindow.open(map, e.target.getPosition());
      }
      //放大缩小
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
    }
  },
  created() {},
  mounted() {
    this.GaodeMap();
  }
};
</script>
<style scoped lang="scss">
.map {
  width: 100%;
  height: 486px;
}

.mapFooter {
  width: 100%;
  height:5rem;
  z-index: 99;
  position: absolute;
  top: 3.6rem;
  left: 0rem;
}
</style>
