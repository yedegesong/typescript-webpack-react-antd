import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
export default class Steps extends React.Component<any,any> {
    constructor(props){
        super(props);
    }

    tabConten() {
        let {onClick} = this.props;
       let width = 100/this.props.children.length;
        return React.Children.map(this.props.children, (c: any, index: any) => {
            return React.cloneElement(c,{style:{'width':`${width}%`},onClick: ()=>{onClick(index)},})
        });
        /**--遍历组件--**/
    }
    /**
     * 步骤面板组件
     */
    render() {
        const {className,data,children} = this.props;
            let addClassName = className;
            let Cls = classNames(`${css_prefix}-steps`,{
            [`${addClassName}`]: className
        });
        return (<div className={Cls}>
                       {this.tabConten()} 
               </div>
             );
    }

}