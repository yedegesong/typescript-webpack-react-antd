import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,Icon} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
let divStyle = {
    marginBottom: '10px',
};
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    handleButton(){
        //let {MenuReducers, dispatch} = this.props;
        alert('a')
    }

    render() {
        console.log('a')
        return (
            <AppBody>
                <Panel title="按钮面板">
                    <Buttons>默认default</Buttons>
                    <Buttons type = "primary"  onClick={this.handleButton}>首选primary</Buttons>
                    <Buttons type = "success">成功success</Buttons>
                    <Buttons type = "danger">危险danger</Buttons>
                    <Buttons type = "info">一般info</Buttons>
                    <Buttons type = "warning">警告warning</Buttons>
                    <Buttons type = "link">链接link</Buttons>
                </Panel>
                <Panel title="按钮面板-禁止">
                    <Buttons disabled = {true} >默认default</Buttons>
                    <Buttons type = "primary" disabled = {true} onClick={()=>this.handleButton}>首选primary</Buttons>
                    <Buttons type = "success" disabled = {true}>成功success</Buttons>
                    <Buttons type = "danger" disabled = {true}>危险danger</Buttons>
                    <Buttons type = "info" disabled = {true}>一般info</Buttons>
                    <Buttons type = "warning" disabled = {true}>警告warning</Buttons>
                </Panel>
                <Panel title="按钮尺寸面板">
                    <Buttons type = "primary" size="large">大号按钮</Buttons>
                    <Buttons type = "primary" >中号按钮(默认)</Buttons>
                    <Buttons type = "primary" size="small">小号按钮</Buttons>
                </Panel>
                <Panel title="按钮块尺寸面板">
                    <Buttons style={divStyle} display = "block" > 默认default</Buttons>
                    <Buttons style={divStyle} type = "primary" display = "block" onClick = {() => this.handleButton() } >首选primary</Buttons>
                    <Buttons style={divStyle} type = "success" display = "block" >成功success</Buttons>
                    <Buttons style={divStyle} type = "danger" display = "block" >危险danger</Buttons>
                    <Buttons style={divStyle} type = "info" display = "block" >一般info</Buttons>
                    <Buttons style={divStyle} type = "warning" display = "block" >警告warning</Buttons>
                </Panel>
                <Panel title="图标-按钮面板">
                    <Buttons><Icon type="cloudupload"/> 上传文件</Buttons>
                    <Buttons type = "danger" ><Icon type ="delete"/> 删除</Buttons>
                    <Buttons type = "success" ><Icon type="eyeo"/> 预览</Buttons>
                    <Buttons type = "primary" ><Icon type="edit"/> 修改</Buttons>
                    <Buttons type = "primary" ><Icon type="pluscircle"/> 添加</Buttons>
                    <Buttons type = "primary" ><Icon type="search"/> 搜索</Buttons>
                    <Buttons type = "warning" ><Icon type="like"/> 89</Buttons>
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



