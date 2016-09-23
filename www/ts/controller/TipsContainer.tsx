import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,
    Tips} from '../components/index';
import {changeActiveAction,switchMenu} from '../redux/actions/MenuAction';
import {getAuthAction,loginOutAction} from '../redux/actions/HeaderAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    handleButton(tips,type?:number){
        Tips({
            message:tips,
            type:type
        });
    }

    render() {
let {MenuReducers,HeaderReducer,Actions} = this.props;
        return (
            <AppBody meu_reducers={MenuReducers} hed_reducers = {HeaderReducer} actions = {Actions}>
                <Panel title="全局提示-按钮面板">
                    <Buttons onClick = {() => this.handleButton('我是普通显示') } >显示普通</Buttons>
                    <Buttons onClick = {() => this.handleButton('我是成功显示',1) } >成功</Buttons>
                    <Buttons onClick = {() => this.handleButton('我是报错显示',2) } >报错</Buttons>
                    <Buttons onClick = {() => this.handleButton('我是警告',3) } >警告</Buttons>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, Actions} = this.props;
        Actions.changeActiveAction();
    }
    
    componentWillUnmount():void {
        
    }
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



