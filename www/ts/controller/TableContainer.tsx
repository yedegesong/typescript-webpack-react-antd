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
    Col} from '../components/index';
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
                <Panel  title="表格">
                    <div className="cwgj-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>名称</th>
                                    <th>名字</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>嘻嘻嘻</td>
                                    <td>表格5表格表格表格表格</td>
                                    <td>表格6表格表格表格</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Panel>
            </AppBody>
        );
    }

    componentDidMount():void {
        
       var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)",
                x:'center'
            },
            legend: {
                left: 'center',
                x:'center',
                data: ['金山大道商圈','福湾商圈','晋安区政府商圈','前屿商圈']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            "circleId": 2,
                            "name": "金山大道商圈",
                            "value": 0
                        },
                        {
                            "circleId": 3,
                            "name": "福湾商圈",
                            "value": 0
                        },
                        {
                            "circleId": 4,
                            "name": "晋安区政府商圈",
                            "value": 0
                        },
                        {
                            "circleId": 5,
                            "name": "前屿商圈",
                            "value": 0
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
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



