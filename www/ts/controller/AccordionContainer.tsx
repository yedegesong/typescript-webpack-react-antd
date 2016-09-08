import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,Icon,FormGroup,FormItems,InputText,Calendar,Folding,FoldingPane} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';

import {AccordionReducer} from '../redux/AccordionReducer';
console.log(ReactDOM)
const store = BaseStore({AccordionReducer});
//declare let WdatePicker;
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
                        // <AccPanel tab="选项卡一" key="1">选项卡一内容</AccPanel>
                        // <AccPanel tab="选项卡二" key="2">选项卡二内容</AccPanel>
                        // <AccPanel tab="选项卡三" key="3">选项卡三内容</AccPanel>
        return (
            <AppBody>
                <Panel title="手风琴面板">
                  <Folding>
                        <FoldingPane header = "面板一" key ={'0'}>
                            <div>11</div>
                            <div>22</div>
                            <Folding>
                        <FoldingPane header = "面板一" key ={'0'}>
                            <div>11</div>
                            <div>22</div>
                        </FoldingPane>
                        <FoldingPane header = "面板二" key = {'1'}>
                            <div>33</div>
                            <div>44</div>
                        </FoldingPane>
                  </Folding>
                        </FoldingPane>
                        <FoldingPane header = "面板二" key = {'1'}>
                            <div>33</div>
                            <div>44</div>
                        </FoldingPane>
                  </Folding>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        //dispatch(changeActiveAction())
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



