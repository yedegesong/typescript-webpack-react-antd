import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import {BaseStore} from '../redux/store/BaseStore';
import Tool from '../pub/Tool';
import {IndexReducer} from '../redux/IndexReducer';
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
    InputCheckbox, Tips
} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
const store = BaseStore({IndexReducer});

class IndexApp extends BaseContainer{
    submitDate:any;
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <div>
                <AppBody>
                    <Panel title="欢迎来到ERP管理系统"></Panel>
                </AppBody>
            </div>
        );
    }

    componentDidMount():void {
        
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



