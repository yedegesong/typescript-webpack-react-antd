import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,Icon,FormGroup,FormItems,InputText,Calendar} from '../components/index';

import {changeActiveAction,switchMenu} from '../redux/actions/MenuAction';
import {getAuthAction,loginOutAction} from '../redux/actions/HeaderAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
//declare let WdatePicker;
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        let {MenuReducers,HeaderReducer,Actions} = this.props;
        // <FormItems label="账户 : " className="ui-canlend">
        //                      <input type="text" placeholder="请选择结束时间" defaultValue = '' ref={function(input) {
        //               if (input != null) {
        //                 input.addEventListener('click',(event)=>{
        //                    WdatePicker({el:input,minDate:'%y-%M',
        //                    onpicked:(dp)=>{
        //                         console.log(dp.cal.getDateStr())
        //                     }
        //                    })
        //                 });
        //               }
        //             }} />
        //                 </FormItems>
        return (
            <AppBody meu_reducers={MenuReducers} hed_reducers = {HeaderReducer} actions = {Actions}>
            <Panel title="行内-日历" >
                    <FormGroup inline>
                        <FormItems label="开始时间">
                            <Calendar placeholder = '请输入开始时间' config = {{
                                onpicked:(dp)=>{
                                        console.log(dp.cal.getDateStr())
                                    }
                           }}/>
                        </FormItems>
                         <FormItems label="结束时间">
                            <Calendar placeholder = '请输入结束时间' config = {{
                                onpicked:(dp)=>{
                                        console.log(dp.cal.getDateStr())
                                    }
                           }}/>
                        </FormItems>
                    </FormGroup>
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



