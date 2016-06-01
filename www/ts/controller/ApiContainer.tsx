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
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
//表单验证模块
import Verifier from '../pub/Verifier';
const store = BaseStore({  });
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBody>
                <Row>
                    <Col span="50">
                        <Panel  title="面板-字体辅助">
                            <div>
                                <div className="cwgj-text-muted">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                                <div className="cwgj-text-primary">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                                <div className="cwgj-text-info">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                                <div className="cwgj-text-success">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                                <div className="cwgj-text-danger">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                                <div className="cwgj-text-warning">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                            </div>
                        </Panel>
                    </Col>
                <Col span="50">
                    <Panel  title="面板-字体位置">
                        <div>
                            <div className="cwgj-text-left">我是文字位置左</div>
                            <div className="cwgj-text-center">我是文字位置中</div>
                            <div className="cwgj-text-right">我是文字位置右</div>
                        </div>
                    </Panel>
                </Col>
                </Row>
                <Panel title="所有图标-面板">
                    <Icon type="arrowleft"/>&nbsp; &nbsp;
                    <Icon type="arrowright"/>&nbsp; &nbsp;
                    <Icon type="arrowup"/>&nbsp; &nbsp;
                    <Icon type="arrowdown"/>&nbsp; &nbsp;
                    <Icon type="caretcircleleft"/>&nbsp; &nbsp;
                    <Icon type="caretcircleright"/>&nbsp; &nbsp;
                    <Icon type="caretcircleup"/>&nbsp; &nbsp;
                    <Icon type="caretcircledown"/>&nbsp; &nbsp;
                    <Icon type="forward"/>&nbsp; &nbsp;
                    <Icon type="backward"/>&nbsp; &nbsp;
                    <Icon type="caretcircleoleft"/>&nbsp; &nbsp;
                    <Icon type="caretcircleoright"/>&nbsp; &nbsp;
                    <Icon type="caretcircleodown"/>&nbsp; &nbsp;
                    <Icon type="caretright"/>&nbsp; &nbsp;
                    <Icon type="caretleft"/>&nbsp; &nbsp;
                    <Icon type="caretup"/>&nbsp; &nbsp;
                    <Icon type="caretdown"/>&nbsp; &nbsp;
                    <Icon type="fastforward"/>&nbsp; &nbsp;
                    <Icon type="fastbackward"/>&nbsp; &nbsp;
                    <Icon type="stepbackward"/>&nbsp; &nbsp;
                    <Icon type="stepforward"/>&nbsp; &nbsp;
                    <Icon type="circleodown"/>&nbsp; &nbsp;
                    <Icon type="circleoup"/>&nbsp; &nbsp;
                    <Icon type="circleoleft"/>&nbsp; &nbsp;
                    <Icon type="circleup"/>&nbsp; &nbsp;
                    <Icon type="circleright"/>&nbsp; &nbsp;
                    <Icon type="circleup"/>&nbsp; &nbsp;
                    <Icon type="playcircle"/>&nbsp; &nbsp;
                    <Icon type="playcircleo"/>&nbsp; &nbsp;
                    <Icon type="circleleft"/>&nbsp; &nbsp;
                    <Icon type="right"/>&nbsp; &nbsp;
                    <Icon type="left"/>&nbsp; &nbsp;
                    <Icon type="up"/>&nbsp; &nbsp;
                    <Icon type="down"/>&nbsp; &nbsp;
                    <Icon type="reload"/>&nbsp; &nbsp;
                    <Icon type="doubleleft"/>&nbsp; &nbsp;
                    <Icon type="doubleright"/>&nbsp; &nbsp;
                    <Icon type="retweet"/>&nbsp; &nbsp;
                    <Icon type="shrink"/>&nbsp; &nbsp;
                    <Icon type="arrowsalt"/>&nbsp; &nbsp;
                    <Icon type="rollback"/>&nbsp; &nbsp;
                    <Icon type="verticleleft"/>&nbsp; &nbsp;
                    <Icon type="verticleright"/>&nbsp; &nbsp;
                    <Icon type="cross"/>&nbsp; &nbsp;
                    <Icon type="check"/>&nbsp; &nbsp;
                    <Icon type="checkcircle"/>&nbsp; &nbsp;
                    <Icon type="checkcircleo"/>&nbsp; &nbsp;
                    <Icon type="crosscircle"/>&nbsp; &nbsp;
                    <Icon type="crosscircleo"/>&nbsp; &nbsp;
                    <Icon type="exclamation"/>&nbsp; &nbsp;
                    <Icon type="exclamationcircle"/>&nbsp; &nbsp;
                    <Icon type="exclamationcircleo"/>&nbsp; &nbsp;
                    <Icon type="info"/>&nbsp; &nbsp;
                    <Icon type="infocircle"/>&nbsp; &nbsp;
                    <Icon type="infocircleo"/>&nbsp; &nbsp;
                    <Icon type="minuscircle"/>&nbsp; &nbsp;
                    <Icon type="minuscircleo"/>&nbsp; &nbsp;
                    <Icon type="minus"/>&nbsp; &nbsp;
                    <Icon type="pluscircleo"/>&nbsp; &nbsp;
                    <Icon type="pluscircle"/>&nbsp; &nbsp;
                    <Icon type="plus"/>&nbsp; &nbsp;
                    <Icon type="swapleft"/>&nbsp; &nbsp;
                    <Icon type="swapright"/>&nbsp; &nbsp;
                    <Icon type="swap"/>&nbsp; &nbsp;
                    <Icon type="clockcircle"/>&nbsp; &nbsp;
                    <Icon type="clockcircleo"/>&nbsp; &nbsp;
                    <Icon type="pausecircle"/>&nbsp; &nbsp;
                    <Icon type="pausecircleo"/>&nbsp; &nbsp;
                    <Icon type="pause"/>&nbsp; &nbsp;
                    <Icon type="question"/>&nbsp; &nbsp;
                    <Icon type="questioncircleo"/>&nbsp; &nbsp;
                    <Icon type="areachart"/>&nbsp; &nbsp;
                    <Icon type="appstore"/>&nbsp; &nbsp;
                    <Icon type="apple"/>&nbsp; &nbsp;
                    <Icon type="android"/>&nbsp; &nbsp;
                    <Icon type="bars"/>&nbsp; &nbsp;
                    <Icon type="barchart"/>&nbsp; &nbsp;
                    <Icon type="calendar"/>&nbsp; &nbsp;
                    <Icon type="book"/>&nbsp; &nbsp;
                    <Icon type="chrome"/>&nbsp; &nbsp;
                    <Icon type="code"/>&nbsp; &nbsp;
                    <Icon type="creditcard"/>&nbsp; &nbsp;
                    <Icon type="customerservice"/>&nbsp; &nbsp;
                    <Icon type="copy"/>&nbsp; &nbsp;
                    <Icon type="delete"/>&nbsp; &nbsp;
                    <Icon type="ellipsis"/>&nbsp; &nbsp;
                    <Icon type="edit"/>&nbsp; &nbsp;
                    <Icon type="export"/>&nbsp; &nbsp;
                    <Icon type="exception"/>&nbsp; &nbsp;
                    <Icon type="file"/>&nbsp; &nbsp;
                    <Icon type="filetext"/>&nbsp; &nbsp;
                    <Icon type="filter"/>&nbsp; &nbsp;
                    <Icon type="folder"/>&nbsp; &nbsp;
                    <Icon type="frowncircle"/>&nbsp; &nbsp;
                    <Icon type="frown"/>&nbsp; &nbsp;
                    <Icon type="smilecircle"/>&nbsp; &nbsp;
                    <Icon type="smile"/>&nbsp; &nbsp;
                    <Icon type="mehcircle"/>&nbsp; &nbsp;
                    <Icon type="meh"/>&nbsp; &nbsp;
                    <Icon type="github"/>&nbsp; &nbsp;
                    <Icon type="laptop"/>&nbsp; &nbsp;
                    <Icon type="ie"/>&nbsp; &nbsp;
                    <Icon type="linechart"/>&nbsp; &nbsp;
                    <Icon type="link"/>&nbsp; &nbsp;
                    <Icon type="logout"/>&nbsp; &nbsp;
                    <Icon type="mail"/>&nbsp; &nbsp;
                    <Icon type="menuunfold"/>&nbsp; &nbsp;
                    <Icon type="menufold"/>&nbsp; &nbsp;
                    <Icon type="mobile"/>&nbsp; &nbsp;
                    <Icon type="notification"/>&nbsp; &nbsp;
                    <Icon type="paperclip"/>&nbsp; &nbsp;
                    <Icon type="phone"/>&nbsp; &nbsp;
                    <Icon type="picture"/>&nbsp; &nbsp;
                    <Icon type="piechart"/>&nbsp; &nbsp;
                    <Icon type="poweroff"/>&nbsp; &nbsp;
                    <Icon type="setting"/>&nbsp; &nbsp;
                    <Icon type="sharealt"/>&nbsp; &nbsp;
                    <Icon type="search"/>&nbsp; &nbsp;
                    <Icon type="poweroff1"/>&nbsp; &nbsp;
                    <Icon type="solution"/>&nbsp; &nbsp;
                    <Icon type="tablet"/>&nbsp; &nbsp;
                    <Icon type="team"/>&nbsp; &nbsp;
                    <Icon type="totop"/>&nbsp; &nbsp;
                    <Icon type="videocamera"/>&nbsp; &nbsp;
                    <Icon type="user"/>&nbsp; &nbsp;
                    <Icon type="save"/>&nbsp; &nbsp;
                    <Icon type="unlock"/>&nbsp; &nbsp;
                    <Icon type="shoppingcart"/>&nbsp; &nbsp;
                    <Icon type="windows"/>&nbsp; &nbsp;
                    <Icon type="aliwangwango"/>&nbsp; &nbsp;
                    <Icon type="aliwangwang"/>&nbsp; &nbsp;
                    <Icon type="camerao"/>&nbsp; &nbsp;
                    <Icon type="camera"/>&nbsp; &nbsp;
                    <Icon type="eyeo"/>&nbsp; &nbsp;
                    <Icon type="eye"/>&nbsp; &nbsp;
                    <Icon type="enviroment"/>&nbsp; &nbsp;
                    <Icon type="enviromento"/>&nbsp; &nbsp;
                    <Icon type="staro"/>&nbsp; &nbsp;
                    <Icon type="star"/>&nbsp; &nbsp;
                    <Icon type="tags"/>&nbsp; &nbsp;
                    <Icon type="tagso"/>&nbsp; &nbsp;
                    <Icon type="tag"/>&nbsp; &nbsp;
                    <Icon type="tago"/>&nbsp; &nbsp;
                    <Icon type="cloud"/>&nbsp; &nbsp;
                    <Icon type="clouddownload"/>&nbsp; &nbsp;
                    <Icon type="cloudupload"/>&nbsp; &nbsp;
                    <Icon type="clouduploado"/>&nbsp; &nbsp;
                    <Icon type="clouddownloado"/>&nbsp; &nbsp;
                    <Icon type="cloudo"/>&nbsp; &nbsp;
                    <Icon type="iconfontcaretcircleoup"/>&nbsp; &nbsp;
                    <Icon type="loading"/>&nbsp; &nbsp;
                    <Icon type="dislike"/>&nbsp; &nbsp;
                    <Icon type="like"/>&nbsp; &nbsp;
                    <Icon type="message"/>&nbsp; &nbsp;
                    <Icon type="download"/>&nbsp; &nbsp;
                    <Icon type="upload"/>&nbsp; &nbsp;
                    <Icon type="paycircle"/>&nbsp; &nbsp;
                    <Icon type="paycircleo"/>&nbsp; &nbsp;
                    <Icon type="exclefile"/>&nbsp; &nbsp;
                    <Icon type="pdffile"/>&nbsp; &nbsp;
                    <Icon type="pptfile"/>&nbsp; &nbsp;
                    <Icon type="jpgfile"/>&nbsp; &nbsp;
                    <Icon type="unknowfile"/>&nbsp; &nbsp;
                    <Icon type="minussquareo"/>&nbsp; &nbsp;
                    <Icon type="plussquareo"/>&nbsp; &nbsp;
                    <Icon type="iconfontdesktop"/>&nbsp; &nbsp;
                    <Icon type="folderopen"/>&nbsp; &nbsp;
                    <Icon type="circledown"/>&nbsp; &nbsp;
                    <Icon type="qrcode"/>&nbsp; &nbsp;
                    <Icon type="scan"/>&nbsp; &nbsp;
                    <Icon type="heart"/>&nbsp; &nbsp;
                    <Icon type="hearto"/>&nbsp; &nbsp;
                    <Icon type="calculator"/>&nbsp; &nbsp;
                    <Icon type="appstoreo"/>&nbsp; &nbsp;
                    <Icon type="lock"/>&nbsp; &nbsp;
                </Panel>
                <Panel title="面板-指示牌">
                    <Row className="userCenter-list">
                                    <Col span='25'>
                                    <Dashboard label={1} type="a">
                                            总点击次数(次)
                                        </Dashboard>
                                    </Col>
                                    <Col span='25'>
                                    <Dashboard label={2} type="b">
                                            总展示次数(次)
                                        </Dashboard>
                                    </Col>
                                    <Col span='25'>
                                    <Dashboard label={3} type="c">
                                            总广告费(元)
                                        </Dashboard>
                                    </Col>
                                    <Col span='25'>
                                    <Dashboard label={ 4} type="d">
                                            目前广告正在展示数(条)
                                        </Dashboard>
                                    </Col>
                                </Row>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction({ parent: 0, child: -1 }))
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



