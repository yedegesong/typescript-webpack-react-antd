import * as React from "react";
import * as classNames from "classnames";
export default class Col extends React.Component<any,any> {

    /**
     * 删格布局容器
     */
    render() {
        const {children,span,className} = this.props;
        let typeCol = 'cwgj-col-';
        let addClassName = className;
        let Cls = classNames('cwgj-col', {
            [`${typeCol}${span}`]: true,
            [`${addClassName}`]: className
        });
        return (<div className = {Cls} >
                    {children}
                </div>
                    );
    }

}