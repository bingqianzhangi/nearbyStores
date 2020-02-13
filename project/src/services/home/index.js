import request from '../../utils/request';
//行政区划信息
export function getData(params){
    return request.post('/getStore.form',params);
}
