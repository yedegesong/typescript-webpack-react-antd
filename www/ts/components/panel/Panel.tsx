import * as React from "react";
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
        const cls = className != undefined ? "cwgj-panel" + ` ${className}` : "cwgj-panel";
        let HTML = title ? (<div className="cwgj-panel-header">
                     <div className="cwgj-panel-title">{title}</div>
                     <div className="cwgj-panel-component">{ButtonComponent}</div>
              </div>) : null;
              return ( <div className={cls} >
                  {HTML}
                    <div className="cwgj-panel-content">
                        {children}
                    </div>
                </div>);
    }
}
