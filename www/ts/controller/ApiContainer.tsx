import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
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
    Echarts,
    CheckGroup,
    RadioGroup,
    Buttons,
    Upload} from '../components/index';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({  });
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
    },
    city: {
        name: '城市',
        select: '-1'
    },
};
class IndexApp extends BaseContainer {
    date: any[];
    submitDate:any;
    constructor(props) {
        super(props);
        
        this.date = [{
            label: '北京',
            value: '北京'
        }, {
                label: '福州',
                value: '福州'
            }];
        //验证的表单
        this.submitDate= {
            accout:'',
            password:'',
            city:'-1'
        };
    }

    handleInputChange(event) {
        console.log(event.target.value)
    }

    handleRadioChange(event){
        console.log(event.target.value)
    }

    handleCheckboxChange(option){
        //console.log(event.target.checked)
       console.log(option.target.checked)
    }

    handleCheckGroupChange(checkedValues){
        console.log('checked = ', checkedValues);
    }

    handleButton(){
        //
        //let verifyResult = Verifier.verifyConfig(this.input, Verifier_Config, true);

    }
    sublimeButton(){
        console.log(this.submitDate)
        //提交数据表单
        let verifyResult = Verifier.verifyConfig(this.submitDate, Verifier_Config, false);
        alert(verifyResult)
    }

    valueChange(name,value){
        this.submitDate[name] = value;
    }

