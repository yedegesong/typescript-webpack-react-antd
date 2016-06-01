import * as React from "react";
import * as classNames from "classnames";
interface ButtonsProps {
    onClick?: Function;
    className?: string;
    type?: any;
    display?: any;
    size?: any;
    style?: any;
    disabled?: any;
}
export default class Buttons extends React.Component<ButtonsProps,any> {

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
        let typeButton = 'cwgj-btn-';
        let addClassName = className;
        let Cls = classNames('cwgj-btn',{
            [`${typeButton}${type}`] : true,
            'cwgj-btn-block':display&&display=='block',
            'cwgj-btn-lg':size&&size=='large',
            'cwgj-btn-sm':size&&size=='small',
            [`${addClassName}`]: className
        });
        return (<button  {...this.props} className = { Cls }  onClick={(event) => this.handleClick(event) }>
                    {children}
                </button>
                    );
    }

}