import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
import InputText from './InputText';
import Icon from '../icon/Icon';
const css_prefix = ComponentsConfig.css_prefix;

export default class InputSearch extends React.Component<any,any> {

    static  defaultProps = {
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            value: this.props.value
        };
    }

    handleChange(event){
        this.setState({ value: event.target.value });
        
    }
    
    handleSearch(value){
        if (this.props.onChange) this.props.onChange(this.state.value);
    }

    render(){
        let inputClassName = `${css_prefix}-search-input`;
        const {value, name,className} = this.props;
        let addClassName = className;
        let Cls = classNames(`${css_prefix}-search-input`, {
            [`${addClassName}`]: className
        });
        return (
            <div className={Cls}>
                            <InputText type="test" onChange={this.handleChange}/>
                            <div className="btn-box" onClick={this.handleSearch}><Icon type="ssi" /></div>
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
