import * as React from "react";
import classNames from "classnames";

import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
/**
 * 面板组件
 */
interface InputSelectProps {
    value?: string;
    className?: any;
    onChange?: Function;
    defaultChecked?:any;
    defaultValue?:any;
    name?: string;
    data?: any[];
    disabled?: any;
}
export default class InputSelect extends React.Component<any,any> {

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
        return this.props.data.map((item, i) => {
          
            return (<option value={item.value} key={i}>{item.label}</option>);
        });
    }

    render() {
        let inputClassName = `${css_prefix}-form-input-select`;
        let {value, name, data,className} = this.props;
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-form-item-container`,
         { [`${addClassName}`]: className });
        return (
            <div className={Cls}>
                <select
                    {...this.props}
                    name={name}
                    value={this.state.value}
                    className={inputClassName}
                    onChange={this.handleChange}>
                    <option value="-1">请选择</option> 
                    {data && data.length >= 1 ? this.renderItems() : false}
                </select>
            </div>
        );
    }
    
    /**
     * 解决二次渲染值回填
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value });
    }
    
}
