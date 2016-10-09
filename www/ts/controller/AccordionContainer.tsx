import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,Icon,FormGroup,FormItems,InputText,Calendar,Folding,FoldingPane} from '../components/index';
import {changeActiveAction,switchMenu} from '../redux/actions/MenuAction';
import {getAuthAction,loginOutAction} from '../redux/actions/HeaderAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';

import {AccordionReducer} from '../redux/AccordionReducer';
console.log(ReactDOM)
const store = BaseStore({AccordionReducer});
//declare let WdatePicker;
//数据流向
let header_menu = ()=>{
    return <ul>
                <li>个人资料</li>
                <li>修改密码</li>
                <li>充值</li>
                <li>充送</li>
            </ul>
}
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        let {MenuReducers,HeaderReducer,Actions} = this.props;
                        // <AccPanel tab="选项卡一" key="1">选项卡一内容</AccPanel>
                        // <AccPanel tab="选项卡二" key="2">选项卡二内容</AccPanel>
                        // <AccPanel tab="选项卡三" key="3">选项卡三内容</AccPanel>
        return (
            <AppBody 
                meu_reducers={MenuReducers}
                hed_reducers = {HeaderReducer}
                actions = {Actions}
                menuComponent = {header_menu()}
                  >
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



