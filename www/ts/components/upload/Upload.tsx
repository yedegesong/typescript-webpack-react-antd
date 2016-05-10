import * as React from "react";
import * as classNames from "classnames";
import * as UploadFile from 'rc-upload';
export default class Upload extends React.Component<any,any> {

    constructor(props){
        super(props);
    }

    render() {
		let props = this.props;
        return <UploadFile {...props}>
				{this.props.children}
        	</UploadFile>;
    }

}