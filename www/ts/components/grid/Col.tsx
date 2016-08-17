import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

export default class Col extends React.Component<any,any> {
    /**
     * 删格布局容器
     */
    render() {
        const {children,span,className} = this.props;
        let typeCol = `${css_prefix}-col-`;
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-col`, {
            [`${typeCol}${span}`]: true,
            [`${addClassName}`]: className
        });
        return (<div className = {Cls} >
                    {children}
                </div>
                    );
    }

}