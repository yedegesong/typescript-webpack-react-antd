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
	 * 充值接口
	 */
	UserRecharge: (opts) => {
		return Server.resource('POST', 'POST_webadvalipaysubmit',
			{ payMoney: opts.payMoney, payType: opts.payType }
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
	},
	/**
	 * 广告中心所有API 
	 */
	 //获得城市
	LoadGetCity : () =>{
		//http://cwgjad1.api1.cheweiguanjia.com/js/common/sys_citys.js
		let city_Url = `${Config.fileBaseUrl}js/common/sys_citys.js`;
		return city_Url;
	},
	/**
	 * 广告中心所有API 
	 */
	//获得城市
	LoadGetBusinesscircle: (cityId) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_getbusinesscircle',
			{ cityId: cityId }
		);
	},
	/**
	 * 获取广告ID
	 */
	LoadGetAdvId:(opts) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_addadvert',
			{   delivery_channel: opts.delivery_channel,
				form_id:opts.form_id,
				sys_user_id:opts.sys_user_id,
				advNameText:opts.advNameText,
				biz_circle_id:opts.biz_circle_id
			 }
		);
	},
	/**
	 * 双渠道平台数据提交 
	 */
	DoubleCreateAdv: (opts) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_addadvertdetailallchannel',
			{   adv_content: opts.adv_content,
				adv_title:opts.adv_title,
				adv_content_img1:opts.adv_content_img1,
				adv_content_img2:opts.adv_content_img2,
				adv_id:opts.adv_id,
				choice:opts.choice,
				thirdHttp:opts.thirdHttp,
				target_users:opts.target_users,
				budgetMoney:opts.budgetMoney,
				budgetCount:opts.budgetCount,
				budgetType:opts.budgetType,
				adv_material:opts.adv_material
			 }
		);
	},
	/**
	 * 单渠道平台数据提交 
	 */
	SingleCreateAdv: (opts) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_addadvertdetail',
			{
				adv_content: opts.adv_content,
				adv_title: opts.adv_title,
				adv_content_img: opts.adv_content_img,
				adv_id: opts.adv_id,
				choice: opts.choice,
				thirdHttp: opts.thirdHttp,
				target_users: opts.target_users,
				budgetMoney: opts.budgetMoney,
				budgetCount: opts.budgetCount,
				budgetType: opts.budgetType,
				adv_material: opts.adv_material
			}
		);
	},
	/**
	 * 查询广告接口
	 */
	LoadQueryAdvert: (adv_id) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_queryadvert',
			{
				adv_id:adv_id
			}
		);
	},
	/**
	 * 修改内容单渠道 
	 */
	SingleEditorAdv: (opts) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_updateadvertdetail',
			{
				adv_title: opts.adv_title,
				adv_content_img: opts.adv_content_img,
				adv_id: opts.adv_id,
				detail_id: opts.detail_id,
				delivery_channel: opts.delivery_channel,
				target_users: opts.target_users,
				budgetMoney: opts.budgetMoney,
				budgetCount: opts.budgetCount,
				budgetType: opts.budgetType,
				advNameText: opts.advNameText
			}
		);
	},
	/**
	 * 查找微信，QQ图片 
	 */
	QueryDoubleImages: (adv_id) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_queryadvdetailallchannel',
			{
				adv_id: adv_id
			}
		);
	},
	/**
	 * 查找排期 
	 */
	QueryCalendar: (opts) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_adv_schedule_list',
			{
				adv_id: opts.adv_id,
				city_id: opts.city_id,
				circle_ids: opts.circle_ids
			}
		);
	},
	/**
	 * 修改内容双渠道 
	 */
	DoubleEditorAdv: (opts) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_updateadvdetailAllChannel',
			{
				adv_title: opts.adv_title,
				adv_content_img1: opts.adv_content_img1,
				adv_content_img2: opts.adv_content_img2,
				adv_id: opts.adv_id,
				detail_id: opts.detail_id,
				delivery_channel: opts.delivery_channel,
				target_users: opts.target_users,
				budgetMoney: opts.budgetMoney,
				budgetCount: opts.budgetCount,
				budgetType: opts.budgetType,
				advNameText: opts.advNameText
			}
		);
	},
	/***
		产品上下架
	*/
	AdvStatus: (opts) => {
		return Server.resource('POST', 'cwgjad_2016.0.0.1_user_center_set_adv_status_action',
			{
				advid: opts.advid,
				status: opts.status
			}
		);
	},
}

export default Api;