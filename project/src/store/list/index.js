import { getActivity } from "../../services"

export default {
    //命名空间
    namespaced: true,
    state: {
        box: {
        },
        ActivityData:[],//获取活动
    },
    mutations: {
        
        setActivity(state,data){
            state.ActivityData=data//获取活动
        }
        
    },
    getters:{
        // getPeopel(state){
        //     return state.listData.map(item=>item.name)
        // }
    },
    actions: {
        async getActivity({commit}, payload) {
            let data = await getActivity(payload)
            commit("setActivity",data.data)//获取活动
            console.log(data)
            return data;
        }
       /*  async getdata({commit}, payload) {
            let data = await getData(payload)
            commit("setData",data.data)//行政区划信息
            console.log(data)
            return data;
        } */
    }
}