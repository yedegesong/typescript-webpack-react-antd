import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,
    Tabs,
    TabPane} from '../components/index';
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
    
    callback(value, index) {
          console.log(value)
        console.log(index);
    }

    render() {
        let {MenuReducers,HeaderReducer,Actions} = this.props;
        return (
            <AppBody meu_reducers={MenuReducers} hed_reducers = {HeaderReducer} actions = {Actions}>
                <Panel title="Tab切换效果">
                    <Tabs onChange = {(value, index) => this.callback(value, index) }>
                        <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
                        <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
                        <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
                    </Tabs>
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



