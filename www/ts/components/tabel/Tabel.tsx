import * as React from "react";
import * as classNames from "classnames";
interface DashboardProps {
    className?: string;
    columns?: any;
    dataSource?: any;
    showHeader?: any;
    expandIconAsCell?: any;
}
export default class Dashboard extends React.Component<DashboardProps,any> {

    static defaultProps = {
    data: [],
        useFixedHeader: false,
            expandIconAsCell: false,
                columns: [],
                    defaultExpandAllRows: false,
                        defaultExpandedRowKeys: [],
                            rowKey(o) {
        return o.key;
    },
    rowClassName() {
        return '';
    },
    expandedRowClassName() {
        return '';
    },
    onExpand() {
    },
    onExpandedRowsChange() {
    },
    prefixCls: 'rc-table',
        bodyStyle: { },
    style: { },
    childrenColumnName: 'children',
        indentSize: 15,
            columnsPageSize: 5,
                expandIconColumnIndex: 0,
                    showHeader: true,
                        scroll: { },
    rowRef() {
        return null;
    }
    }

    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            currentColumnsPage: 0,
            currentHoverIndex: null,
            scrollPosition: 'left'
        }
    }

    /**
     * body 主容器 包括头部和菜单
     */
    createheader(){
        const {columns, dataSource, className} = this.props;
        console.log(columns)
        /*return <thead>
            <tr>
                <th>名称</th>
                <th>点击次数</th>
                <th>展示次数</th>
                <th>广告费</th>
                <th>查看</th>
            </tr>
        </thead>*/
    }


    getHeader(columns) {
        console.log('a')
        const { showHeader, expandIconAsCell} = this.props;
        let ths = [];
        ths = ths.concat(columns).map(c => {
            if (c.colSpan !== 0) {
                return <th key={c.key} colSpan={c.colSpan} >{c.title}</th>;
            }
        });
        return  (
            <thead >
                <tr>{ths}</tr>
            </thead>
        ) 
    }
    render() {
        const {columns, dataSource, className} = this.props;
        /*console.log(columns);
        console.log(dataSource);*/
        return (<div className="cwgj-table">
                                    <table>
                {this.getHeader(columns) }
                                        <tbody>
                                            <tr>
                                            <td>aaaaaaaaaaaaaaaaaaaaaaaaa(正在展示) </td>
                                                <td>表格5表格表格表格表格</td>
                                                <td>表格6表格表格表格</td>
                                                <td>表格7表格表格</td>
                                                <td>
                                                    <a href="">操作一</a>
                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                    );
    }

}