import * as React from "react";
import * as classNames from "classnames";
import Radio from './InputRadio';
/**
 * 面板组件
 */
interface RadioGroupProps {
    className?: string;
    onChange?: any;
    defaultChecked?: any;
}
export default class RadioGroup extends React.Component<RadioGroupProps, any> {
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
        let {className, onChange} = this.props;
        const children = React.Children.map(this.props.children, (radio:any):any => {
            return React.cloneElement(radio, { 
                onChange: onChange
                 })
        });
        let addClassName = className;
        let Cls = classNames('cwgj-form-redio-group', { [`${addClassName}`]: className });
        return (
            <div className = {Cls}>
                {children}
            </div>
        );
    }
}
