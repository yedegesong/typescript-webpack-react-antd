import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import {BaseStore} from '../redux/store/BaseStore';
import Tool from '../pub/Tool';
import LocalStorage from '../pub/LocalStorage';
import {LoginReducer,LoginAction,ChangeDataAction} from '../redux/LoginReducer';
const store = BaseStore({LoginReducer});
//自己的第三方组件
import {
    FormGroup,
    FormItems,
    InputText,
    InputSelect,
    InputRadio,
    InputCheckbox,
    CheckGroup,
    RadioGroup,
    Buttons,
    Tips,
    Toast,Icon} from '../components/index';
//表单验证模块
import Verifier from '../pub/Verifier';
//数据流向
//验证的表单配置
let Verifier_Config = {
    username: {
        name: '用户',
        require:true
    },
    password: {
        name: '密码',
        require:true
    }
};

class IndexApp extends React.Component<any, any>{
    submitDate:any;
    constructor(props) {
        super(props);
        //验证的表单
        this.submitDate= {
            username:'',
            password:'',
            auto: false
        };
    }

    sublimeButton(){
            let {Actions} = this.props;
            //提交数据表单
            let verifyResult = Verifier.verifyConfig(this.submitDate, Verifier_Config, true);
            if (verifyResult.length > 0) {
                Tips({
                    message: verifyResult[0].tips,
                    type: 2
                });
                return false;
            }
            
            Actions.LoginAction(this.submitDate);
    }

    valueChange(name,value){
        let {Actions} = this.props;
        this.submitDate[name] = value;
        Actions.ChangeDataAction(this.submitDate);
    }

    render() {
        let {LoginReducer,Actions} = this.props;
        this.submitDate = Tool.assign({}, this.submitDate, LoginReducer.submitDate);
        return (
            <div>
                <div>
                    <div className="login-item">
                        <span className="item-icon"><Icon type="zh"/></span>
                        <InputText type="test" placeholder="请输入您的账号" onChange={(event) => this.valueChange('username', event.target.value) }/>
                    </div>
                    <div className="login-item">
                        <span className="item-icon"><Icon type="mm"/></span>
                        <InputText type="password" placeholder="请输入您的密码" onChange={(event) => this.valueChange('password', event.target.value) }/>
                    </div>
                    <div className={LoginReducer.submitDate.is_show_code ? "code-item on" : "code-item"}>
                        <InputText type="test" className="login-code offset-right10" placeholder="请输入验证码" onChange={(event) => this.valueChange('code', event.target.value) }/>
                        <span className="offset-right10">{this.submitDate.code}</span>
                        <span className="ui-text-primary">看不清？换一张</span>
                    </div>
                    <div className="item">
                        <InputCheckbox label="下次自动登录" 
                        checked = {LoginReducer.submitDate.auto ? true : false} 
                        onChange={(value) => this.valueChange('auto', value) } />
                    </div>
                    <div className="login-btn-box">
                        <Buttons type = "primary" display = "block" onClick = {() => this.sublimeButton() }>
                            登录
                        </Buttons>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount():void {
        let {LoginReducer} = this.props;
    }
    
    componentWillUnmount():void {
        
    }
}


let mapStateToProps = (state) => {
    return {
       LoginReducer:state.LoginReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators({
                LoginAction,
                ChangeDataAction
             }, dispatch)
    };
}

const App = connect(mapStateToProps, mapDispatchToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    ElementContainer
);



