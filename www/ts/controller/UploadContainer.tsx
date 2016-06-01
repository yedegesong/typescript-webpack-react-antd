import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,
    Upload,
Icon} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
//数据流向
const props = {
    name: 'file',
    action: 'http://text.com/uploadApi.php',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
           alert(`${info.file.name} 上传成功。`);
        } else if (info.file.status === 'error') {
            alert(`${info.file.name} 上传失败。`);
        }
    }
};

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <AppBody>
                <Panel title="文件上传">
                    <Upload {...props}>
                        <Buttons><Icon type="cloudupload"/>点击上传文件</Buttons>
                    </Upload>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction({ parent: 7, child: -1 }))
    }
    
    componentWillUnmount():void {
        
    }
}

let mapStateToProps = (state) => {
    return {
        IndexReducers: state.IndexReducers
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



