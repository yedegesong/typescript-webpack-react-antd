import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface DashboardProps {
    className?: string;
    type?:string;
    label?:any;
}
export default class Dashboard extends React.Component<any,any> {

    static defaultProps = {
        type:'default'
    }

    constructor(props){
        super(props);
        
    }

    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children,type,label,className} = this.props;
        let typeButton = `${css_prefix}-dash-color-`;
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-dash-stat`,{
            [`${typeButton}${type}`] : true,
            [`${addClassName}`]: className
        });
        return (<div className = {Cls}>
                    <div className={`${css_prefix}-dash-stat-cont`}>
                        <div className={`${css_prefix}-dash-stat-main`}>{label}</div>
                        <div className={`${css_prefix}-dash-stat-sub`}>{children}</div>
                    </div>
                </div>
                    );
    }

}