import * as React from "react";

import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

export default class Echarts extends React.Component<any,any> {
    
    constructor(props){
        super(props);
    }R
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children} = this.props;
        return (<div className={`${css_prefix}-baidu-echarts`}>
                    {children}
                </div>
                    );
    }

}