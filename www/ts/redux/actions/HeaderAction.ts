import Config from '../../pub/Config';
import Tool from '../../pub/Tool';
import Api from '../../pub/Api';
import {Tips, Dialog} from '../../components/index';
import LocalStorage from '../../pub/LocalStorage';
/**
 * 菜单初始化获取值
 */
const GET_AUTH = 'GET_AUTH';

let OnGetAuth = (state) => {
    return { type: GET_AUTH, state };
}

/**
 * 获取个人资料数据，如果存在读取本地数据。
 */
function getAuthAction(reddit?: any) {
    return (dispatch, getState) => {
        let _data = LocalStorage.get('cw_auth');
        /**
         * 如果本地存在就取本地数据，否则跳转到登录页。
         */
        if (_data) {
            dispatch(OnGetAuth(_data));
            return false;
        }
        
        //alert('请求超时,请重新登录');
        //Tool.goPush('login');
    }
}

/**
 * 退出操作
 */
function loginOutAction(){
    let buyConfirm = (modal) => {
        Api.exit().then(function(data){
            if (data.r_msg == 'success'){
                LocalStorage.remove('cw_auth');
                Tool.goPush('login');
            }
        })
        modal.close();
    }

    let actions = [
        { label: '取消' },
        { label: '确定', onClick: buyConfirm, primary: true }
    ]

    Dialog.show('您确定要退出？', actions);
    
}

export {
    GET_AUTH,
    getAuthAction,
    loginOutAction
}