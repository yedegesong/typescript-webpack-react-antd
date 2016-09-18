import * as React from "react";
import * as ReactDOM from "react-dom";
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col, Table, Icon} from '../../components/index';
    const rowRadio = {
        radioName:'pay',
        value:'2',
        onChange(event,record) {
            //console.log(event);
            console.log(record)
  }
};
export default class TableFour extends React.Component<any, any> {
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


    render() {
        return (
            <Table rowRadio = {rowRadio} columns={this.state.columns} dataSource={this.state.data} />
        );
    }

    componentDidMount(): void {

    }

    componentWillUnmount(): void {

    }
}




