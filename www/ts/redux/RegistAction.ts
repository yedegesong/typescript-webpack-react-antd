import Config from '../pub/Config';
import Tool from '../pub/Tool';
import LocalStorage from '../pub/LocalStorage';
import Api from '../pub/Api';
import {Tips, Dialog} from '../components/index';

let dialog = ()=>{
	let buyConfirm = (modal) => {
		Tool.goPush('login');
		modal.close();
	}

	let actions = [
		{ label: '取消' },
		{ label: '确定', onClick: buyConfirm, primary: true }
	]

	Dialog.show('注册成功，前去登录!', actions); 
}

/**
 * 注册模块
 */
function RegistAction(account?:string,password?:string) {

	Api.regist(account, password).then(function(data) {

		/**
		 * 注册成功
		 */
		if (data.r_msg == 'success' && data.r_content.flag) {
			dialog();
			return false;
		}
		/**
		 * 用户已存在
		 */
		if (data.r_msg == 'success' && !data.r_content.flag){
			Tips({
				message: '用户名已存在,请重新输入',
				type: 1
			});
			return false;
		}
	})
}

export {
	RegistAction
}