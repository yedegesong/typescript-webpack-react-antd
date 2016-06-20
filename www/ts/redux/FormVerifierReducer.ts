import Tool from '../pub/Tool';
import BaseApi from '../pub/BaseApi';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */
const GET_FORM = 'GET_FORM';


let Ontext = (data) => {
	return { type: GET_FORM, data }
}

export let GetDataAction = () => {
	return (dispatch, getState) => {
		BaseApi.backfill().then(function(data){
			dispatch(Ontext(data.data));
		})
    }
}
export let ChangeDataAction = (data) => {
	return (dispatch, getState) => {
		dispatch(Ontext(data));
    }
}

const HeaderState =
	{
		submitDate: {
			accout: '我是默认默认',
            password: '',
            password_repeat: '',
            city: '-1',
            delivery_channel: '-1',
            Interest: [],
            phone: '',
            email: '',
            bank: ''
		}
	}
export function FormVerifierReducer(state = HeaderState, action) {
	switch (action.type) {
		case GET_FORM:
		
			return Tool.assign({}, state, { submitDate: action.data });
		default:
			return state
	}
}



