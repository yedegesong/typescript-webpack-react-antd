import * as React from "react";
import * as classNames from "classnames";
/**
 * 面板组件
 */
interface InputSelectProps {
    value?: string;
    className?: string;
    onChange?: Function;
    defaultChecked?:any;
    defaultValue?:any;
    name?: string;
    items?: any[];
    disabled?: any;
}
export default class InputSelect extends React.Component<InputSelectProps,any> {

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
          
            return (<option value={item.value} key={i}>{item.label}</option>);
        });
    }

    render() {
        let inputClassName = "cwgj-form-input-select";
        const {value, name, items,className} = this.props;
        let addClassName = className;
        let Cls = classNames('cwgj-form-select-container', { [`${addClassName}`]: className });
        return (
            <div className={Cls}>
                <select
                    {...this.props}
                    name={name}
                    value={this.state.value}
                    className={inputClassName}
                    onChange={this.handleChange}>
                    <option value="-1">请选择</option> 
                    {items && items.length >= 1 ? this.renderItems() : false}
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
