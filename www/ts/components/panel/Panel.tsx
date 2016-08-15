import * as React from "react";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
/**
 * 面板组件
 */
export default class Panel extends React.Component<any,any> {
    
    constructor(props){
        super(props);
    }
    
    render(){
        const {children, className, title, component} = this.props;
        let ButtonComponent = component ? component : false;
        const cls = className != undefined ? `${css_prefix}-panel` + ` ${className}` : `${css_prefix}-panel`;
        let HTML = title ? (<div className={`${css_prefix}-panel-header`}>
                     <div className={`${css_prefix}-panel-title`}>{title}</div>
                     <div className={`${css_prefix}-panel-component`}>{ButtonComponent}</div>
              </div>) : null;
              return ( <div className={cls} >
                  {HTML}
                    <div className={`${css_prefix}-panel-content`}>
                        {children}
                    </div>
                </div>);
    }
}
