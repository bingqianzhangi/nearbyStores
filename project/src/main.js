import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';
import { Area } from 'vant';
import { Popup } from 'vant';

import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'eb605077eef73b671cf4f018e45585ee',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ]
});

Vue.use(Popup);

Vue.use(Area);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app');
