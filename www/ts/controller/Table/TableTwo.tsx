import * as React from "react";
import * as ReactDOM from "react-dom";
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col,Icon,TableList} from '../../components/index';
export default class TableOne extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            classification:[
                {
                    row_title:'交易报名',
                    columns: [{
                        title: '电子劵送劵量',
                        dataIndex: 'name',
                        key: 'name'
                    }, {
                        title: '电子交易量',
                        dataIndex: 'age',
                        key: 'age',
                    }],
                    data: [{
                        key: '1',
                        name: '小明',
                        age: 32
                    }, {
                        key: '2',
                        name: '小红',
                        age: 42
                    }
                    ]
                },
                {
                    row_title:'销售报名',
                    columns: [{
                        title: '点击次数',
                        dataIndex: 'click',
                        key: 'click'
                    }, {
                        title: '充值金额',
                        dataIndex: 'paynum',
                        key: 'paynum',
                    }],
                    data: [{
                        key: '1',
                        click: '10次',
                        paynum: 32
                    }, {
                        key: '2',
                        click: '20次',
                        paynum: 42
                    }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <TableList data = {this.state.classification}/>
            </div>

        );
    }

    componentDidMount(): void {

    }

    componentWillUnmount(): void {

    }
}




