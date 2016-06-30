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
    Col, Tabel, Icon} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
import TableOne from './Table/TableOne';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({});

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <AppBody>
                <Panel  title="表格 - 带操作数据展示 - 组件">
                    <TableOne />
                </Panel>
            </AppBody>
        );
    }

    componentDidMount(): void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction())
    }

    componentWillUnmount(): void {

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



