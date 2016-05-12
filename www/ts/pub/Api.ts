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
	 * 修改密码接口
	 */
	changePsd: (oldPassword, newPassword) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_modify_password_action',
			{ "oldPassword": oldPassword, "newPassword": newPassword }
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
	},
	/**
	 * 个人资料 - 保存个人资料
	 */
	SaveUserData: (sublimeData) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_add_user_data',
			sublimeData
		);
	},
	/**
	 * 个人资料 - 保存企业资料
	 */
	SaveDataQYData: (sublimeData) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_addcompany_data_action',
			sublimeData
		);
	},
	/**
	 * 获取用户资料接口
	 */
	GetUserData: () => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_query_adv_user_data_action',
			{}
		);
	},
	/**
	 * 获取企业资料接口
	 */
	GetCompanyData: () => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_query_company_data_action',
			{}
		);
	},
	/**
	 * 我的账户所有接口
	 */
	/**
	 * 当前几条广告正在展示
	 */
	AdvShowNum:()=>{
		return Server.resource('POST', 'cwgjad_2016.0.0.1_adv_on_show_action',
			{}
		);
	},
	/**
	 * 账户余额
	 */
	UserBalance:()=>{
		return Server.resource('POST', 'cwgjad_2016.0.0.1_getaccountbalance',
			{}
		);
	},
	/**
	 * 退款接口
	 */
	UserRefund: () => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_user_refund_action',
			{}
		);
	},
	/**
	 * 广告列表-指示牌
	 */
	billSign: () => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_userBillAllAdv_click_show_cost_action',
			{}
		);
	},
	/**
	 * 广告列表
	 */
	LoadAdvList:()=>{
		return Server.resource('POST', 'cwgjad_2016.0.0.1_bill_adv_record_action',
			{}
		);
	},
	/**
	 * 充值记录-指示牌
	 */
	billRecord: () => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_userSum_refund_charge_action',
			{}
		);
	},
	/**
	 * 充值记录列表
	 */
	LoadRecordList: () => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_bill_charge_record_action',
			{}
		);
	},
	/**
	 * 获取数据报表
	 */
	LoadReport:(advID)=>{
		return Server.resource('POST', 'cwgjad_2016.0.0.1_user_adv_circle_report_graph_action',
			{advID:advID}
		);
	},
	/**
	 * 获取数据报表- 指示牌
	 */
	LoadReportSign: (advID) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_adv_cost_and_balance_action',
			{ advID: advID }
		);
	},
	/**
	 * 获取数据报表标题
	 */
	LoadReportTitle: (advID) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_get_adv_title_action',
			{ advID: advID }
		);
	}
}
export default Api;