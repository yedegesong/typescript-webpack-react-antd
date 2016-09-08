import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col,
    Icon,Dashboard} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({  });
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBody>
                <Panel title="所有图标-面板">
                    <Icon type="shanchu"/>&nbsp; &nbsp;
                     <Icon type="unie614"/>&nbsp; &nbsp;
                      <Icon type="guanbi"/>&nbsp; &nbsp;
                       <Icon type="zhanshi"/>&nbsp; &nbsp;
                        <Icon type="sousuo"/>&nbsp; &nbsp;
                         <Icon type="xiugai"/>&nbsp; &nbsp;
                         
                         <Icon type="wancheng"/>&nbsp; &nbsp;
                         <Icon type="shouye"/>&nbsp; &nbsp;
                         <Icon type="tixian"/>&nbsp; &nbsp;
                         <Icon type="history-fill"/>&nbsp; &nbsp;
                         <Icon type="layer"/>&nbsp; &nbsp;

                         <Icon type="qingkong"/>&nbsp; &nbsp;
                         <Icon type="zhankai"/>&nbsp; &nbsp;
                         <Icon type="jiaoseguanli"/>&nbsp; &nbsp;

                         <Icon type="xitong"/>&nbsp; &nbsp;
                         <Icon type="signout"/>&nbsp; &nbsp;
                         <Icon type="zengjia"/>&nbsp; &nbsp;

                         <Icon type="xitong"/>&nbsp; &nbsp;
                         <Icon type="signout"/>&nbsp; &nbsp;
                         <Icon type="zengjia"/>&nbsp; &nbsp;

                         <Icon type="zhanghao"/>&nbsp; &nbsp;
                         <Icon type="fabu"/>&nbsp; &nbsp;
                         <Icon type="yonghu"/>&nbsp; &nbsp;

                         <Icon type="xiazai-copy"/>&nbsp; &nbsp;
                         <Icon type="caidan"/>&nbsp; &nbsp;
                         <Icon type="apply"/>&nbsp; &nbsp;

                         <Icon type="caidan-copy"/>&nbsp; &nbsp;
                         <Icon type="tuikuan"/>&nbsp; &nbsp;
                         <Icon type="chongzhi"/>&nbsp; &nbsp;

                          <Icon type="zhangdan2"/>&nbsp; &nbsp;
                         <Icon type="zhanghu"/>&nbsp; &nbsp;
                         <Icon type="h5chuanboguanli"/>&nbsp; &nbsp;

                         <Icon type="gerenzhongxin"/>&nbsp; &nbsp;
                         <Icon type="zhankai-copy"/>&nbsp; &nbsp;
                         <Icon type="cuowu"/>&nbsp; &nbsp;

                         <Icon type="jinggao"/>&nbsp; &nbsp;
                         <Icon type="wancheng1"/>&nbsp; &nbsp;
                         <Icon type="layer-copy"/>&nbsp; &nbsp;

                         <Icon type="zhankai-copy-copy"/>&nbsp; &nbsp;
                         <Icon type="xiajiang"/>&nbsp; &nbsp;
                         <Icon type="shangsheng"/>&nbsp; &nbsp;
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



