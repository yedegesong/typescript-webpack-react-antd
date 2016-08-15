import * as React from "react";
import {connect} from 'react-redux';
import Tool from '../../pub/Tool';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
import {getMenuAction, saveParentActive, saveChildActive,changeActiveAction} from '../../redux/actions/MenuAction';
const now_url = window.location.href.match(/(?:\w*)(?=.html)/);
interface AppMenuProps {
    active:number;
    MenuReducers: any;
    dispatch: Function;
    parentActive?: any;
    childActive?: any;
}

class AppMenu extends React.Component<AppMenuProps, any>{
     /**
     * 设置默认属性头部
     */
    //TODO: 添加默认属性static与redux会报错,尚未解决.纯组件状态下能结合
    /*static defaultProps = {
        parentActive: ACTIVE.parentActive.parentkey,
        childActive: ACTIVE.childActive.childkey
     }*/
     
    constructor(props){
        super(props);
        let {MenuReducers, dispatch} = this.props;
        //让当前函数this 指向到类本身
        this.createItem = this.createItem.bind(this);
        this.state = {
            parentActive: MenuReducers.active.parent,
            childActive: MenuReducers.active.child
        }
    }
    
    handleOrderTabClick(event, parentIndex, parentName,URL) {
        let {MenuReducers, dispatch} = this.props;
        let active_Json = { parentkey: parentIndex, parentvalue: parentName };
        saveParentActive(active_Json);
        if(URL.indexOf('#') == -1){
            Tool.goPush(URL);
        }else{
            if(Tool.hasClass(event.target.parentNode,'active')){
            Tool.removeClass(event.target.parentNode, 'active');
        }else{
            Tool.addClass(event.target.parentNode, 'active');
        }
        }
        //防止冒泡多次触发
        event.preventDefault();
        event.stopPropagation();
    }

    push(event,childIndex,childName,URL){
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction())
        let active_Json = { childkey: childIndex, childvalue: childName };
        saveChildActive(active_Json);
        Tool.goPush(URL);
        //防止冒泡多次触发
        event.preventDefault();
        event.stopPropagation();
    }

    createItem(item,index){
        let {MenuReducers, dispatch} = this.props;
        //判断是否存在子菜单
        let hasChild = item.subMunu.length > 0 ? true : false;
        let parentActive = MenuReducers.active.parent == index ? `${css_prefix}-menu-parent-item active` : `${css_prefix}-menu-parent-item`;
        let ParentUrl = item.url;
        return (
            <li key={index} className={ parentActive } >
                <h3 className = {hasChild ? 'on' : 'off'} data-href = {ParentUrl} onClick = {(event) => this.handleOrderTabClick(event, index, item.name, ParentUrl) }>{item.name}</h3>
                { hasChild ? (
                    <ul className={`${css_prefix}-menu-child`}>
                        {item.subMunu.map((childItem,childIndex) => {
                            let ChildUrl =  childItem.url;
                            let childActive = ChildUrl == now_url ? `${css_prefix}-menu-child-item chd-active` : `${css_prefix}-menu-child-item`;
                            return (<li key = {childIndex} className={childActive}>
                                <a href={URL} onClick = {(event) => this.push(event, childIndex, childItem.name, ChildUrl) }>{childItem.name}</a>
                                    </li>
                                    )
                        })}
                    </ul>) : null}
            </li>
        )
    }

    render(){
        let {MenuReducers, dispatch} = this.props;
        return (
          <div className={`${css_prefix}-menu`}>
              <ul className={`${css_prefix}-menu-parent`}>
                  {MenuReducers.menuList.map(this.createItem)}
              </ul>
          </div>
        );
  }

    componentDidMount() {
        let {dispatch} = this.props;
        /**
         * 读取菜单数据
         */
        dispatch(getMenuAction());
        
    }

}



let mapStateToProps = (state) => {
    return {
        MenuReducers: state.MenuReducers
    }
}

export default connect(mapStateToProps)(AppMenu);