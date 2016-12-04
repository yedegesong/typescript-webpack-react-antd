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
    CheckGroup,
    RadioGroup,
    Buttons,
    Tips,Row,Col,SelectLinkage} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
import Tool from '../pub/Tool';
const store = BaseStore({  });
class IndexApp extends BaseContainer {
    date: any[];
    submitDate:any;
    checkedValue: any;
    constructor(props) {
        super(props);
    }

     
    
    render() {
        let {FormLinkageReducer,Actions} = this.props;
        return (<div>
            <AppBody>
                <Panel title = "表单三级联动">
                    <SelectLinkage callbackValue = {(value)=>{
                        console.log(value)
                    }}/>
                </Panel>
            </AppBody>
            </div>
        );
    }

    componentDidMount():void {
        let {FormLinkageReducer, Actions} = this.props;
        
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



