import * as React from "react";
import * as classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface FormItemsProps {
    label?: string;
    className?: string;
    default?:any;
    help?:string;
    BtnFormItems?:any;
    require?:any;
}
export default class FormItems extends React.Component<FormItemsProps,any> {
    
    constructor(props){
        super(props);
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children, label, className,help,require,BtnFormItems} = this.props;
        let addClassName = className;
        let contenCls = classNames(`${css_prefix}-form-items`, { 'BtnFormItems':BtnFormItems,[`${addClassName}`]: className });
        let Cls = classNames(`${css_prefix}-form-label`);
        let labelTel = label ? (<label className={Cls}><span>{require?<strong className="require">*</strong>:false}{label}</span></label>) : false;
        let helpTips = help ? (<div className={`${css_prefix}-form-items-help`}>{help}</div>) : false;
        return (<div className={contenCls}>
                    {labelTel}
                    {children}
                    {helpTips}
                </div>
                    );
    }

}