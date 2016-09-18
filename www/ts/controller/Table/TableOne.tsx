import * as React from "react";
import * as ReactDOM from "react-dom";
//自己的第三方组件
import {
    AppBody,
    Panel,
    Echarts,
    Buttons,
    Row,
    Col,
     Table,
      Icon,
      Dialog,
    FormGroup,
FormItems,
InputText} from '../../components/index';

/*class ChangeTable extends React.Component<any, any>{
     constructor(props) {
         super(props);
         
     }

     handleInputChange(name,value){
         console.log(value)
     }
        render(){
            let data = this.props.data.record;
            
            return <FormGroup horizontal >
                    <FormItems label="姓名">
                        <InputText type="test" value={data.name} 
                        onChange={(event) => this.handleInputChange('name',event.target.value) }/>
                    </FormItems>
                    <FormItems label="年龄">
                        <InputText type="test" value = {data.age} 
                        onChange={(event) => this.handleInputChange('age',event.target.value) }/>
                    </FormItems>
                    <FormItems label="住址">
                        <InputText type="test" value = {data.address} 
                        onChange={(event) => this.handleInputChange('address',event.target.value) }/>
                    </FormItems>
                    </FormGroup>
        }
}*/
   const rowRadio = {
        radioName:'pay2',
        value:'2',
        onChange(event,record) {
            console.log(event);
            console.log(record)
  }
};
class ChangeTable extends React.Component<any, any>{
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

     handleInputChange(name,value){
         console.log(value)
     }
        render(){
            let data = this.props.data.record;
            
            return <Table rowRadio = {rowRadio} columns={this.state.columns} dataSource={this.state.data} />
        }
}

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
                            <Buttons type = "primary" size="small" 
                            onClick={() => { this.handChange( record) } }>
                                <Icon type ="edit"/> 修改
                            </Buttons>
                            <Buttons type = "danger" size="small" onClick={() => { this.handDelete(text, record) } }>
                                <Icon type ="delete"/> 删除
                            </Buttons>
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
/**
 * 修改
 */
    handChange(record){
        let data = {
            record
        }
        let buyConfirm = (modal) => {
            modal.close();
        };
        let buyConfirm1 = (modal) => {
            modal.close();
        };
        let actions = [
            { label: '取消', onClick: buyConfirm1 },
            { label: '确定', onClick: buyConfirm, primary: true }
        ];

        Dialog.show(<div><ChangeTable data = {data}/></div>, actions,'修改资料');
    }

    render() {
        return (
            <Table columns={this.state.columns} dataSource={this.state.data} />
        );
    }

    componentDidMount(): void {

    }

    componentWillUnmount(): void {

    }
}




