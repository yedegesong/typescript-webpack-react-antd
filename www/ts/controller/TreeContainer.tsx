import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col,
    Icon,Dashboard} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({  });

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        let {Actions} = this.props;
        return (
            <AppBody>
                <Panel title="基于jquery-树插件-ztree 地址:http://www.treejs.cn/v3/demo.php#_111">
                    <div className="zTreeDemoBackground left">
		                <ul id="treeDemo" className="ztree"></ul>
	                </div>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {Actions} = this.props;
        let setting = {
			check: {
				enable: true,
                chkStyle:"checkbox"
			},
			data: {
				simpleData: {
					enable: true
				}
			},
            callback:{
                onCheck:function(event, treeId, treeNode){
                    console.log(treeNode)
                }
            }
		};

        let zNodes =[
	        { id:1, pId:0, name:"用户角色管理 1", open:true},
			{ id:11, pId:1, name:"菜单管理 1-1"},
            { id:12, pId:1, name:"菜单相亲管理 1-2"},
            { id:2, pId:0, name:"资源管理 2"},
			{ id:21, pId:2, name:"用户管理 2-1"},
            { id:22, pId:2, name:"角色管理 2-2"},
        ]
        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    }

    componentWillUnmount():void {
        
    }

    /*shouldComponentUpdate(){
        return false
    }*/
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



