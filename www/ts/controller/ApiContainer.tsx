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
    Col,
    Icon,Dashboard} from '../components/index';
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
                <Row>
                    <Col span="50" >
                        <Panel  title="面板-字体辅助" >
                            <div>
                                <div>默认色</div>
                                <div className="ui-text-primary">主色调</div>
                                <div className="ui-text-info">次色调</div>
                                <div className="ui-text-succe">删除色</div>
                                <div className="ui-text-error">删除色</div>
                                <div className="ui-text-wring">警告色</div>
                            </div>
                        </Panel>
                    </Col>
                <Col span="50">
                    <Panel  title="面板-字体位置">
                        <div>
                            <div className="ui-text-left">我是文字位置左</div>
                            <div className="ui-text-center">我是文字位置中</div>
                            <div className="ui-text-right">我是文字位置右</div>
                        </div>
                    </Panel>
                </Col>
                </Row>
                <Panel title="面板-指示牌">
                    <Row className="userCenter-list">
                                    <Col span='25'>
                                    <Dashboard label={1} type="a">
                                            总点击次数(次)
                                        </Dashboard>
                                    </Col>
                                    <Col span='25'>
                                    <Dashboard label={2} type="b">
                                            总展示次数(次)
                                        </Dashboard>
                                    </Col>
                                    <Col span='25'>
                                    <Dashboard label={3} type="c">
                                            总广告费(元)
                                        </Dashboard>
                                    </Col>
                                    <Col span='25'>
                                    <Dashboard label={ 4} type="d">
                                            目前广告正在展示数(条)
                                        </Dashboard>
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

    /*shouldComponentUpdate(){
        return false
    }*/
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



