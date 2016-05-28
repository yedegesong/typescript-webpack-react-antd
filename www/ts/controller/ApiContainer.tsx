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
                <Panel  title="面板-字体辅助">
                    <div>
                        <div className="cwgj-text-muted">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="cwgj-text-primary">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="cwgj-text-info">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="cwgj-text-success">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="cwgj-text-danger">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="cwgj-text-warning">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                    </div>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction({ parent: 0, child: -1 }))
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



