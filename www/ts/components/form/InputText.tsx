import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
/**
 * 面板组件
 */
interface InputTextProps {
    value?: string;
    className?: string;
    onChange?: Function;
    name?:string;
    type?:string;
    placeholder?:string;
    addonAfter?: any;
    addonBefore?: any;
    defaultValue?: any;
    id?: any;
}
export default class InputText extends React.Component<any,any> {

    static  defaultProps = {
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: this.props.value
        };
    }

    handleChange(event){
        this.setState({ value: event.target.value });
        if (this.props.onChange) this.props.onChange(event, this);
    }
    
    render(){
        let inputClassName = `${css_prefix}-form-input`;
        const {value, name, addonAfter, addonBefore,className} = this.props;
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-form-item-container`, {
            'addonBefore': addonAfter && addonBefore,
            'addonAfter': addonAfter || addonBefore,
            [`${addClassName}`]: className
        });
        return (
            <div className={Cls}>
                <div className="input-group">
                {addonBefore ? < div className={`input-group-addon`}>{addonBefore}</div> : false}
                <input
                    {...this.props}
                    value={this.state.value}
                    className={inputClassName}
                    onChange={this.handleChange}/>
                {addonAfter ? < div className={`input-group-addon`}>{addonAfter}</div> : false}
                </div>
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
