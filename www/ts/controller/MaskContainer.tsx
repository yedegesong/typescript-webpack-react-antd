import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,
    Mask} from '../components/index';
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
        if(type ==1){
            Mask.close();
        }else{
            Mask.open();
        }
        
    }

    render() {

        return (
            <AppBody>
                <Panel title="全局提示-加载中按钮面板">
                    <Buttons onClick = {() => this.handleButton() } >打开遮罩</Buttons>
                    <Buttons onClick = {() => this.handleButton(1) } >关闭遮罩</Buttons>
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
        IndexReducers: state.IndexReducers
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



