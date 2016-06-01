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
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    handleButton(type?:number){
        Tips({
            message:'我是提醒信息',
            type:type
        });
    }

    render() {

        return (
            <AppBody>
                <Panel title="全局提示-按钮面板">
                    <Buttons onClick = {() => this.handleButton() } >显示普通</Buttons>
                    <Buttons onClick = {() => this.handleButton(1) } >成功</Buttons>
                    <Buttons onClick = {() => this.handleButton(2) } >报错</Buttons>
                    <Buttons onClick = {() => this.handleButton(3) } >警告</Buttons>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction({ parent: 8, child: 0}))
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



