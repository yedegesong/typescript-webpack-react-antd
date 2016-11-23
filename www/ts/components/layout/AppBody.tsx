import * as React from "react";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import {AppHeader, AppMenu} from '../index';
import Detect from '../../pub/Detect';
import ComponentsConfig from "../ComponentsConfig";
import {switchMenu,query_menu} from '../../redux/actions/MenuAction';
import {getAuthAction,loginOutAction} from '../../redux/actions/HeaderAction';
const css_prefix = ComponentsConfig.css_prefix;
let detect = new Detect();
let adCls = detect.os.phone ? `${css_prefix}-layout-mobile-main` : `${css_prefix}-layout-pc-main`;

class AppBody extends React.Component<any,any> {
    
    constructor(props){
        super(props);
    }
    /**
     * body 主容器 包括头部和菜单 <AppHeader /> <AppMenu  />
     */
    render() {
        let {children,MenuReducers,HeaderReducer,Actions} = this.props;
        let Cls = MenuReducers.menuSwitch ? adCls : adCls + " off";
        return (<div className={`${css_prefix}-body`}>
                    <AppHeader meu_reducers={MenuReducers} hed_reducers={HeaderReducer} actions = {Actions}/>
                    <div className = { Cls }>
                        <AppMenu menu_reducers = {MenuReducers} actions = {Actions} />
                        <div className={`${css_prefix}-container`}>
                            {children}
                        </div>
                    </div>
                </div>
                    );
    }

    componentDidMount():void {
        let {MenuReducers, Actions} = this.props;
    }
}

let mapStateToProps = (state) => {
    return {
        HeaderReducer: state.HeaderReducer,
        MenuReducers: state.MenuReducers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators({
                 switchMenu,
                 getAuthAction,
                 query_menu,
                 loginOutAction
             }, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(AppBody);