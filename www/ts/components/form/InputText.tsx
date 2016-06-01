import * as React from "react";
import * as classNames from "classnames";
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
        let inputClassName = "cwgj-form-input";
        const {value, name, addonAfter, addonBefore,className} = this.props;
        let addClassName = className;
        let Cls = classNames('cwgj-form-text-container', {
            'addonBefore': addonAfter && addonBefore,
            'addonAfter': addonAfter || addonBefore,
            [`${addClassName}`]: className
        });
        return (
            <div className={Cls}>
                {addonBefore ? < div className="cwgj-input-group-addon">{addonBefore}</div> : false}
                <input
                    {...this.props}
                    value={this.state.value}
                    className={inputClassName}
                    onChange={this.handleChange}/>
                {addonAfter ? < div className="cwgj-input-group-addon">{addonAfter}</div> : false}
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
