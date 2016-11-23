import { QUERY_MENU, SWITCH_MENU } from '../actions/MenuAction';
import Tool from '../../pub/Tool';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */
const MenuState =
	{
		parent: 0,
		child: 0,
		menuSwitch: true,
		menuList: [
			{
				"name": "账号权限管理",
				"subMunu": [
					{
						"name": "用户管理",
						"url": "user_management"
					},
					{
						"name": "角色管理",
						"url": "role_management"
					}
				],
				"url": "#"
			}
		]
	}

export default function MenuReducers(state = MenuState, action) {
	switch (action.type) {
		case QUERY_MENU:
			return Tool.assign({}, state, {
				parent: action.menu.parent,
				child: action.menu.child,
				menuList: action.menu.menuList,
			});
		case SWITCH_MENU:
			return Tool.assign({}, state, { menuSwitch: action.menuSwitch });
		default:
			return state
	}
}
