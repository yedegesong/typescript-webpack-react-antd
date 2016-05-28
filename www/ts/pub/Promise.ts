//import * as $ from 'jquery';
import * as superagent from "superagent";
import * as request from "superagent-bluebird-promise";
import ApiConfig from './ApiConfig';
import Toast from '../components/toast/Toast';
/*--服务类AJAX-Promise--*/
class Promise {
    constructor() {

    }
    
    resource(type: string, url: string, param: {}): any {

        Toast.open({ tips: '数据加载中...' });

        let Url = url.indexOf('http') === 0? url : ApiConfig.ApiBaseUrl + url;
      
        return request[type](Url).query(param).promise().then((res) => {
            if (res && res.text) {
                return JSON.parse(res.text);
            }
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            Toast.close();
        })
    }
}

/**
 * url:API 路径
 * app_type:类型
 * varName : 版本
 */
let promise = new Promise();

export default promise;