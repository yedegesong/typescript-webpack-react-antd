import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,
    Row,
    Col} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });

class Text extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    handle(){
        this.props.Ok('我是子类传递过来的')
    }

    render(){

        return (<div >
                <button onClick={this.handle.bind(this)}>我是按钮</button>
            </div>)
    }
}

//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }
    
    render() {
let {Actions} = this.props;
        return (
           <AppBody>
                <Panel title="按钮面板-网格布局">
                    <Row>
                        <Col span="10">10%</Col>
                        <Col span="90">90%</Col>
                    </Row>
                    <Row>
                        <Col span="16">16%</Col>
                        <Col span="16">16%</Col>
                        <Col span="16">16%</Col>
                        <Col span="16">16%</Col>
                        <Col span="16">16%</Col>
                        <Col span="16">16%</Col>
                    </Row>
                    <Row>
                        <Col span="20">20%</Col>
                        <Col span="80">80%</Col>
                    </Row>
                    <Row>
                        <Col span="25">25%</Col>
                        <Col span="75">75%</Col>
                    </Row>
                    <Row>
                        <Col span="33">33%</Col>
                        <Col span="67">67%</Col>
                    </Row>
                    <Row>
                        <Col span="50">50%</Col>
                        <Col span="50">50%</Col>
                    </Row>
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



