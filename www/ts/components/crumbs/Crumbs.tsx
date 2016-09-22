import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

export default class Crumbs extends React.Component<any,any> {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if ( this.props.onClick) {
            this.props.onClick(event);
        }
    }

    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {className,data,children} = this.props;
            let addClassName = className;
            let Cls = classNames(`${css_prefix}-crumbs`,{
            [`${addClassName}`]: className
        });
        return (<div className={Cls}>
                    <ul>
                        {children}
                    </ul>
                 </div>
                    );
    }

}