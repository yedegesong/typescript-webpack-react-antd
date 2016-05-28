import * as React from "react";
import { connect} from 'react-redux';
import Tool from '../../pub/Tool';
import LocalStorage from '../../pub/LocalStorage';
export default class BaseComponent extends React.Component < any, any > {
    constructor(props) {
        super(props);
        /**
         * 处理登录权限
         */
        let _data = LocalStorage.get('cw_auth');
        /**
         * 如果本地存在就取本地数据，否则跳转到登录页。
         */
        if (!_data) {
             alert('请求超时,请重新登录');
             Tool.goPush('login');
        }
      
    }

    componentDidMount() {
       
    }

    componentWillUnmount(){
		
    }
    
}
