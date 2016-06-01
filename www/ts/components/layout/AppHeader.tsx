import * as React from "react";
import {connect} from 'react-redux';
import {switchMenu} from '../../redux/actions/MenuAction';
import {getAuthAction,loginOutAction} from '../../redux/actions/HeaderAction';
interface AppHeaderProps {
    MenuReducers: any;
    HeaderReducer: any;
    dispatch: Function;
}
class AppHeader extends React.Component<AppHeaderProps, any> {
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
        let {MenuReducers,dispatch} = this.props;
        if(MenuReducers.menuSwitch){
            dispatch(switchMenu(false));
            return false;
        }
        dispatch(switchMenu(true));
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
        let {HeaderReducer, dispatch} = this.props;
        let auchUserName = HeaderReducer.LOGIN_ID;
        let cls = this.state.authSwitch ? 'cwgj-auth on' : 'cwgj-auth ';
        return (
            <div className="cwgj-layout-header">
                <div className="cwgj-header-container">
                    <div className="cwgj-logo">
                        组件管理系统
                    </div>
                    <div className="cwgj-menu-switch" onClick = {(event) => this.handleSwitch(event)}>
                        <span></span>
                    </div>
                    <div className={cls}>
                        <h3 onClick = {(event) => this.handleAuthSwitch(event) }>欢迎您&nbsp;:&nbsp;{auchUserName}</h3>
                        <div className="cwgj-auth-menu">
                        <ul>
                            <li onClick = {this.exit.bind(this)} >退出</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>)
    }
    componentDidMount() {
        let {HeaderReducer, dispatch} = this.props;
        dispatch(getAuthAction());
    }
}

let mapStateToProps = (state) => {
    return {
        HeaderReducer: state.HeaderReducer,
        MenuReducers: state.MenuReducers
    }
}

export default connect(mapStateToProps)(AppHeader);