import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import Tool from '../../pub/Tool';
import TableRow from './TableRow';
import InputCheckbox from '../form/InputCheckbox';
import InputRadio from '../form/InputRadio';
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
export default class Table extends React.Component<any, any> {
    onceTable:boolean;
    checkedValue:any;
    constructor(props) {
        super(props);
        this.onceTable = true;
        this.checkedValue = [];
        this.state = {
            allChecked:false,
            radioChecked:this.props.rowRadio ? this.props.rowRadio.value : '-1'
        }
    }

    /**
     * 遍历头部
     * @param columns
     * @returns {any}
     */
    getHeader(columns) {
        let ths = [];
        ths = ths.concat(columns).map((c,i) => {
            if(c.key == 'checked'){
                return <th key={'checked'} >
                    <InputCheckbox checked = {this.state.allChecked} onChange={(value)=>this.allCheckbox(value)}/>
                </th>;
            }
            if(c.key == 'radio'){
                return <th key={'radio'}></th>;
            }
            if (c.colSpan !== 0) {
                return <th key={i} >{c.title}</th>;
            }

        });
        return (
            <thead >
                <tr>{ths}</tr>
            </thead>
        )
    }

    /**
     * 遍历身体
     * @returns {any}
     */
    getBody() {
        let {dataSource, columns,rowSelection} = this.props;
        return dataSource.map((c, i) => {
            return <TableRow key={i}  columns = {columns} record = {c} />
        })
    }
    /**
     * 单选框选择操作
     */
    hanldRadio(event,record){
        let {rowRadio} = this.props;
        rowRadio.onChange(event,record)
        this.setState({
            radioChecked:event.target.value
        })
        //console.log(record)
       // console.log(event.target.checked)
    }
    /**
     * 处理复选框全部表单
     */
    allCheckbox(value){
        let {dataSource,rowSelection} = this.props;
        if(value){
            /**
             * 遍历加载全部数据
             */
            dataSource.forEach((v)=>{
                this.checkedValue.push(v);
            })
            this.setState({
                allChecked:true
            })
        }else{
            this.setState({
                allChecked:false
            })
            this.checkedValue = [];
        }
        //回调全部选择的数据
        rowSelection.onSelectAll(this.checkedValue);
    }
    /**
     * 处理单个子复选框
     * @param value
     * @param record
     */
    childCheckbox(value,record){
        let {dataSource,rowSelection} = this.props;
        if(value){
            this.checkedValue.push(record);
            if(this.checkedValue.length == dataSource.length){
                this.setState({
                    allChecked:true
                })
            }
        }else{
            let optionIndex = this.checkedValue.indexOf(record);
            this.checkedValue.splice(optionIndex, 1);
            if(this.checkedValue.length == 0){
                this.setState({
                    allChecked:false
                })
            }
        }
        //单个复选框选择回调
        rowSelection.onChange(record);
        //回调返回选择的数据
        rowSelection.onSelect(this.checkedValue);
    }

    render() {
        let {columns,rowSelection, dataSource,rowRadio, className} = this.props;
        /**
         * 带复选框的表格
         */
        if(rowSelection&&this.onceTable){
            //阻止多次创建
            this.onceTable = false;
            columns.unshift({
                title: '复选框',
                dataIndex: 'checked',
                key: 'checked',
                render: (text, record) => (
                    <span>
                            <InputCheckbox checked = {this.state.allChecked} onChange={(value)=>this.childCheckbox(value,record)}/>
                        </span>
                )
            });
        }
        /**
         * 带单选框的表格
         */
        if(rowRadio&&this.onceTable){
            //阻止多次创建
            this.onceTable = false;
            columns.unshift({
                title: '单选框',
                dataIndex: 'radio',
                key: 'radio',
                render: (text, record) => (
                    <span>
                            <InputRadio name={rowRadio.radioName} 
                             checked = {this.state.radioChecked == record.key ? true : false}
                             value={record.key}
                             onChange={(value)=>this.hanldRadio(value,record)}
                              />
                        </span>
                )
            });
        }

        return (<div className={`${css_prefix}-table`}>
            <table>
                {this.getHeader(columns) }
                 <tbody>
                    {this.getBody() }
                </tbody>
            </table>
        </div>
        );
    }

}