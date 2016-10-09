import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
export default class Row extends React.Component<any,any> {

    /**
     * 删格布局容器
     */
    render() {
        const {children,type,size,display,style,className} = this.props;
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-row`, {
            [`${addClassName}`]: className
        });
        return (<div className = {Cls} style={style}>
                    {children}
                </div>
                    );
    }

}