    render() {
        var divStyle = {
            width:`100%`,
            height:`400px`
        };
        return (
            <AppBody>
                <Panel title="按钮面板">
                    <Buttons>默认default</Buttons>
                    <Buttons type = "primary" onClick = {() => this.handleButton() } >首选primary</Buttons>
                    <Buttons type = "success">成功success</Buttons>
                    <Buttons type = "danger">危险danger</Buttons>
                    <Buttons type = "info">一般info</Buttons>
                    <Buttons type = "warning">警告warning</Buttons>
                </Panel>
                <Panel title="按钮尺寸面板">
                    <Buttons type = "primary" size="large">大号按钮</Buttons>
                    <Buttons type = "primary" >中号按钮(默认)</Buttons>
                    <Buttons type = "primary" size="small">小号按钮</Buttons>
                </Panel>
                <Panel title="按钮块尺寸面板">
                    <Buttons display = "block" >默认default</Buttons>
                    <Buttons type = "primary" display = "block" onClick = {() => this.handleButton() } >首选primary</Buttons>
                    <Buttons type = "success" display = "block" >成功success</Buttons>
                    <Buttons type = "danger" display = "block" >危险danger</Buttons>
                    <Buttons type = "info" display = "block" >一般info</Buttons>
                    <Buttons type = "warning" display = "block" >警告warning</Buttons>
                </Panel>
                <Panel  title="饼状图面板-结合百度图表">
                    <Echarts>
                        <h3>饼状图</h3>
                        <div id="main" style = {divStyle}>111</div>
                    </Echarts>
                </Panel>
                <Panel title="默认-垂直-表单面板" >
                    <FormGroup>
                        <FormItems label="普通文本域" help = "请输入你要提示的文本域内容">
                            <InputText type="test" />
                        </FormItems>
                        <FormItems label="密码文本域">
                            <InputText type="password" />
                        </FormItems>
                        <FormItems label="普通下拉选择框">
                            <InputSelect  items={this.date} onChange={(event) => this.handleInputChange(event) } />
                        </FormItems>
                        <FormItems label="单选按钮">
                            <RadioGroup>
                                <InputRadio label="全部" name="delivery_channel" value="1" defaultChecked  onChange={(event,value) => this.handleRadioChange(event) }/>
                                <InputRadio label="微信" name="delivery_channel" value="2" onChange={(event,value) => this.handleRadioChange(event) }/>
                                <InputRadio label="APP"  name="delivery_channel" value="3"  onChange={(event,value) => this.handleRadioChange(event) }/>
                            </RadioGroup>
                        </FormItems>
                        <FormItems label="不可选单选按钮">
                            <InputRadio label="全部" name="delivery_channel" value="-1" disabled onChange={(event,value) => this.handleRadioChange(event) }/>
                        </FormItems>
                        <FormItems label="复选框">
                            <InputCheckbox label="选择" name="circle" value="1" onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems label="复选框组">
                            <CheckGroup  options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="复选框组-锁">
                            <CheckGroup  options={['Apple', 'Pear', 'Orange']}  disabled defaultValue={['Apple']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" disabled onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems label="选择不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" checked disabled onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems >
                            <Buttons type = "primary" display = "block" onClick = {() => this.handleButton() } >登录</Buttons>
                            <Buttons type = "success" display = "block" >注册</Buttons>
                        </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title="水平-表单面板" >
                    <FormGroup horizontal >
                        <FormItems label="用户名">
                            <InputText type="test" />
                        </FormItems>
                        <FormItems label="密码" >
                            <InputText type="password" placeholder="请输入你要提示的文本域内容"/>
                        </FormItems>
                        <FormItems label="普通下拉选择框">
                            <InputSelect  items={this.date} onChange={(event) => this.handleInputChange(event) } />
                        </FormItems>
                        <FormItems label="单选按钮">
                            <RadioGroup>
                                <InputRadio label="全部" name="delivery_channel" value="1" defaultChecked  onChange={(event,value) => this.handleRadioChange(event) }/>
                                <InputRadio label="微信" name="delivery_channel" value="2" onChange={(event,value) => this.handleRadioChange(event) }/>
                                <InputRadio label="APP"  name="delivery_channel" value="3"  onChange={(event,value) => this.handleRadioChange(event) }/>
                            </RadioGroup>
                        </FormItems>
                        <FormItems label="不可选单选按钮">
                            <InputRadio label="全部" name="delivery_channel" value="-1" disabled onChange={(event,value) => this.handleRadioChange(event) }/>
                        </FormItems>
                        <FormItems label="复选框">
                            <InputCheckbox label="选择" name="circle" value="1" onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems label="复选框组">
                            <CheckGroup  options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="复选框组-锁">
                            <CheckGroup  options={['Apple', 'Pear', 'Orange']}  disabled defaultValue={['Apple']} onChange={(checkedValues) => this.handleCheckGroupChange(checkedValues) }/>
                        </FormItems>
                        <FormItems label="不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" disabled onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems label="选择不可选择复选框">
                            <InputCheckbox label="选择" name="circle" value="1" checked disabled onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems BtnFormItems>
                            <Buttons type = "primary" onClick = {() => this.handleButton() } >登录</Buttons>
                            <Buttons type = "success">注册</Buttons>
                         </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title="行内-表单面板" >
                    <FormGroup inline >
                        <FormItems>
                            <InputText type="test" />
                        </FormItems>
                        <FormItems>
                            <InputText type="password" />
                        </FormItems>
                        <FormItems >
                            <InputCheckbox label="记住密码" name="circle" value="1" onChange={(option) => this.handleCheckboxChange(option) }/>
                        </FormItems>
                        <FormItems >
                            <Buttons type = "primary" onClick = {() => this.handleButton() } >登录</Buttons>
                        </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title = "表单验证">
                    <FormGroup horizontal >
                        <FormItems label="用户名">
                            <InputText type="test" placeholder="请输入您的账号" onChange={(event)=>this.valueChange('accout',event.target.value)}/>
                        </FormItems>
                        <FormItems label="密码" >
                            <InputText type="password" placeholder="请输入您的密码" onChange={(event)=>this.valueChange('password',event.target.value)}/>
                        </FormItems>
                        <FormItems label="城市">
                            <InputSelect  items={this.date} onChange={(event) => this.valueChange('city',event.target.value) } />
                        </FormItems>
                        <FormItems >
                            <Buttons type = "danger" display = "block" onClick = {() => this.sublimeButton() } >登录</Buttons>
                        </FormItems>
                    </FormGroup>
                </Panel>
                <Panel title = "全局提示">

                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        
       var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                x:'center'
            },
            legend: {
                left: 'center',
                x:'center',
                data: ['金山大道商圈','福湾商圈','晋安区政府商圈','前屿商圈']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            "circleId": 2,
                            "name": "金山大道商圈",
                            "value": 0
                        },
                        {
                            "circleId": 3,
                            "name": "福湾商圈",
                            "value": 0
                        },
                        {
                            "circleId": 4,
                            "name": "晋安区政府商圈",
                            "value": 0
                        },
                        {
                            "circleId": 5,
                            "name": "前屿商圈",
                            "value": 0
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    componentWillUnmount():void {
        
    }
}

let mapStateToProps = (state) => {
    return {
        IndexReducers: state.IndexReducers
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



