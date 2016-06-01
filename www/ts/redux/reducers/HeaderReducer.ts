import { GET_AUTH} from '../actions/HeaderAction';
import Tool from '../../pub/Tool';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */
const HeaderState =
	{
		LOGIN_ID: ''
	}

export default function HeaderReducer(state = HeaderState, action) {
	switch (action.type) {
		case GET_AUTH:
			return Tool.assign({}, state, action.state);

		default:
			return state
	}
}



