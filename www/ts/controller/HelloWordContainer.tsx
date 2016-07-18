import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import * as QQ from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
import * as Hello from '../pub/Hello'
console.log(Hello)
console.log(QQ)
const store = BaseStore({  });

class Text extends React.Component<any, any>{
    constructor(props) {
        super(props);
        console.log('a')
    }

    componentWillReceiveProps(){
        console.log('嘿嘿')
    }
    render() {
        let {text} = this.props;
        return <span>{text}</span>
    }

    componentDidMount(){
        console.log('ok')
    }
}

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            text:'hello,word'
        }
    }
    ok(){
        this.setState({
            text:'aaa'
        })
    }
    render() {
        return (
            <div>
                <Text text={this.state.text}/>
                <button onClick={this.ok.bind(this) }>改变</button>
            </div>
            
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



