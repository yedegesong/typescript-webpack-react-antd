import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col,
    Icon, Dashboard
} from '../components/index';

//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import { BaseStore } from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({});
let zTree_Menu_tree = null;
let rMenu = $("#rMenu");
let curMenu = null, zTree_Menu = null;
let new_pid = 1;
let is_once_query = true;
let setting = {
    edit: {
        enable: false,
        editNameSelectAll: true
    },
    view: {
        showLine: false,
        showIcon: false,
        selectedMulti: false,
        dblClickExpand: dblClickExpand,
        addDiyDom: addDiyDom,

    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onClick: zTreeOnClick,
        onRightClick: OnRightClick,
        onRemoveonRemove: onRemove,
        onRename: onRename
    }
};
function zTreeOnClick(event, treeId, treeNode) {

    new_pid = treeNode.id;
    if ($('#operationPanel').hasClass('on')) {
        $('#operationPanel').removeClass('on');
    }
    $('#departmentName').html(treeNode.name);
};

function addDiyDom(treeId, treeNode) {
    var spaceWidth = 5;
    var switchObj = $("#" + treeNode.tId + "_switch"),
        icoObj = $("#" + treeNode.tId + "_ico");
    switchObj.remove();
    icoObj.before(switchObj);

    if (treeNode.level > 1) {
        var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
        switchObj.before(spaceStr);
    }
}

function beforeClick(treeId, treeNode) {
    if (treeNode.level == 0) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        zTree.expandNode(treeNode);
        return false;
    }
    return true;
}

function dblClickExpand(treeId, treeNode) {
    return treeNode.level > 0;
}

function onRemove(e, treeId, treeNode) {

    console.log(treeNode.name);
}

function OnRightClick(event, treeId, treeNode) {

    if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
        zTree_Menu.cancelSelectedNode();
        console.log(event.clientX)
        showRMenu("root", event.clientX, event.clientY);
    } else if (treeNode && !treeNode.noR) {
        zTree_Menu.selectNode(treeNode);
        showRMenu("node", event.clientX, event.clientY);
    }
    if (treeNode.id === 1 || treeNode.id === 2) {
        $('#m_check').hide();
        $('#m_del').hide();
    } else if (treeNode.id === 3 || treeNode.id === 4) {
        $('#rMenu').hide();
    } else {
        $('#rMenu').show();
        $('#m_check').show();
        $('#m_del').show();
    }
}

/**
 * 编辑部门的回调
 */
function onRename(event, treeId, treeNode, isCancel) {

    let opts = { name: treeNode.name, departmentId: treeNode.id, parentId: treeNode.pId }
    console.log('编辑，编辑')
}

function hideRMenu() {
    if (rMenu) rMenu.hide();
    $("body").unbind("mousedown", onBodyMouseDown);
}
/**
 * 增加部门
 */
function addTreeNode() {
    hideRMenu();
    if (zTree_Menu.getSelectedNodes()[0]) {
        let parentId = zTree_Menu.getSelectedNodes()[0].id;
        if (parentId === 2) {
            alert('次节点不能添加部门');
            return;
        }
        zTree_Menu.addNodes(zTree_Menu.getSelectedNodes()[0], { name: `新增部门` });
        $('#rMenu').hide();
    } else {
        console.log('b')
        //zTree_Menu.addNodes(null, newNode);
    }
}

/**
 * 编辑树菜单
 */
function showRMenu(type, x, y) {
    if (type == "root") {
        $("#m_del").hide();
        $("#m_check").hide();
        $("#m_unCheck").hide();
    } else {
        $("#m_del").show();
        $("#m_check").show();
        $("#m_unCheck").show();
    }
    $("#rMenu").css({ "top": y + "px", "left": x + "px" }).show();
    $("body").bind("mousedown", onBodyMouseDown);
}

/**
 * 编辑部门
 */
function edit() {
    $('#rMenu').hide();
    var zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree_Menu.getSelectedNodes(),
        treeNode = nodes[0];
    if (treeNode.id === 1 || treeNode.id === 2) {
        alert('此节点不能编辑');
        return false;
    }
    if (nodes.length == 0) {
        alert("请先选择一个节点");
        return;
    }
    zTree_Menu.editName(treeNode);
    // zTree_Menu.setEditable(false);
};

/**
 * 删除部门
 */
function remove() {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (treeNode.id === 1 || treeNode.id === 2) {
        alert('此节点不能删除');
        return false;
    }
    if (nodes.length == 0) {
        alert("请先选择一个节点");
        return;
    }

    zTree.removeNode(treeNode);
    $('#rMenu').hide();
};

function onBodyMouseDown(event) {
    if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length > 0)) {
        $('#rMenu').hide();
    }
}
/**
    * 添加增加部门
    */
$(document).on('click', '#m_add', function () {
    addTreeNode();
})

/**
 * 编辑部门
 */
$(document).on('click', "#m_check", function () {
    edit();
})

/**
 * 删除部门
 */
$(document).on('click', '#m_del', function () {
    remove();
});

function initTree() {

    let zNodes = [
        { id: 1, pId: 0, name: "用户角色管理 1", open: true },
        { id: 11, pId: 1, name: "菜单管理 1-1" },
        { id: 12, pId: 1, name: "菜单相亲管理 1-2" },
        { id: 2, pId: 0, name: "资源管理 2" },
        { id: 21, pId: 2, name: "用户管理 2-1" },
        { id: 22, pId: 2, name: "角色管理 2-2" },
    ]
    /**
     * 默认初始化调用函数
     */
    let treeObj = $("#treeDemo");
    $.fn.zTree.init(treeObj, setting, zNodes);
    zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
    zTree_Menu_tree = zTree_Menu;
    let node = zTree_Menu.getNodeByTId("treeDemo_1");
    //默认选中车位管家
    curMenu = zTree_Menu.getNodes()[0];
    let check_nodes = zTree_Menu.selectNode(curMenu);
    zTree_Menu.expandNode(curMenu, true, true, true)

}
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        let {Actions} = this.props;
        return (
            <div>
                <AppBody>
                    <Panel title="基于jquery-树插件-ztree 地址:http://www.treejs.cn/v3/demo.php#_111">
                        <Row>
                            <Col span="25">
                                <div className="zTreeDemoBackground left">
                                    <ul id="treeDemo" className="ztree"></ul>
                                </div>
                            </Col>
                        </Row>
                    </Panel>
                </AppBody>
                <div id="rMenu">
                    <ul>
                        <li id="m_add">增加部门</li>
                        <li id="m_del">删除部门</li>
                        <li id="m_check">编辑部门</li>
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount(): void {
        let {Actions} = this.props;
        initTree();
    }

    componentWillUnmount(): void {

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
const App = connect(mapStateToProps, mapDispatchToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    ElementContainer
);



