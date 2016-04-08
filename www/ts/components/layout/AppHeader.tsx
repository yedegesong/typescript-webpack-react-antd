import * as React from "react";
import {connect} from 'react-redux';
class AppHeader extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cw-layout-header">
                <div className="cw-color-line"></div>
                <div className="cw-header-container">
                    <div className="cw-logo">
                    </div>
                    <div className="cw-menu-switch">
                        <span></span>
                    </div>
                </div>
            </div>)
    }
    componentDidMount() {

    }
}

let mapStateToProps = (state) => {
    return {
        HeaderState: state.HeaderReducers
    }
}

export default connect(mapStateToProps)(AppHeader);