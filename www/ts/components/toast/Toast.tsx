import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface ToastProps {
    tips?:string;
    autoClose?:boolean;
}
const _toastHolder = document.createElement('div');
document.body.appendChild(_toastHolder);

 class Toast extends React.Component<ToastProps,any> {

    static defaultProps = {
        tips: '正在加载中...',
        autoClose:false
    }

    constructor(props){
        super(props);
    }

    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        return(
            <div className={`${css_prefix}-loading-block`}>
                <div className={`${css_prefix}-loading-cnt`}>
                    <i className={`${css_prefix}-loading-bright`}></i>
                    <p>{this.props.tips}</p>
                </div>
            </div>
        );
    }

}

export default {

    open(config?:any) {
        ReactDOM.render(
            <Toast {...config} />,
            _toastHolder
        );
    },

    close() {
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(_toastHolder);
        }, 15);
    }

};