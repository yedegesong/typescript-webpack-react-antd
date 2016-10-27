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
    FormGroup,
    FormItems,
    InputText} from '../components/index';
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
         let {Actions} = this.props;
        return (
           <AppBody>
                <Panel title="直接-行内-表单面板" >
                    <FormGroup inline>
                        <FormItems label="账户 : ">
                            <InputText type="test" placeholder="请输入账号"/>
                        </FormItems>
                        <FormItems label="账户 : ">
                            <InputText type="test" placeholder="请输入账号"/>
                        </FormItems>
                         <FormItems label="账户 : ">
                            <InputText type="test" placeholder="请输入账号"/>
                        </FormItems>
                    </FormGroup>
                    <FormGroup inline>
                        <FormItems label="账户 : ">
                            <InputText type="test" placeholder="请输入账号"/>
                        </FormItems>
                        <FormItems label="账户 : ">
                            <InputText type="test" placeholder="请输入账号"/>
                        </FormItems>
                         <FormItems label="账户 : ">
                            <InputText type="test" placeholder="请输入账号"/>
                        </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title ="平均-多列布局">
                    <Row>
                        <Col span="33">
                            <FormGroup>
                                <FormItems label="账户 : ">
                                    <InputText type="test" placeholder="请输入账号"/>
                                </FormItems>
                                <FormItems label="账户 : ">
                                    <InputText type="test" placeholder="请输入账号"/>
                                </FormItems>
                            </FormGroup>
                        </Col>
                        <Col span="33">
                            <FormGroup>
                                <FormItems label="账户 : ">
                                    <InputText type="test" placeholder="请输入账号"/>
                                </FormItems>
                                <FormItems label="账户 : ">
                                    <InputText type="test" placeholder="请输入账号"/>
                                </FormItems>
                            </FormGroup>
                        </Col>
                        <Col span="33">
                            <FormGroup>
                                <FormItems label="账户 : ">
                                    <InputText type="test" placeholder="请输入账号"/>
                                </FormItems>
                                <FormItems label="账户 : ">
                                    <InputText type="test" placeholder="请输入账号"/>
                                </FormItems>
                            </FormGroup>
                        </Col>
                    </Row>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let { Actions} = this.props;
       
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



