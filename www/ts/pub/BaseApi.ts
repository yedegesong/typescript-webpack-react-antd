import promise from './Promise';
/**
 * 整站API模块
 */
const BaseApi = {
	/**
	 * 登录接口
	 */
    login:(account,password)=>{
        return promise.resource('post', 'forum/652/topics/2043801',
            { "account": account, "password": password });
    },
    /**
	 * 数据回填接口
	 */
    backfill: () => {
        return promise.resource('post', 'TextApi.php',
            { });
    }
}

export default BaseApi;