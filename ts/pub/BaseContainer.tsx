import * as React from "react";
import {config} from "./config";
export default class BaseComponent extends React.Component<any,any> {
    constructor(props){
        super(props);
    }
    
    componentDidMount(): void {
       document.title = config.title;
    }

    componentWillUnmount(): void {
       
    }
    
}
