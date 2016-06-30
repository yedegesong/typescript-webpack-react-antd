import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {AppBody} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
class Text extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return <span>{this.props.text}</span>
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



