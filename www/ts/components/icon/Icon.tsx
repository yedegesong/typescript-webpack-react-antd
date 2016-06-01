import * as React from "react";
import * as classNames from "classnames";

export default class Icon extends React.Component<any,any> {

    constructor(props){
        super(props);
        
    }

    render() {
        const {type, size,display, className} = this.props;
        let typeButton = 'icon-';
        let addClassName = className;
        let Cls = classNames('icon iconfont',{
            [`${typeButton}${type}`] : true,
            [`${addClassName}`]: className
        });
        return (<i className={Cls}></i>);
    }

}