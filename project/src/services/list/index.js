import request from '../../utils/request';
//获取活动
export function getActivity(params){
    console.log(params)
    return request.post('/getStore.form',params);
}


