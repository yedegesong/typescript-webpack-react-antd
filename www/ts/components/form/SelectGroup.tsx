import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
/**
 * 面板组件
 */
interface SelectGroupProps {
    value?: string;
    className?: string;
    onChange?: Function;
    defaultChecked?:any;
    defaultValue?:any;
    name?: string;
    data?: any[];
    disabled?: any;
}
export default class SelectGroup extends React.Component<any,any> {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: this.props.value
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (this.props.onChange) this.props.onChange(event,this);
    }

    renderItems() {
        return this.props.items.map((item, i) => {
            return <optgroup label={item.label} key = {i}>
                {item.options.map((items, key) => {
                    return <option value={items.value} key={key}>{items.label}</option>
                }) }
                    </optgroup>
        });
    }

    render() {
       
        let inputClassName = `${css_prefix}-form-input-select`;
        const {value, name, items,className} = this.props;
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-form-select-container`, { [`${addClassName}`]: className });
        return (
            <div className={Cls}>
                <select
                    {...this.props}
                    value={value}
                    name={name}
                    className={inputClassName}
                    onChange={this.handleChange}>
                    <option value="-1">请选择</option> 
                    {items && items.length >= 1 ? this.renderItems() : false}
                </select>
            </div>
        );
    }
}
