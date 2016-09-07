import Tool from '../pub/Tool';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */
const AccordionState =
	{
		data:{
			name:'小明'
		}
	}
export function AccordionReducer(state = AccordionState, action) {
	switch (action.type) {
		default:
			return state
	}
}



