import * as React from "react";
import * as classNames from "classnames";
/**
 * 面板组件
 */
interface InputCheckboxProps {
    checked?: boolean;
    className?: string;
    onChange?: Function;
    disabled?: boolean;
    defaultChecked?:any;
    value?: any;
    name?:string;
    id?:string;
    label?:string;
    ref?:any;
}
export default class InputCheckbox extends React.Component<InputCheckboxProps, any> {

    static defaultProps = {
        className : '',
        checked:false
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(event) {
       this.setState({checked: !this.state.checked});
        if(this.props.onChange) {
            let checked = this.state.checked ? false : true;
            /**
             * 回调将状态和值返回
             */
            this.props.onChange({
                target: {
                    checked
                },
                stopPropagation() {
                    event.stopPropagation();
                },
                preventDefault() {
                    event.preventDefault();
                },
            })
        };
    }

    render() {
        const {className,label} = this.props;
        let addClassName = className;
        let Cls = classNames('cwgj-form-checkbox-container', { [`${addClassName}`]: className });
        return (
            <div className = {Cls}>
                <label className="cwgj-form-input-checkbox" for={this.props.id}>
                    <input
                        {...this.props}
                        type="checkbox"
                        onChange={(event)=>{this.handleChange(event)}}
                        name={this.props.name}
                        checked={this.state.checked}
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
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked,
            });
        }
    }
}
