import Tool from '../../pub/Tool';
import LocalStorage from '../../pub/LocalStorage';
import menu from './menu';
/**
 * 菜单初始化获取值
 */
const BASE_MENU = 'BASE_MENU';
/**
 * 切换菜单状态
 */
const SWITCH_MENU = 'SWITCH_MENU';
/**
 * 菜单热点
 */
const GET_ACTIVE = 'GET_ACTIVE';
/**
    高亮菜单
**/
const ACTIVE_MENU = 'ACTIVE_MENU';

/**
    动态修改菜单高亮部分
**/
const CHANGE_ACTIVE = 'CHANGE_ACTIVE';
/**
 * 显示菜单视图
 */
let OnGetMenu = (state) => {
    return { type: BASE_MENU, state };
}

/**
 * 切换菜单视图
 */
let switchMenu = (menuSwitch) => {
    return { type: SWITCH_MENU, menuSwitch };
}

let OnchangeActive = (active) => {
    return { type: CHANGE_ACTIVE, active };
}


/**
 * 保存当前父热点状态
 */
let saveParentActive = (saveData) => {
    LocalStorage.add('cw_parent_active', saveData);
}

/**
 * 保存当前子热点状态
 */
let saveChildActive = (saveData) => {
    //console.log(saveData);
    LocalStorage.add('cw_child_active', saveData);
}

/**
 * 获取本地存储的状态
 */
let changeActiveAction = (changeActive:{}) => {
    return (dispatch, getState) => {
        dispatch(OnchangeActive(changeActive));
    }
}
/**
 * 获取本地存储的状态
 */
let getActive = () =>{
    let parentActive = LocalStorage.get('cw_parent_active');
    let childActive = LocalStorage.get('cw_child_active');
    /**
     * 只存在父元素
     */
    if (parentActive && childActive === null) {
        return { parentActive: parentActive, childActive: { childkey: -1, childvalue: '' } };
    }
    /**
     * 存在父元素，子元素
     */
    if (parentActive && childActive){
        return { parentActive: parentActive, childActive: childActive };
    }
    /**
     * 默认什么都不点击的情况
     */
    return {parentActive: { parentkey:-1, parentvalue:'' },childActive: { childkey:-1, childvalue:'' } };
}

/**
 * 获取菜单数据，如果存在读取本地数据。
 */
function getMenuAction(reddit?: any) {
    
    return (dispatch, getState) => {
        let _data = LocalStorage.get('cw_menu');
        /**
         * 如果本地存在就取本地数据，否则获取服务器数据。
         */
        if (_data) {
            dispatch(OnGetMenu(_data));
            return false;
        }
           LocalStorage.add('cw_menu', menu);
           dispatch(OnGetMenu(menu));
    }
}

export {
    BASE_MENU,
    SWITCH_MENU,
    GET_ACTIVE,
    ACTIVE_MENU,
    CHANGE_ACTIVE,
    getMenuAction,
    switchMenu,
    getActive,
    saveParentActive,
    saveChildActive,
    changeActiveAction
}