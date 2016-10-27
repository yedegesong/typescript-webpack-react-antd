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
        let {MenuReducers,HeaderReducer,Actions} = this.props;
        return (
            <AppBody>
                <Panel title="所有图标-面板">
                    <Icon type="sc"/>&nbsp; &nbsp;
                     <Icon type="mm"/>&nbsp; &nbsp;
                      <Icon type="gb"/>&nbsp; &nbsp;
                       <Icon type="zs"/>&nbsp; &nbsp;
                        <Icon type="ssi"/>&nbsp; &nbsp;
                         <Icon type="xg"/>&nbsp; &nbsp;
                         
                         <Icon type="wcx"/>&nbsp; &nbsp;
                         <Icon type="sy"/>&nbsp; &nbsp;
                         <Icon type="tx"/>&nbsp; &nbsp;
                         <Icon type="gd"/>&nbsp; &nbsp;
                         <Icon type="ls"/>&nbsp; &nbsp;

                         <Icon type="hf"/>&nbsp; &nbsp;
                         <Icon type="qk"/>&nbsp; &nbsp;
                         <Icon type="x"/>&nbsp; &nbsp;

                         <Icon type="sj"/>&nbsp; &nbsp;
                         <Icon type="jsgl"/>&nbsp; &nbsp;
                         <Icon type="xt"/>&nbsp; &nbsp;

                         <Icon type="dc"/>&nbsp; &nbsp;
                         <Icon type="zj"/>&nbsp; &nbsp;
                         <Icon type="zh"/>&nbsp; &nbsp;

                         <Icon type="fb"/>&nbsp; &nbsp;
                         <Icon type="yh"/>&nbsp; &nbsp;
                         <Icon type="xz"/>&nbsp; &nbsp;

                         <Icon type="cd"/>&nbsp; &nbsp;
                         <Icon type="cdd"/>&nbsp; &nbsp;
                         <Icon type="tk"/>&nbsp; &nbsp;

                         <Icon type="cz"/>&nbsp; &nbsp;
                         <Icon type="zd"/>&nbsp; &nbsp;
                         <Icon type="zh1"/>&nbsp; &nbsp;

                          <Icon type="ggzx"/>&nbsp; &nbsp;
                         <Icon type="grzx"/>&nbsp; &nbsp;
                         <Icon type="dxwxz"/>&nbsp; &nbsp;

                         <Icon type="dxxz"/>&nbsp; &nbsp;
                         <Icon type="s"/>&nbsp; &nbsp;
                         <Icon type="cw"/>&nbsp; &nbsp;

                         <Icon type="jg"/>&nbsp; &nbsp;
                         <Icon type="wc"/>&nbsp; &nbsp;
                         <Icon type="qf"/>&nbsp; &nbsp;

                         <Icon type="dxwxz1"/>&nbsp; &nbsp;
                         <Icon type="dxxz1"/>&nbsp; &nbsp;
                         <Icon type="y"/>&nbsp; &nbsp;
                         <Icon type="xj"/>&nbsp; &nbsp;
                         <Icon type="ss"/>&nbsp; &nbsp;
                         <Icon type="wdgg"/>&nbsp; &nbsp;

                         <Icon type="yczd"/>&nbsp; &nbsp;
                         <Icon type="wczd"/>&nbsp; &nbsp;
                         <Icon type="z"/>&nbsp; &nbsp;
                         <Icon type="tcq"/>&nbsp; &nbsp;
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {Actions} = this.props;
    }

    componentWillUnmount():void {
        
    }
}

let mapStateToProps = (state) => {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators({
                 
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



