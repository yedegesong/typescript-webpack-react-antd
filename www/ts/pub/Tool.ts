//import * as $ from 'jquery';
import Config from './Config';
import Toast from '../components/toast/Toast';
const TelBaseUrl = Config.TelBaseUrl;
/*--服务类AJAX--*/

/*-工具类-*/
export default class Tool{
    constructor() {}

    /**
     * 实现跳转功能，参数为跳转的路径 exLinks 为true 需传入整个URL 如:http://www.baidu.com
     */
    static goPush(path: string) {
        console.log(path)
        if (path.indexOf('http') != -1) {
            window.location.href = path;
            return false;
        }
        window.location.href = TelBaseUrl + path + '.html';
    }

    /**
     * 多个对象合并
     */
    static assign(...args) {
        /*if(Object.assign){
         return Object.assign({},...args)
         }*/
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
    static hasPrototype(object: {}, name: string) {

        return object.hasOwnProperty ? object.hasOwnProperty(name) : (name in object);

    }

    /**
     * 判断一个样式是否存在
     * @param ele
     * @param cls
     * @returns {RegExpMatchArray}
     */
    static hasClass(ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    /**
     * 添加样式
     * @param ele
     * @param cls
     */
    static addClass(ele, cls) {
        if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    }

    /**
     * 删除样式
     * @param ele
     * @param cls
     */
    static removeClass(ele, cls) {
        if (this.hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    }

    /**
     * 添加删除样式
     * @param ele
     * @param cls
     */
    static toggleClass(ele, cls) {
        if (this.hasClass(ele, cls)) {
            this.removeClass(ele, cls);
        } else {
            this.addClass(ele, cls);
        }
    }
    
    /**
     * 获取?后面所有参数
     */
    static getUrlParams():any {
        let url = window.location.search;
        let theRequest = new Object();
        if (url.indexOf("?") != -1) {
            let str = url.substr(1);
            let strs = str.split("&");
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    /**
     * 简易的内置验证
     */
    static verifier(verifier){
        let key = { isOk: true, tips :''};
        verifier.forEach(function(item,index){
            if (item.value.toString().trim().length <= 0) {
                key = { isOk: false, tips: item.tips};
                return false;
            }
        })
        return key;
    }

    //返回?后面指定的参数
    static getQueryString (Paras):any{
        return this.getUrlParams()[Paras]
    }
}