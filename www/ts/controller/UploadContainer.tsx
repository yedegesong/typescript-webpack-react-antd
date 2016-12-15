import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons,
    Upload,
    Icon,Toast
} from '../components/index';
//自己书写的基类
import BaseContainer from '../common/BaseContainer';
import { BaseStore } from '../redux/store/BaseStore';
import {UploadReducer,ImageListAction} from '../redux/UploadReducer';
const store = BaseStore({UploadReducer});
//数据流向
const props = {
    name: 'file',
    action: 'http://127.0.0.1:3000/upload',
    headers: {
        authorization: 'authorization-text',
    },
    beforeUpload(files) {
        //console.log(files)
    },
    onStart(files) {
        console.log(files)
        Toast.open({tips:'图片上传中'});
    },
    onSuccess(ret) {
       //console.log(ret.filename);
        ImageListAction(store,ret.filename); 
        Toast.close();
    },
    onProgress(step, file) {
       // console.log('onProgress', step, file);
    },
    onError(err) {
        console.log('onError', err);
        
    }
};

class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    render() {
        let {UploadReducer, Actions} = this.props;
        console.log(UploadReducer)
        return (
            <AppBody>
                <Panel title="文件上传">
                    <div>
                        <ul className="list-images">
                            {UploadReducer.imagesList.map((value,key)=>{
                                return <li key={key}><img src={value.url} /></li>
                            })}
                        </ul>
                    </div>
                    <Upload {...props}>
                        <div className="upload">
                            <div>
                                <Icon type="zj" />
                            </div>
                            点击上传
                    </div>
                    </Upload>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount(): void {
        let {Actions} = this.props;
    }

    componentWillUnmount(): void {

    }
}

let mapStateToProps = (state) => {
    return {
        UploadReducer:state.UploadReducer
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



