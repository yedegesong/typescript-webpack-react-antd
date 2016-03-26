/**
 * Created by apple on 16/3/25.
 */
import * as React from "react";
export class HelloComponent extends React.Component<any, any> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}