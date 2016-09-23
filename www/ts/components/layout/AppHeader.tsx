import * as React from "react";
import {connect} from 'react-redux';/*
import {switchMenu} from '../../redux/actions/MenuAction';*/
import {loginOutAction} from '../../redux/actions/HeaderAction';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface AppHeaderProps {
    meu_reducers?:any;
    hed_reducers?:any;
    actions?:any;
    menuComponent?:symbol;
}
export default class AppHeader extends React.Component<AppHeaderProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            authSwitch:false
        }
    }
    /**
     * 点击切换菜单
     */
    handleSwitch(event){
        let {meu_reducers,actions} = this.props;
        if(meu_reducers.menuSwitch){
            actions.switchMenu(false);
            return false;
        }
        actions.switchMenu(true);
    }
    /**
     * 点击切换头部菜单
     */
    handleAuthSwitch(event){
        if (this.state.authSwitch){
            this.setState({ authSwitch :false})
        }else{
            this.setState({ authSwitch: true })
        }
    }
    /**
     * 点击退出
     */
    exit(){
        loginOutAction();
    }
    
    render() {
        let {hed_reducers,actions,menuComponent} = this.props;
        let auchUserName = hed_reducers.LOGIN_ID;
        let cls = this.state.authSwitch ? `${css_prefix}-auth on` : `${css_prefix}-auth `;
        return (
            <div className={`${css_prefix}-layout-header`}>
                <div className={`${css_prefix}-header-container`}>
                    <div className={`${css_prefix}-logo`}>
                        组件管理系统
                    </div>
                    <div className={`${css_prefix}-menu-switch`} onClick = {(event) => this.handleSwitch(event)}>
                        <span></span>
                    </div>
                    <div className={cls}>
                        <h3 onClick = {(event) => this.handleAuthSwitch(event) }>欢迎您&nbsp;:&nbsp;{auchUserName}</h3>
                        <div className={`${css_prefix}-auth-menu`}>
                            {menuComponent}
                            <div>
                                <p onClick = {this.exit.bind(this)} >退出</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
    componentDidMount() {
        let {hed_reducers, actions} = this.props;
        console.log(actions)
        actions.getAuthAction();
    }
}