import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface TabPaneProps {
    tab?: string;
    key?: any;
    props?: any;
}
export default class FoldingPane extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: 0
        }
    }

    createContent(){
        return React.Children.map(this.props.children, (c: any,index:any) => {
            return <div className = 'folding-item' >
                        <div className = 'folding-header'>我是头部</div>
                        <div className = 'folding-content'>我是身体</div>
                   </div>
        });
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children, className} = this.props;
        let Cls = classNames(`${css_prefix}-foldingpane`, {
            [`${className}`]: className
        });
        return (
            <div className={Cls}>
                   {this.createContent()}
                </div>)
    }

}