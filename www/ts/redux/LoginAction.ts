import Config from '../pub/Config';
import Tool from '../pub/Tool';
import LocalStorage from '../pub/LocalStorage';
import Api from '../pub/Api';
import {Tips, Dialog} from '../components/index';
/**
 * 登录模块
 */
function LoginAction(account?:string,password?:string) {
	Api.login(account, password).then(function(data) {
		/**
		 * 登录成功逻辑
		 */
		if (data.r_msg == 'success') {
			let auth = data.r_content;
			LocalStorage.add('cw_auth', auth);
			Tool.goPush('userCenter');
			return false;
		}

		Tips({
				message: data.r_msg,
				type: 2
			});
	});
}

export {
	LoginAction
}