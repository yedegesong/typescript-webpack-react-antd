import * as React from "react";
import classNames from "classnames";
import Tool from '../../pub/Tool';
export default class TableRow extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
		let {record, columns} = this.props;
		const cells = [];
		for (let i = 0; i < columns.length; i++) {
			/**
			 * 得到列数据
			 */
			const col = columns[i];
			/**
			 * 得到行记录
			 */
			const render = col.render;
			/**
			 * 得到对应的行文本数据
			 */
			let text = record[col.dataIndex];
			if (render) {
				text = render(text, record);
			}
			cells.push(
				<td key={i}>
					{text}
				</td>
			);
		}
		
        return (
            <tr>
				{cells}
            </tr>
        );
    }

}