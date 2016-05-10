import * as React from "react";
import {AppHeader, AppMenu} from '../index';
export default class AppBody extends React.Component<any,any> {
    
    constructor(props){
        super(props);
    }R
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children} = this.props;
        return (<div className="cwgj-body">
                    <AppHeader />
                    <div className="cwgj-layout-main">
                        <AppMenu  />
                        <div className="cwgj-container">
                            {children}
                        </div>
                    </div>
                </div>
                    );
    }

}