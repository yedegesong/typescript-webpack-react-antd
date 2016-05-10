import Server from './Server';
import Config from './Config';

/**
 * 整站API模块
 */
const Api = {
	/**
	 * 登录接口
	 */
    login:(account,password)=>{
        return Server.resource('POST','cwgjad_2016.0.0.1_userlogin',
         	{ "account": account, "password": password }
		);
    },
	/**
	 * 注册接口
	 */
	regist:(account,password)=>{
        return Server.resource('POST','cwgjad_2016.0.0.1_user_regist',
         	{ "account": account, "password": password }
		);
    },
	/**
	 * 退出接口
	 */
	exit:()=>{
		return Server.resource('POST','cwgjad_2016.0.0.1_userloginout',
         	{}
		);
	},
	/**
	 * 判断用户资料是否完整
	 */
	userComplete:()=>{
		return Server.resource('POST', 'cwgjad_2016.0.0.1_check_userdata_complete_action',
         	{}
		);
	},
	/**
	 * 广告中心 - 我的广告列表
	 */
	loadUserCenterAdv: () => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_user_center_adv_record_action',
         	{}
		);
	}
}
export default Api;