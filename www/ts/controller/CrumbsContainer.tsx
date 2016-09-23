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
    Icon,Dashboard,Crumbs} from '../components/index';
import {changeActiveAction,switchMenu} from '../redux/actions/MenuAction';
import {getAuthAction,loginOutAction} from '../redux/actions/HeaderAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({  });
let divStyle = {
    marginBottom: '10px',
};
class IndexApp extends BaseContainer {
    crumbs:Array<any>;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBody>
                    <Crumbs>
                        <li>首页</li>
                        <li>修改修改</li>
                        <li><a href="#">添加密码</a></li>
                    </Crumbs>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, Actions} = this.props;
        Actions.changeActiveAction();
    }

    componentWillUnmount():void {
        
    }

    /*shouldComponentUpdate(){
        return false
    }*/
}
let mapStateToProps = (state) => {
    return {
        HeaderReducer: state.HeaderReducer,
        MenuReducers: state.MenuReducers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators({
                 changeActiveAction,
                 switchMenu,
                 getAuthAction,
                 loginOutAction
             }, dispatch)
    };
}
/**
 * 添加监听数据
 */
const App = connect(mapStateToProps,mapDispatchToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    ElementContainer
);



