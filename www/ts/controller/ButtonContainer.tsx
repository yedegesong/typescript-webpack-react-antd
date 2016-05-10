import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons} from '../components/index';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
import { activeMenuAction} from '../redux/actions/MenuAction';
const store = BaseStore({  });
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    handleButton(){
        let {MenuReducers, dispatch} = this.props;
        dispatch(activeMenuAction({ parent: 4, child: 0 }));
    }

    render() {

        return (
            <AppBody>
                <Panel title="按钮面板">
                    <Buttons>默认default</Buttons>
                    <Buttons type = "primary" onClick = {() => this.handleButton() } >首选primary</Buttons>
                    <Buttons type = "success">成功success</Buttons>
                    <Buttons type = "danger">危险danger</Buttons>
                    <Buttons type = "info">一般info</Buttons>
                    <Buttons type = "warning">警告warning</Buttons>
                </Panel>
                <Panel title="按钮尺寸面板">
                    <Buttons type = "primary" size="large">大号按钮</Buttons>
                    <Buttons type = "primary" >中号按钮(默认)</Buttons>
                    <Buttons type = "primary" size="small">小号按钮</Buttons>
                </Panel>
                <Panel title="按钮块尺寸面板">
                    <Buttons display = "block" >默认default</Buttons>
                    <Buttons type = "primary" display = "block" onClick = {() => this.handleButton() } >首选primary</Buttons>
                    <Buttons type = "success" display = "block" >成功success</Buttons>
                    <Buttons type = "danger" display = "block" >危险danger</Buttons>
                    <Buttons type = "info" display = "block" >一般info</Buttons>
                    <Buttons type = "warning" display = "block" >警告warning</Buttons>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
       
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



