import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface TabPaneProps {
    tab?: string;
    key?: any;
    props?: any;
}
export default class TabPane extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: 0
        }
    }


    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children, className} = this.props;
        let Cls = classNames(`${css_prefix}-tabpane`, {
            [`${className}`]: className
        });
        return (
            <div className={Cls}>
                    {children}
                </div>)
    }

}