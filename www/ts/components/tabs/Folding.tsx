import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

export default class Folding extends React.Component<any, any> {

    render() {
        let {children} = this.props;
        console.log(this.props)
        return (
                <div className={`${css_prefix}-folding`}>
                {children}
                </div>
            )
    }

}