//import * as $ from 'jquery';
import Config from './Config';
import Toast from '../components/toast/Toast';
import LocalStorage from './LocalStorage';
/*--服务类AJAX--*/
class Server {
    private url:string;
    private version:string;
    constructor(serverConfig) {
        this.url = serverConfig.url;
        this.version = serverConfig.version;
    }
    /**
     * 发送类型:type:POST,GET.
     * 请求接口id:service_id:'cwgjad_2016.0.0.1_userlogin'
     * 参数:{}
     */
     resource(url: string,param: {},type = 'POST'): any {
        let dtd = $.Deferred();
        //如果存在token 就在headers 中带上token
        let auth_token = LocalStorage.get('auth_token');
        let headers_param = {
            "version":this.version,
            "token":auth_token ? auth_token.token : ''
        };
        $.ajax({
            type: type,
            url: `${this.url}${url}`,
            data: param,
            headers:headers_param,
            timeout: 100000000,
            dataType:'json',
            traditional: true,//这里设置为true
            success: function(data) {
                if(data.resultCode == 200){
                    dtd.resolve(data);
                }
                
                if(data.resultCode == 403){
                    alert('没用权限')
                }

                if(data.resultCode == 404){
                    alert('参数错误')
                }
                Toast.close();
            },
            beforeSend: function(data) {
                Toast.open({ tips: '数据加载中...' });
            },
            error: function(data, textStatus, errorThrown) {
                Toast.close();
            },
            complete:function(){
                Toast.close();
            }
        })
        return dtd.promise();
    }
}

/**
 * url:API 路径
 * app_type:类型
 * varName : 版本
 */
let server = new Server({
    url:Config.ApiBaseUrl,
    version:Config.version
});

export default server;