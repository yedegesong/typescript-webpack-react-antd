import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery';
import 'antd/lib/index.css'; 
import '../../styles/app.css';
//基类
import BaseContainer from '../pub/BaseContainer';
//自己书写的第三方组件
import {AppHeader,AppMain,AppMenu} from '../components/index';
class IndexContainer extends BaseContainer {
    constructor(props){
        super(props)
    }
    
    render() {
        return (<div>
                    <AppHeader />
                    <AppMenu />
                    <AppMain />
                </div>);
    }
}

 /**
  * 统一返回元素入口
  */
let ElementContainer = document.getElementById("example");
ReactDOM.render(
    <IndexContainer name ="hello" />,
    ElementContainer
);


