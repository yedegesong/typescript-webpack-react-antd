import * as React from "react";
import * as classNames from "classnames";
import Tool from '../../pub/Tool';
import TableRow from './TableRow';
export default class Table extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }



    getHeader(columns) {
        let ths = [];
        ths = ths.concat(columns).map(c => {
            if (c.colSpan !== 0) {
                return <th key={c.key} >{c.title}</th>;
            }
        });
        return (
            <thead >
                <tr>{ths}</tr>
            </thead>
        )
    }

    getBody() {
        let {dataSource, columns} = this.props;
        return dataSource.map((c, i) => {

            return <TableRow key={i}  columns = {columns} record = {c} />
           
            
        })
    }

    render() {
        const {columns, dataSource, className} = this.props;
        let attributeArr = [];
        columns.map((c) => {
            if (c.dataIndex) {
                attributeArr.push(c.dataIndex)
            }
        });
        return (<div className="cwgj-table">
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