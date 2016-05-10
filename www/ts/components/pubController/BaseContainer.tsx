import * as React from "react";
import { connect} from 'react-redux';

export default class BaseComponent extends React.Component < any, any > {
    constructor(props) {
        super(props);
    }

    pushMenu(active):any{
    	console.log(active)
    }

    componentDidMount() {
        alert('您调用了父类')
    }

    componentWillUnmount(){
		
    }
    
}
