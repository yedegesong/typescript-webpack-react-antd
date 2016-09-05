import * as React from "react";
import classNames from "classnames";
import Tool from '../../pub/Tool';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
declare let WdatePicker;
export default class Calendar extends React.Component<any,any> {

    constructor(props){
        super(props);
        
    }

    handleChange(event){
        //this.setState({ value: event.target.value });
        if (this.props.onChange) this.props.onChange(event, this);
    }
    
    render(){
        let {config,placeholder} = this.props;
        return (
            <div className="ui-calendar-container">
                <input type="text" className="ui-calendar" placeholder={placeholder} defaultValue = '' ref={function(input) {
                      if (input != null) {
                        input.addEventListener('click',(event)=>{
                           WdatePicker(Tool.assign({el:input},config))
                        });
                      }
                    }} />
            </div>
        );
    }
}
