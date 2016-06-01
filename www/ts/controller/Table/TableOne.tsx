import * as React from "react";
import * as ReactDOM from "react-dom";
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col, Tabel, Icon} from '../../components/index';
export default class TableOne extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a href="#">{text}</a>,
            }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                }, {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                }, {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                            <Buttons type = "danger" size="small" onClick={() => { this.handDelete(text, record) } }><Icon type ="delete"/> 删除</Buttons>
                        </span>
                    ),
                }],
            data: [{
                key: '1',
                name: '小明',
                age: 32,
                address: '西湖区湖底公园1号',
            }, {
                    key: '2',
                    name: '小红',
                    age: 42,
                    address: '西湖区湖底公园2号',
                }, {
                    key: '3',
                    name: '小东',
                    age: 32,
                    address: '西湖区湖底公园3号',
                }
            ]
        }
    }

    handDelete(text, record) {
        this.state.data.map((d, i) => {
            if (d.key == record.key) {
                this.state.data.splice(i, 1)
            }
        })
        this.setState({
            data: this.state.data
        })
    }
    render() {
        return (
            <Tabel columns={this.state.columns} dataSource={this.state.data} />
        );
    }

    componentDidMount(): void {

    }

    componentWillUnmount(): void {

    }
}




