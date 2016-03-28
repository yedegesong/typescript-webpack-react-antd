import * as React from "react";
export default class AppHeader extends React.Component<any,any> {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="header-wrapper">
                <div className="am-topbar-brand">
                    车位管家ERP后台管理系统
                </div>
            </div>)
    }
}