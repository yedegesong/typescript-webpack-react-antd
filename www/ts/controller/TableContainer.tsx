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
                <Panel  title="表格">
                    <div className="cwgj-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>名字</th>
                                    <th>操作</th>
                                    <th>名称</th>
                                    <th>名字</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>嘻嘻嘻</td>
                                    <td>表格5表格表格表格表格</td>
                                    <td>表格6表格表格表格</td>
                                    <td>嘻嘻嘻</td>
                                    <td>表格5表格表格表格表格</td>
                                    <td>表格6表格表格表格</td>
                                </tr>
                                <tr>
                                    <td>嘻嘻嘻</td>
                                    <td>表格5表格表格表格表格</td>
                                    <td>表格6表格表格表格</td>
                                    <td>嘻嘻嘻</td>
                                    <td>表格5表格表格表格表格</td>
                                    <td>表格6表格表格表格</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction({ parent: 2, child: -1 }))
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



