import * as React from "react";
import classNames from "classnames";
import  UploadFile from 'rc-upload';
export default class Upload extends React.Component<any,any> {

    constructor(props){
        super(props);
       /* return <UploadFile {...props}>
				    {this.props.children}
        	    </UploadFile>;*/
    }

    render() {
		let props = this.props;
        return <UploadFile {...props}>
				    {this.props.children}
        	    </UploadFile>
    }

}