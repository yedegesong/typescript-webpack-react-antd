import * as React from "react";
import classNames from "classnames";

import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
/**
 * 面板组件
 */
interface RadioGroupProps {
    className?: string;
    onChange?: Function;
    defaultChecked?: any;
    value:string;
}
export default class RadioGroup extends React.Component<any, any> {
    static defaultProps = {
        disabled: false,
        onChange() {
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        let {className,value, onChange} = this.props;
        const children = React.Children.map(this.props.children, (radio:any):any => {
            return React.cloneElement(radio, { 
                    onChange: onChange,
                    checked:radio.props.value == value ? true : false
                 })
        });
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-form-redio-group`, { [`${addClassName}`]: className });
        return (
            <div className = {Cls}>
                {children}
            </div>
        );
    }
}
