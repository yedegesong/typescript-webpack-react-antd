import Config from '../pub/Config';
import Tool from '../pub/Tool';
import LocalStorage from '../pub/LocalStorage';
import Api from '../pub/Api';
import { Tips, Dialog } from '../components/index';

const GET_FORM = 'GET_FORM';
const IS_SHOW_CODE = 'IS_SHOW_CODE';
let OnUpdate = (submit_data) => {
	return { type: GET_FORM, submit_data }
}

let OnUpdata_code = (code) => {
	return { type: IS_SHOW_CODE, code }
}

export let ChangeDataAction = (data) => {
	return (dispatch, getState) => {
		dispatch(OnUpdate(data))
	}
}
/**
 * 登录验证
 */
export let LoginAction = (opts) => {
	
	return (dispatch, getState) => {
		Api.login(opts)
			.then(function (callbackData) {
				console.log(callbackData)
				if (callbackData.resultCode == 200) {
					//登录成功信息保存在本地
					let token = { token: callbackData.token ,username:opts.username}
					Tool.goPush('index');
					LocalStorage.add('auth_token', token);
				} else {
					if (callbackData.code) {
						dispatch(OnUpdata_code({ is_show_code: true, code: callbackData.code }));
					} else {
						Tips({
							message: '账号或者密码错误',
							type: 2
						});
					}
				}
			})
	}

}

const LoginState =
	{
		submitDate: {
			username: '',
			password: '',
			auto: false
		}
	}
export function LoginReducer(state = LoginState, action) {
	switch (action.type) {
		case GET_FORM:
			return Tool.assign({}, state, { submitDate: action.submit_data });
		case IS_SHOW_CODE:
			return Tool.assign({}, state, {
				submitDate: {
					is_show_code: action.code.is_show_code,
					code: action.code.code
				}
			});
		default:
			return state
	}
}