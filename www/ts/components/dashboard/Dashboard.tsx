import * as React from "react";
import * as classNames from "classnames";
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
        let typeButton = 'cwgj-dash-color-';
        let addClassName = className;
        let Cls = classNames('cwgj-dash-stat',{
            [`${typeButton}${type}`] : true,
            [`${addClassName}`]: className
        });
        return (<div className = {Cls}>
                    <div className="cwgj-dash-stat-cont">
                        <div className="cwgj-dash-stat-main">{label}</div>
                        <div className="cwgj-dash-stat-sub">{children}</div>
                    </div>
                </div>
                    );
    }

}