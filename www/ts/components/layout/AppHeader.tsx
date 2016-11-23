import * as React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from '../icon/Icon';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface AppHeaderProps {
    meu_reducers?:any;
    hed_reducers?:any;
    actions?:any;
    menuComponent?:any;
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
        let {hed_reducers,actions} = this.props;
        actions.loginOutAction();
    }
    
    createMenu(){
        let {hed_reducers,actions} = this.props;
        return (
            <div>
                <div className="menu-header">
                    <div className="user-img">
                        <img src="/images/header.png" />
                    </div>
                    <div className="user-info">
                        <p>{hed_reducers.username}</p>
                        <p>UI设计师，产品部</p>
                    </div>
                    <div className="user-out" onClick = {this.exit.bind(this)}>注销</div>
                </div>
            </div>
        )
    }

    render() {
        /*<div>
           <p onClick = {this.exit.bind(this)} ><Icon type='dc'/>退出</p>
        </div>*/
        let {hed_reducers,actions,menuComponent} = this.props;
        let username = hed_reducers.username;
        let cls = this.state.authSwitch ? `${css_prefix}-auth on` : `${css_prefix}-auth `;
        return (
            <div className={`${css_prefix}-layout-header`}>
                <div className={`${css_prefix}-header-container`}>
                    <div className={`${css_prefix}-logo`}>
                         车位管家
                    </div>
                    <div className={`${css_prefix}-menu-switch`} onClick = {(event) => this.handleSwitch(event)}>
                        <span></span>
                    </div>
                    <div className={cls}>
                        <h3 onClick = {(event) => this.handleAuthSwitch(event) }>欢迎您&nbsp;:&nbsp;{username}</h3>
                        <div className={`${css_prefix}-auth-menu`}>
                            {this.createMenu()}
                        </div>
                    </div>
                </div>
            </div>)
    }
    componentDidMount() {
        let {hed_reducers, actions} = this.props;
        actions.getAuthAction();
    }
}