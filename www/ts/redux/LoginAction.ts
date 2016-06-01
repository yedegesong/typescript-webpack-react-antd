import Config from '../pub/Config';
import Tool from '../pub/Tool';
import LocalStorage from '../pub/LocalStorage';
import Api from '../pub/Api';
import {Tips, Dialog} from '../components/index';
/**
 * 登录模块
 */
function LoginAction(account?:string,password?:string) {
	/**
	 * 处理登录逻辑
	 */
	if(account == 'admin'&&password == '123456'){
		let auth ={"AdvAccount_ID":35,"CityID":115,"LOGIN_ID":"admin","ROLE_ID":17,"USER_ID":154,"pass":true}
		LocalStorage.add('cw_auth', auth);
		Tool.goPush('Api');
		return false;
	}
	Tips({
				message:'账号或者密码错误',
				type: 2
			});
}

export {
	LoginAction
}