import * as React from "react";
import * as ReactDOM from "react-dom";
import Config from '../pub/Config';
import {LoginAction} from '../redux/LoginAction';
import Cookie from '../pub/Cookie';

const TelBaseUrl = Config.TelBaseUrl;
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
    accout: {
        name: '用户',
        require:true
    },
    password: {
        name: '密码',
        require:true
    }
};
class LoginApp extends React.Component<any, any>{
    submitDate:any;
    constructor(props) {
        super(props);
        //验证的表单
        this.submitDate= {
            accout:'',
            password:''
        };

        this.state ={
            type:1
        }
    }

    sublimeButton(){
            //提交数据表单
            let verifyResult = Verifier.verifyConfig(this.submitDate, Verifier_Config, true);
            if (verifyResult.length > 0) {
                Tips({
                    message: verifyResult[0].tips,
                    type: 2
                });
                return false;
            }
            let accout = this.submitDate.accout;
            let password = this.submitDate.password;
            LoginAction(accout, password);
    }

    valueChange(name,value){
        this.submitDate[name] = value;
    }

    createLogin(){
        return <div>
                    <div className="login-item">
                        <span className="item-icon"><Icon type="zh"/></span>
                        <InputText type="test" placeholder="请输入您的用户名" onChange={(event) => this.valueChange('accout', event.target.value) }/>
                    </div>
                    <div className="login-item">
                        <span className="item-icon"><Icon type="mm"/></span>
                        <InputText type="password" placeholder="请输入您的用户名" onChange={(event) => this.valueChange('password', event.target.value) }/>
                    </div>
                    <div className="login-btn-box">
                        <Buttons type = "primary" display = "block" onClick = {() => this.sublimeButton() }>
                            登录
                        </Buttons>
                    </div>
                </div>
    }

    createRegistered(){
        return <div>
                我是注册面板
            </div>
    }

    changeType(type){
        this.setState({
            type:type
        })
    }

    render() {
        let stateType =()=>{
            if(this.state.type == 1){
                return this.createLogin()
            }else{
               return this.createRegistered();
            }
        }
        return (
            <div>
                <div className="login-header">
                    <span className={this.state.type == 1 ? 'on' : ''} onClick={()=>{this.changeType(1)}}> 登录</span>
                    <b className="line"></b>
                    <span className={this.state.type == 2 ? 'on' : ''} onClick={()=>{this.changeType(2)}}> 注册</span>
                </div>
                {stateType()}
            </div>
        );
    }

    componentDidMount():void {
        
    }
    
    componentWillUnmount():void {
        
    }
}

const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <LoginApp />,
    ElementContainer
);



