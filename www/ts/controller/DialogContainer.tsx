import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col,
    Icon, Label, Crumbs, Tabs, InputSelect,
    TabPane, InputText, Table,
    Pagination,
    CheckGroup,
    Dialog,
    FormGroup,
    FormItems,
    InputCheckbox,
    InfoText
} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import { BaseStore } from '../redux/store/BaseStore';
const store = BaseStore({});
class FormModule extends React.Component<any, any>{
    submitDate:any;
    constructor(props) {
        super(props);
        this.submitDate = {
            name: '',
            username: '',
            password: '',
            departmentId: '',
            roleId: '',
            leader: false,
            organization: this.props.organization
        }
    }

    valueChange(name, value) {
        this.submitDate[name] = value;
        this.props.callbackFun(this.submitDate);
    }

    render() {
        return (<div>
            <FormGroup>
                    <FormItems label="用户名称">
                        <InputText type="test"
                            placeholder="请输入用户名称"
                            onChange={(event) => this.valueChange('name', event.target.value)} />
                    </FormItems>
                    <FormItems label="用户名称">
                            <InputText type="password"
                            placeholder="请输入用户密码"
                            onChange={(event) => this.valueChange('name', event.target.value)} />
                    </FormItems>
                    </FormGroup>
        </div>)
    }
}
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
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
            { label: '取消', onClick: buyConfirm1 },
            { label: '确定', onClick: buyConfirm, primary: true }
        ];

        Dialog.show(<div>你确定要删除吗?</div>, actions, '提示框');
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
        let sub_data = null;
        let buyConfirm = (modal) => {
            console.log(sub_data);
            modal.close();
        };

        let callbackFun = (call_back_data) => {
            sub_data = call_back_data;
        }

        let actions = [
            { label: '取消' },
            { label: '确定', onClick: buyConfirm, primary: true }
        ];
        Dialog.show(<FormModule callbackFun={callbackFun}/>, actions);
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        let {Actions} = this.props;
        return (
            <AppBody>
                <Panel title="全局提示-加载中按钮面板">
                    <Buttons onClick={(event) => this._dialog(event)} >普通提示弹框</Buttons>
                    <Buttons onClick={(event) => this._dialog1(event)} >单个提示弹框</Buttons>
                    <Buttons onClick={(event) => this._dialog2(event)} >提示弹框回调在弹框</Buttons>
                    <Buttons onClick={(event) => this._dialog3(event)} >提示弹框组件弹框</Buttons>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount(): void {
        let {Actions} = this.props;
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



