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
    Icon,Dashboard,Label} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import verifier from '../pub/Verifier';
const store = BaseStore({  });
let divStyle = {
    marginBottom: '10px',
};
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

handleButton(){
        //let {MenuReducers, dispatch} = this.props;
        alert('点击优惠码')
    }

    render() {
        let {Actions} = this.props;
        return (
            <AppBody>
                <Row>
                    <Col span="50" >
                        <Panel  title="面板-字体辅助" >
                            <div>
                                <div>默认色</div>
                                <div className="ui-text-primary">主色调</div>
                                <div className="ui-text-info">次色调</div>
                                <div className="ui-text-succe">删除色</div>
                                <div className="ui-text-error">删除色</div>
                                <div className="ui-text-wring">警告色</div>
                            </div>
                        </Panel>
                    </Col>
                <Col span="50">
                    <Panel  title="面板-字体位置">
                        <div>
                            <div className="ui-text-left">我是文字位置左</div>
                            <div className="ui-text-center">我是文字位置中</div>
                            <div className="ui-text-right">我是文字位置右</div>
                        </div>
                    </Panel>
                </Col>
                </Row>
                <Row>
                    <Col span="50">
                    <Panel  title="面板-边框">
                        <div>
                            <div className="ui-border-t" style={{"marginBottom":"10px"}}>我是文字位置左</div>
                            <div className="ui-border-b" style={{"marginBottom":"10px"}}>我是文字位置中</div>
                            <div className="ui-border-l" style={{"marginBottom":"10px"}}>我是文字位置右</div>
                            <div className="ui-border-r" style={{"marginBottom":"10px"}}>我是文字位置右</div>
                            <div className="ui-border" style={{"marginBottom":"10px"}}>我是文字位置右</div>
                        </div>
                    </Panel>
                </Col>
                </Row>
                <Panel title="面板-指示牌">
                    <Row className="userCenter-list">
                                    <Col span='16'>
                                    <Dashboard label={1} type="a">
                                            总点击次数(次)
                                        </Dashboard>
                                    </Col>
                                    <Col span='16'>
                                    <Dashboard label={2} type="b">
                                            总展示次数(次)
                                        </Dashboard>
                                    </Col>
                                    <Col span='16'>
                                    <Dashboard label={3} type="c">
                                            总广告费(元)
                                        </Dashboard>
                                    </Col>
                                    <Col span='16'>
                                    <Dashboard label={ 4} type="d">
                                            目前广告正在展示数
                                        </Dashboard>
                                    </Col>
                                    <Col span='16'>
                                    <Dashboard label={ 4} type="e">
                                            目前广告正在展示数
                                        </Dashboard>
                                    </Col>
                                    <Col span='16'>
                                    <Dashboard label={ 4} type="f">
                                            目前广告正在展示数
                                        </Dashboard>
                                    </Col>
                                     
                                </Row>
                                <Row >
                                <Col span='16'>
                                    <Dashboard label={ 4} type="g">
                                            目前广告正在展示数
                                        </Dashboard>
                                    </Col>
                                    <Col span='16'>
                                    <Dashboard label={ 4} type="h">
                                            目前广告正在展示数
                                        </Dashboard>
                                    </Col>
                                     <Col span='16'>
                                    <Dashboard label={ 4} type="i">
                                            目前广告正在展示数
                                        </Dashboard>
                                    </Col>
                                    <Col span='16'>
                                    <Dashboard label={ 4} type="j">
                                            目前广告正在展示数
                                        </Dashboard>
                                    </Col>
                                </Row>
                </Panel>
                <Panel title="灰色样式">
                    <Row className="userCenter-list" 
                    style={{"backgroundColor":"#f5f5f5","padding":"10px 0"}}>
                        <Col span="25" className="ui-border-r">
                            <Dashboard label={ 4}>
                                目前广告正在展示数
                            </Dashboard>
                        </Col>
                        <Col span="25" className="ui-border-r">
                            <Dashboard label={ 4}>
                                目前广告正在展示数
                            </Dashboard>
                        </Col>
                        <Col span="25" className="ui-border-r">
                            <Dashboard label={ 4}>
                                目前广告正在展示数
                            </Dashboard>
                        </Col>
                        <Col span="25">
                            <Dashboard label={ 4}>
                                目前广告正在展示数
                            </Dashboard>
                        </Col>
                    </Row>
                </Panel>
                <Panel title="小标题">
                    <Row>
                        <Col span="33">
                            <Label leftText="劵" title="优惠券" info="向客户发放店铺优惠券" tips="推荐"/>
                        </Col>
                         <Col span="33">
                            <Label leftText="折" title="优惠码" info="向客户发放店铺优惠券"
                            onClick = {() => this.handleButton() }
                            />
                        </Col>
                        <Col span="33">
                            <Label leftcompont={<img src="/images/logo_erp.png"/>} title="优惠码" info="向客户发放店铺优惠券"
                            onClick = {() => this.handleButton() }
                            />
                        </Col>
                    </Row>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, Actions} = this.props;
    }

    componentWillUnmount():void {
        
    }

    /*shouldComponentUpdate(){
        return false
    }*/
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



