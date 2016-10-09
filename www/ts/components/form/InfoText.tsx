import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
export default class InfoText extends React.Component<any, any> {
    /**
     * 表单布局 块布局(默认),水平布局(horizontal),行内布局(inline)
     * @type {{type: string}}
     */

    constructor(props) {
        super(props);
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children, horizontal, inline, className} = this.props;
        let addClassName = className;
        let Cls = classNames(
            `${css_prefix}-info-text`,
            {
                [`${addClassName}`]: className
            });
        return (<div className = {Cls} {...this.props}>
            {children}
        </div>
        );
    }

}