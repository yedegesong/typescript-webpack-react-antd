/**
 * Created by apple on 16/7/28.
 */
//API接口 配置模块 全局注入
(function(){
        //全局路径
        function basePath (){
                return 'http://127.0.0.1:9090'
        }
        //全局Api地址
        function baseApiPath(){
                return 'http://127.0.0.1:9090'
                //return 'https://yedegesong.github.io/ERP'
        }

        window.applicationConfig = {
                TelBaseUrl: basePath () + '/dist/pages/',
                version:'4.0.0',
                ApiBaseUrl:  baseApiPath ()
        }
})(window);