import Tool from '../pub/Tool';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */
const GET_FORM = 'GET_FORM';


let Ontext = (data) => {
	return { type: GET_FORM, data }
}

// export let GetDataAction = () => {
// 	return (dispatch, getState) => {
		
//     }
// }
export let ChangeDataAction = (data) => {
	return (dispatch, getState) => {
		console.log(data)
		dispatch(Ontext(data))
     }
}

const HeaderState =
	{
		submitDate: {
			accout: '我是默认默认',
            password: '123456',
            password_repeat: '123456',
            city: '福州',
            delivery_channel: '2',
            Interest: ['1','2'],
            phone: '12345678910',
            email: '277527478@qq.com',
            bank: '1234567891023'
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



