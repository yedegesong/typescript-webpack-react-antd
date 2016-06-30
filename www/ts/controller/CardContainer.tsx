import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({  });
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBody>
                <Panel  title="卡片">
                    <Row>
                        <Col span='33' >
                            <div className="cwgj-grid">
                                <div className="cwgj-grid-img">
                                    <a href="#">
                                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                    </a>
                                </div>
                                <div className="cwgj-grid-group">
                                    <div className="cwgj-grid-title cwgj-nowrap">标题</div>
                                    <div className="cwgj-grid-date cwgj-nowrap cwgj-text-muted">啊发顺丰</div>
                                    <div className="cwgj-grid-info">
                                        展示: <span className="cwgj-text-danger">3</span>次,
                                        点击: <span className="cwgj-text-danger">2</span>次
                                    </div>
                                    <div className="cwgj-grid-button">
                                        <Buttons>按钮</Buttons>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction())
    }

    componentWillUnmount():void {
        
    }
}

let mapStateToProps = (state) => {
    return {
        MenuReducers: state.MenuReducers
    }
}

/**
 * 添加监听数据
 */
const App = connect(mapStateToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    ElementContainer
);



