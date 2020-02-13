import { getData, } from "../../services"

export default {
    //命名空间
    namespaced: true,
    state: {
        box: {
        },
        listData:[],//行政区划信息
      
    },
    mutations: {
        setData(state,data){
            state.listData=data//行政区划信息
        },
    },
    getters:{
        // getPeopel(state){
        //     return state.listData.map(item=>item.name)
        // }
    },
    actions: {
        async getdata({commit}, payload) {
            let data = await getData(payload)
            commit("setData",data.data)//行政区划信息
            console.log(data.data)
            return data;
        }
    }
}