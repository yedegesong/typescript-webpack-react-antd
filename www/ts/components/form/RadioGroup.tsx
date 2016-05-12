import * as React from "react";
import * as classNames from "classnames";
/**
 * 面板组件
 */
interface RadioGroupProps {
    className?: string;
}
export default class RadioGroup extends React.Component<RadioGroupProps, any> {
    static defaultProps = {
        options: [],
        defaultValue: []
    }

    constructor(props) {
        super(props);

    }


    render() {
        let {children,className} = this.props;
        let addClassName = className;
        let Cls = classNames('cwgj-form-redio-group', { [`${addClassName}`]: className });
        return (
            <div className = {Cls}>
                {children}
            </div>
        );
    }
}
