import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,
    Tips,
    Toast,
    Dialog,
    InputText,
} from '../components/index';
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

    handleButton(type?:number){
        if(type ==1){
            Toast.close();
        }else{
            Toast.open();
        }
        
    }

    _dialog(event) {
        let buyConfirm = (modal) => {
            console.log('您点击了确定按钮');
            
            modal.close();
        };
        let buyConfirm1 = (modal) => {
            console.log('您点击了取消按钮');
            console.log(modal)
            modal.close();
        };
        let actions = [
            { label: '', onClick: buyConfirm1 },
            { label: '', onClick: buyConfirm, primary: true }
        ];

        Dialog.show(<div>你确定要删除吗?</div>, actions,'提示框');
        event.preventDefault();
        event.stopPropagation();

    }

    _dialog1(event) {
        Dialog.alter('提示您好!');
        event.preventDefault();
        event.stopPropagation();
    }

    _dialog2(event) {
        let buyConfirm = (modal) => {
            Dialog.alter('我回调了!');
            modal.close();
        };

        let actions = [
            { label: '取消' },
            { label: '确定', onClick: buyConfirm, primary: true }
        ];

        Dialog.show(<div>回调哒哒哒!</div>, actions);
        event.preventDefault();
        event.stopPropagation();
    }

    _dialog3(event) {
        let buyConfirm = (modal) => {

            modal.close();
        };
        let actions = [
            { label: '取消' },
            { label: '确定', onClick: buyConfirm, primary: true }
        ];
        Dialog.show(<div title="文本框"><InputText type="test" /></div>, actions);
        event.preventDefault();
        event.stopPropagation();
    }

    _dialog4(event) {
        let buyConfirm = (modal) => {
            console.log('您点击了确定按钮');
            modal.close();
        };
        let buyConfirm1 = (modal) => {
            console.log('您点击了取消按钮');
            console.log(modal)
            modal.close();
        };
        let actions = [
            { label: '取消', onClick: buyConfirm1 },
            { label: '确定', onClick: buyConfirm, primary: true }
        ];

        Dialog.show(<div>
                你确定要删除吗?
                <div><Buttons>取消</Buttons>
                <Buttons type="primary">确定</Buttons></div>
            </div>,[],'提示框');
        event.preventDefault();
        event.stopPropagation();

    }

    render() {
let {MenuReducers,HeaderReducer,Actions} = this.props;
        return (
            <AppBody meu_reducers={MenuReducers} hed_reducers = {HeaderReducer} actions = {Actions}>
                <Panel title="全局提示-加载中按钮面板">
                    <Buttons onClick = {(event) =>  this._dialog(event)  } >普通提示弹框</Buttons>
                    <Buttons onClick = {(event) =>  this._dialog1(event) } >单个提示弹框</Buttons>
                    <Buttons onClick = {(event) => this._dialog2(event) } >提示弹框回调在弹框</Buttons>
                    <Buttons onClick = {(event) => this._dialog3(event) } >提示弹框组件弹框</Buttons>
                    <Buttons onClick = {(event) => this._dialog4(event) } >无尾部弹框组件</Buttons>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction())
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



