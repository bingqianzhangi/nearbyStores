import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import list from './list';
import map from './modules/map';
import CreateLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    list,
    map
  },
  plugins: [CreateLogger()]
});
