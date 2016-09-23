import * as React from "react";
import {connect} from 'react-redux';
import {AppHeader, AppMenu} from '../index';
import Detect from '../../pub/Detect';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
let detect = new Detect();
let adCls = detect.os.phone ? `${css_prefix}-layout-mobile-main` : `${css_prefix}-layout-pc-main`;
interface AppBodyProps {
    MenuReducers?: any;
    children?: any;
    component?:symbol;
}
export default class AppBody extends React.Component<any,any> {
    
    constructor(props){
        super(props);
    }
    /**
     * body 主容器 包括头部和菜单 <AppHeader /> <AppMenu  />
     */
    render() {
        let {children,meu_reducers,hed_reducers,actions} = this.props;
        let Cls = meu_reducers.menuSwitch ? adCls : adCls + " off";
        return (<div className={`${css_prefix}-body`}>
                    <AppHeader meu_reducers={meu_reducers} hed_reducers={hed_reducers} actions = {actions}/>
                    <div className = { Cls }>
                        <AppMenu />
                        <div className={`${css_prefix}-container`}>
                            {children}
                        </div>
                    </div>
                </div>
                    );
    }

}

/*let mapStateToProps = (state) => {
    return {
        MenuReducers: state.MenuReducers
    }
}*/

//export default connect(mapStateToProps)(AppBody);