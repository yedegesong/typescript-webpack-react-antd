import Tool from '../../pub/Tool';
import Config from '../../pub/Config';
import LocalStorage from '../../pub/LocalStorage';
//import menu from './menu';
import Api from '../../pub/Api';
const now_url = window.location.href.match(/(?:\w*)(?=.html)/);
import {menuData} from './menu';
console.log(menuData)
/**
 * 菜单初始化获取值
 */
const QUERY_MENU = 'QUERY_MENU';
/**
 * 切换菜单状态
 */
const SWITCH_MENU = 'SWITCH_MENU';

/**
 * 显示菜单视图
 */
let OnGetMenu = (menu) => {
    return { type: QUERY_MENU, menu };
}

/**
 * 切换菜单视图
 */
let switchMenu = (menuSwitch) => {
    return { type: SWITCH_MENU, menuSwitch };
}

/***
 * 获取菜单并且将当前页面高亮
 */
let query_menu = () => {
    return (dispatch, getState) => {
        let parent_index: number;
        let child_index: number;
        let menuList = [];
        let subMunu = [];
       
            $.each(menuData.data, (keyIndex, value) => {
                menuList.push({
                    name: value.titleMap.privilegeName,
                    url: value.titleMap.privilegeUrl,
                    subMunu: []
                })
                $.each(value.childMap, (childIndex, childValue) => {
                    menuList[keyIndex].subMunu.push({
                        name: childValue.privilegeName,
                        url: childValue.privilegeUrl
                    })
                })
            })

            menuList.map((parentItem,parentIndex)=>{
                parentItem.subMunu.map((childItem,childIndex)=>{
                    if(childItem.url ==now_url[0]){
                        parent_index = parentIndex;
                        child_index = childIndex;
                    }
                })
            })
            dispatch(OnGetMenu({parent:parent_index,child:child_index,menuList:menuList}));
        
    }
}
export {
    QUERY_MENU,
    SWITCH_MENU,
    switchMenu,
    query_menu
}