import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    FormGroup,
    FormItems,
    InputText,
    InputSelect,
    InputRadio,
    InputCheckbox,
    CheckGroup,
    RadioGroup,
    Buttons,
    Tips, Row, Col, SelectLinkage, Steps, Step
} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import { BaseStore } from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
import Tool from '../pub/Tool';
const store = BaseStore({});
class IndexApp extends BaseContainer {
    date: any[];
    submitDate: any;
    checkedValue: any;
    constructor(props) {
        super(props);
    }



    render() {
        let {FormLinkageReducer, Actions} = this.props;
        return (<div>
            <AppBody>
                <Panel>
                    <div>
                        <Steps onClick={(value) => {

                        } }>
                            <Step delNo="1" active>基础信息</Step>
                            <Step delNo="2">收费标准</Step>
                            <Step delNo="3">合同管理</Step>
                            <Step delNo="4">结算配置</Step>
                            <Step delNo="5">账号管理</Step>
                            <Step delNo="6">多出口配置</Step>
                            <Step delNo="7">二维码管理</Step>
                        </Steps>
                    </div>
                    <Row>
                        <Col span="50">
                            <SelectLinkage value={{
                                province: '福建省',
                                city: '福州市',
                                area: '鼓楼区'
                            }} callbackValue={(value) => (

                                console.log(value)
                            )} />
                        </Col>
                        <Col span="20">
                        </Col>
                        <Col span="20">
                        </Col>
                    </Row>
                </Panel>
            </AppBody>
        </div>
        );
    }

    componentDidMount(): void {
        let {FormLinkageReducer, Actions} = this.props;

    }

    componentWillUnmount(): void {

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
const App = connect(mapStateToProps, mapDispatchToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    ElementContainer
);



