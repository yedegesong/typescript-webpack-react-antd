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
    
    callback(value, index) {
          console.log(value)
        console.log(index);
    }

    render() {
        return (
            <AppBody>
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



