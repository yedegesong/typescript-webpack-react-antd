import { BASE_MENU, SWITCH_MENU, GET_ACTIVE, ACTIVE_MENU, CHANGE_ACTIVE} from '../actions/MenuAction';
import Tool from '../../pub/Tool';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */
const MenuState =
	{
		active: { parent: -1, child: -1 },
		menuSwitch: true,
		menuList: []
	}

export default function MenuReducers(state = MenuState, action) {
	switch (action.type) {
		case BASE_MENU:
			return Tool.assign({}, state, action.state);
		case SWITCH_MENU:
			return Tool.assign({}, state, { menuSwitch: action.menuSwitch });
		case CHANGE_ACTIVE:
			return Tool.assign({}, state, { active: action.active });
		default:
			return state
	}
}
