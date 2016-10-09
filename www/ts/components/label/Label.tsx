import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

export default class Label extends React.Component<any,any> {

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
        const {children,style,className,leftcompont,leftText,title,info,tips} = this.props;
        let addClassName,Cls;
            Cls = classNames(`${css_prefix}-label`,{
            [`${addClassName}`]: className
        });
        return (<div className={Cls} onClick={(event) => this.handleClick(event) }>
                                <div className={`${css_prefix}-label-box box-align`}>
                                    <div className={`${css_prefix}-label-left`}>
                                        {
                                            leftcompont ? leftcompont : <div className={`${css_prefix}-label-text`}>{leftText}</div>
                                        }
                                    </div>
                                    <div className={`${css_prefix}-label-content`}>
                                        <div className={`${css_prefix}-label-title`}>{title}</div>
                                        <div className={`${css_prefix}-label-info`}>{info}</div>
                                    </div>
                                </div>
                                {
                                    tips ? <div className={`${css_prefix}-label-tips`}>{tips}</div> : null
                                }
                                
                            </div>
                    );
    }

}