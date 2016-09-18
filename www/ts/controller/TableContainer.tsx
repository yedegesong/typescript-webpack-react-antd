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
    Col, Table, Icon} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';


import TableOne from './Table/TableOne';
import TableTwo from './Table/TableTwo';
import TableThree from './Table/TableThree';
import TableFour from './Table/TableFour';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({});

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);

    }

    render() {
       /*<Panel  title="表格 - 带操作数据展示 - 组件">
                    <TableOne />
                </Panel>
                <Panel  title="表格 - 手机分类数据展示">
                <TableTwo />
                </Panel>
          <Panel  title="表格 - 复选框(全选/反选)">
                    <TableThree />
                </Panel>
                <Panel title="表格 - 单选框表格组件">
                    <TableFour />
                </Panel>
                */
        return (
            <AppBody>
               <Panel  title="表格 - 带操作数据展示 - 组件">
                    <TableOne />
                </Panel>
                <Panel  title="表格 - 手机分类数据展示">
                <TableTwo />
                </Panel>
          <Panel  title="表格 - 复选框(全选/反选)">
                    <TableThree />
                </Panel>
                <Panel title="表格 - 单选框表格组件">
                    <TableFour />
                </Panel>
            </AppBody>
        );
    }

    componentDidMount(): void {
        let {MenuReducers, dispatch} = this.props;
        //dispatch(changeActiveAction())
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



