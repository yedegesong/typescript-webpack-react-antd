import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from 'react-redux';
import Tool from '../../pub/Tool';
import Icon from '../icon/Icon';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
//const now_url = window.location.href.match(/(?:\w*)(?=.html)/);

export default class AppMenu extends React.Component<any, any>{

    constructor(props) {
        super(props);
        let {menu_reducers, actions} = this.props;
        //让当前函数this 指向到类本身
        this.createItem = this.createItem.bind(this);
    }

    handleOrderTabClick(event, parentIndex, parentName, URL) {
        let {menu_reducers, actions} = this.props;
        let _DOM = ReactDOM.findDOMNode(this);
        let target = _DOM.childNodes[0].childNodes[parentIndex];
        if (URL.indexOf('#') == -1) {
            Tool.goPush(URL);
        } else {
            if (Tool.hasClass(target, 'active')) {
                Tool.removeClass(target, 'active');
            } else {
                Tool.addClass(target, 'active');
            }
        }
        //防止冒泡多次触发
        event.preventDefault();
        event.stopPropagation();
    }

    push(event, childIndex, childName, URL) {
        let {menu_reducers, actions} = this.props;
        Tool.goPush(URL);
        //防止冒泡多次触发
        event.preventDefault();
        event.stopPropagation();
    }

    createItem(item, index) {
        let {menu_reducers, dispatch} = this.props;
        //判断是否存在子菜单
        let hasChild = item.subMunu.length > 0 ? true : false;
        let ParentUrl = item.url;
        let active =  menu_reducers.parent == index ? `${css_prefix}-menu-parent-item active` : `${css_prefix}-menu-parent-item`;
        return (
            <li key={index} className={active}
                onClick = {(event) => this.handleOrderTabClick(event, index, item.name, ParentUrl) }
                >
                <h3 className = {hasChild ? 'on' : 'off'} data-href = {ParentUrl}>
                    {item.icon ? <Icon type={item.icon}/> : false}
                    {item.name}
                </h3>
                { hasChild ? (
                    <ul className={`${css_prefix}-menu-child`}>
                        {item.subMunu.map((childItem, childIndex) => {
                            let ChildUrl = childItem.url;
                            let childActive = menu_reducers.child == childIndex &&menu_reducers.parent == index? `${css_prefix}-menu-child-item chd-active` : `${css_prefix}-menu-child-item`;
                            return (<li key = {childIndex} className={childActive}>
                                <a onClick = {(event) => this.push(event, childIndex, childItem.name, ChildUrl) }>
                                    {childItem.icon ? <Icon type={childItem.icon}/> : false}
                                    {childItem.name}
                                </a>
                            </li>
                            )
                        }) }
                    </ul>) : null}
            </li>
        )
    }

    render() {
        let {menu_reducers, actions} = this.props;
        return (
            <div className={`${css_prefix}-menu`}>
                <ul className={`${css_prefix}-menu-parent`}>
                    {menu_reducers.menuList.map(this.createItem) }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        let {actions} = this.props;
        actions.query_menu();
    }

}
