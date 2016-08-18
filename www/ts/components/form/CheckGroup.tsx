import * as React from "react";
import InputCheckbox from './InputCheckbox';
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
/**
 * 面板组件
 */
interface CheckGroupProps {
    options:any[];
    checked?: boolean;
    className?: string;
    onChange?: any;
    disabled?:any;
    defaultChecked?:any;
    defaultValue?:any;
    labelOptions?: any;
    value?: any;
}
export default class CheckGroup extends React.Component<any, any> {
    checkedValue: any;
    static defaultProps = {
        options: [],
        defaultValue: [],
        onChange() {},
    }

    constructor(props) {
        super(props);
        this.toggleOption = this.toggleOption.bind(this);
        this.checkedValue = [];
        let value;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue || [];
        }
        this.state = { value };
    }

    getOptions():any{
        const { options} = this.props;
        return options.map(option => {
            if (typeof option === 'string') {
                return {
                    label: option,
                    value: option
                };
            }
            return option;
        });
    }

    componentWillReceiveProps(nextProps) {
         if ('value' in nextProps) {
             this.setState({
                 value: nextProps.value || [],
             });
         }
    }

    toggleOption(option) {
        const optionIndex = this.state.value.indexOf(option.value);
        const value = [...this.state.value];
        if (optionIndex === - 1) {
            value.push(option.value);
        } else {
           value.splice(optionIndex, 1);
        }

        if (!('value' in this.props)) {
            this.setState({ value });
        }
        this.props.onChange(value);
    }

    render() {
        const options = this.getOptions();
        let addClassName = this.props.className;
        let Cls = classNames(`${css_prefix}-form-checkbox-group`, { [`${addClassName}`]: this.props.className });
        return (
            <div className = {Cls}>
                {
                    options.map(option =>
                        <InputCheckbox
                            disabled={'disabled' in option ? option.disabled : this.props.disabled}
                            checked={this.state.value.indexOf(option.value) !== -1}
                            onChange={() => this.toggleOption(option)}
                            label = {option.label}
                            value = {option.value}
                            key={option.value} />
                    )
                }
            </div>
        );
    }

}
