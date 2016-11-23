import Server from './Server';
/**
 * 整站API模块
 */
const Api = {
	/**
	 * 登录接口
	 */
	login: (opts) => {
		return Server.resource('/test/login.json',
			{
				username: opts.username,
				password: opts.password,
				auto: opts.auto
			}, 'GET'
		);
	},
	/**
	 * 获取用户权限菜单
	 */
	menu: () => {
		return Server.resource('/test/menu.json',
			{
				
			}, 'GET'
		);
	},
	/**
	 * 退出登录
	 */
	exit:() => {
		return Server.resource('/user/logout',
			{
				
			}, 'POST'
		);
	}
}

export default Api;