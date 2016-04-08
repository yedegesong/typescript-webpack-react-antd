import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import App from '../container/IndexApp'
import {BaseStore} from '../redux/store/BaseStore';
/*import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin.default()*/
//数据流向
let store = BaseStore({  });
//TODO: 统一返回元素入口 为什么App不写在一个页面上因为会无法触发到初始化函数mapStateToProps方法
let ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    ElementContainer
);

