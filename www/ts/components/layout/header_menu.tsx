import * as React from "react";
import Config from '../../pub/Config';
import Tool from '../../pub/Tool';
const TelBaseUrl = Config.TelBaseUrl;
let handleClick = (value)=>{
    //alert(value)
    switch(value)
        {
            case '充值':
                Tool.goPush('recharge_alipay');
            break;
            case '退款':
                Tool.goPush('refund');
            break;
            case '审核':
                Tool.goPush('check_adv');
            break;
        }
    
}
//数据流向
let header_menu = ()=>{
    return <ul>
                {['测试一','测试二','测试三','测试四'].map((value,key)=>{
                    return <li key={key} onClick={()=>{handleClick(value)}}>{value}</li>
                })}
            </ul>
}

export default header_menu();


