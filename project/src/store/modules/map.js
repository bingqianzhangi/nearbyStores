const state = {
  markers: [],
  markersTmp: []
};

const getters = {
  markers(state) {
    return state.markers;
  }
};

const mutations = {
  SET_MARKERS(state, data) {
    state.markers = handelMapData(data);
    state.markersTmp = state.markers;
  }
};

// 处理坐标节点
const handelMapData = data => {
  let arr = [];
  data.forEach(item => {
    arr.push({
      position: [item.longitude, item.latitude],
      events: {
        click: () => {
          alert(item.name);
        }
      },
      visible: true,
      draggable: false,
      template: `<h1>${item.name}-->模板</h1>`
    });
  });
  return arr;
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
