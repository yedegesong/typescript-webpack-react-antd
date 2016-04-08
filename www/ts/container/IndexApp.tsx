import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import { Button, Icon } from 'antd';
//自己书写的基类
import BaseContainer from '../pub/BaseContainer';
import AppHeader from '../components/layout/AppHeader';
import AppMenu from '../components/layout/AppMenu';

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="cw-body">
                   <AppHeader />
                    <div className="cw-layout-main">
                        <AppMenu />
                        <div className="cw-container">
                            <h3>我是首页</h3>
                        </div>
                    </div>
                </div>
                    );
    }

    componentDidMount():void {

    }
    
    componentWillUnmount():void {
        
    }
}

function mapStateToProps(state) {
    return {
        state: state.posts
    }
}

export default connect(mapStateToProps)(IndexApp);


