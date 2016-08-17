import * as React from "react";
import classNames from "classnames";
import Tool from '../../pub/Tool';
import Tabs from '../tabs/Tabs';
import TabPane from '../tabs/TabPane';
import Table from './Table';
import TableRow from './TableRow';
export default class TableList extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    createPane(){
        let { data } = this.props;
        return data.map((item,index)=>{
            return <TabPane tab={item.row_title} key={index}>
                <Table columns={item.columns} dataSource={item.data} />
            </TabPane>
        })
    }

    render() {
        return (<Tabs >
                {this.createPane()}
            </Tabs>
        );
    }

}