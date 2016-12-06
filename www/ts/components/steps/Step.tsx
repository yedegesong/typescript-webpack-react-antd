import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

export default class Step extends React.Component<any,any> {

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
         const {children, className,active} = this.props;
        let Cls = classNames(`steps-item`, {
            [`${className}`]: className,
            'on':active
        });
        return (    <div className={Cls} {...this.props}>
                            <div className="steps-tail">
                                <i></i>
                            </div>
                            <div className="steps-step">
                                <b>{this.props.delNo}</b>
                                {this.props.children}
                            </div>
                        </div>
                    );
    }

}