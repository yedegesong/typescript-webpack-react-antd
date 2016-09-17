/**
 * Created by apple on 16/7/28.
 */
//API接口 配置模块 全局注入
(function(){
        function basePath (){
                return 'http://127.0.0.1:9090'
                //return 'http://cwgjad1.api1.cheweiguanjia.com/'
        }
        window.applicationConfig = {
                /**
                 配置URL 切换
                 **/
                BaseUrl:basePath (),
                TelBaseUrl: basePath () + '/pages/',
                ApiBaseUrl:  basePath () + 'act',
                version:'1.1.0',
                appType:102,
                varName:'3.3.0'
        }
})(window);