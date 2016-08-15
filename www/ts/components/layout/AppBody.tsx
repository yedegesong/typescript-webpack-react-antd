import * as React from "react";
import {connect} from 'react-redux';
import {AppHeader, AppMenu} from '../index';
import Detect from '../../pub/Detect';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
let detect = new Detect();
let adCls = detect.os.phone ? `${css_prefix}-layout-mobile-main` : `${css_prefix}-layout-pc-main`;
class AppBody extends React.Component<any,any> {
    
    constructor(props){
        super(props);
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        let {MenuReducers, dispatch} = this.props;
        const {children} = this.props;
        let Cls = MenuReducers.menuSwitch ? adCls : adCls + " off";
        return (<div className={`${css_prefix}-body`}>
                    <AppHeader />
                    <div className = { Cls }>
                        <AppMenu  />
                        <div className={`${css_prefix}-container`}>
                            {children}
                        </div>
                    </div>
                </div>
                    );
    }

}

let mapStateToProps = (state) => {
    return {
        MenuReducers: state.MenuReducers
    }
}

export default connect(mapStateToProps)(AppBody);