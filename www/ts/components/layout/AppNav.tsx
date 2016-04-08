import * as React from "react";
interface NavProps {
    item: string;
}
export default class AppNav extends React.Component<NavProps,any> {
    constructor(props){
        super(props);
    }

    render() {
        //console.log(this.props.item)
        return (
            <div className="cw-nav">

                <ul>
                    <li>车位管家车主端11{this.props.item}</li>
                    <li>车位管家客户端</li>
                    <li>车位管家车场端</li>
                </ul>
            </div>
        )
    }
    componentDidMount() {
    }
}