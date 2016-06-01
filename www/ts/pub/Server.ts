//import * as $ from 'jquery';
import Config from './Config';
import Toast from '../components/toast/Toast';
/*--服务类AJAX--*/
class Server {
    private url:string;
    private content:{};
    private contentBody:{};
    private appType:string;
    private varName:string;
    constructor(serverConfig) {
        this.url = serverConfig.url;
        this.appType = serverConfig.appType;
        this.varName = serverConfig.varName;
        this.content = {};
        this.contentBody = {};
    }
    /**
     * 发送类型:type:POST,GET.
     * 请求接口id:service_id:'cwgjad_2016.0.0.1_userlogin'
     * 参数:{}
     */
     resource(type: string,service_id:string,param: {}): any {
         /*if(param){
             for( let p in param){
                this.content[p] = param[p];
            }
         }*/
         
         this.contentBody = {
             service_id : service_id,
             app_type   : this.appType,
             ver_name   : this.varName,
             content: param
         }
        
        let dtd = $.Deferred();
        $.ajax({
            type: type,
            url: this.url,
            data: {
                content:JSON.stringify(this.contentBody)
            },
            dataType:'text',
            timeout: 100000000,
            success: function(data) {
                dtd.resolve(JSON.parse(data));
                Toast.close();
            },
            beforeSend: function(data) {
                Toast.open({ tips: '数据加载中...' });
            },
            error: function(data, textStatus, errorThrown) {
                console.log(JSON.stringify(data));
                console.log(errorThrown);
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
    appType:Config.appType,
    varName:Config.varName
});

export default server;