import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface ButtonsProps {
    onClick?: Function;
    className?: string;
    type?: any;
    display?: any;
    size?: any;
    style?: any;
    disabled?: any;
}
export default class Buttons extends React.Component<any,any> {

    static defaultProps = {
        type:'default'
    }

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
        const {children, type, size,display, className} = this.props;
        let typeButton,ui_btn_block,ui_btn_lg,addClassName,ui_btn_sm,Cls;
            typeButton = `${css_prefix}-btn-`;
            ui_btn_block = `${css_prefix}-btn-block`;
            ui_btn_lg = `${css_prefix}-btn-lg`;
            ui_btn_sm = `${css_prefix}-btn-sm`;
            addClassName = className;
            Cls = classNames(`${css_prefix}-btn`,{
            [`${typeButton}${type}`] : true,
            [`ui-btn-block`]:display&&display=='block',
            [`ui-btn-lg`]:size&&size=='large',
            [`ui-btn-sm`]:size&&size=='small',
            [`${addClassName}`]: className
        });
        return (<button  {...this.props} className = { Cls }  onClick={(event) => this.handleClick(event) }>
                    {children}
                </button>
                    );
    }

}