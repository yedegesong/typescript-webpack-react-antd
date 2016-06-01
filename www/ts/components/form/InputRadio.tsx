import * as React from "react";
import * as classNames from "classnames";
/**
 * 面板组件
 */
interface InputRadioProps {
    checked?: boolean;
    className?: string;
    onChange?: Function;
    disabled?: boolean;
    value?: any;
    defaultChecked?: any;
    name?: string;
    id?: string;
    label?: string;
}
export default class InputRadio extends React.Component<InputRadioProps, any> {

    static defaultProps = {
        className: '',
        disabled: false
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (event.target.checked && this.props.onChange) {
            this.props.onChange(event, this)
        }
    }

    render() {
        const {className, label} = this.props;
        let addClassName = className;
        let Cls = classNames('cwgj-form-radio-container', { [`${addClassName}`]: className });
        return (
            <div className = {Cls}>
                <label className="cwgj-form-input-radio" for={this.props.id}>
                    <input
                        {...this.props}
                        type="radio"
                        onChange={(event) => { this.handleClick(event) } }
                        name={this.props.name}
                        id={this.props.id}/>
                    <span>{label}</span>
                </label>
            </div>
        );
    }

    /**
     * 解决二次渲染值回填
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ defaultChecked: nextProps.defaultChecked });
    }
}