import * as $ from 'jquery';
/*--服务类AJAX--*/
class Server {
    constructor() { }
    public static resource(type?: string, actionPath?: string, param?: {}) {
        let dtd = $.Deferred();
        $.ajax({
            type: type,
            url: actionPath,
            data: param,
            dataType: 'json',
            timeout: 30000,
            success: function(data) {
                if (data.status == 0) {
                    dtd.reject(data);
                } else {
                    //后台状态返回1 延迟加载成功
                    dtd.resolve(data);
                }
            },
            beforeSend: function(data) {

            },
            error: function(xhr, type) {

            }
        });
        return dtd.promise();
    }
} 

/*-工具类-*/
export default class Tool extends Server {
    constructor() { 
        super ()
    }
    
    static assign(...args) {
        //如果浏览器自带就调用自带的
        if(Object.assign){
            return Object.assign({},...args)
        }
        let from,
            target = args[0] || {},
            length = args.length;
        for (let i = 0; i < length; i++) {
            if ((from = args[i]) != null) {
                for (let key in from) {
                        target[key] = from[key];
                }
            }
        }
        return target;
    }
    /**
     * 判断否个对象是否存在这个键值
     */
    static hasPrototype(object : {}, name:string) {
        
            return object.hasOwnProperty ? object.hasOwnProperty(name) : (name in object);
        
    }
}