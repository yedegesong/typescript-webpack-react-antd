import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

let changeCls = (dom)=>{
    dom.classList.toggle('folding-item-on')
}
export default class Folding extends React.Component<any, any> {

    activeArr:any;
    constructor(props){
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
        this.activeArr = []
        this.state = {
            activeKey: []
        }
        
    }

    /*onClickItem(child){
        const optionIndex = this.activeArr.indexOf(child.key);
        if (optionIndex === - 1) {
            this.activeArr.push(child.key);
        } else {
           this.activeArr.splice(optionIndex, 1);
        }

        this.setState({
            activeKey:this.activeArr
        })

    }*/

onClickItem(event,child){
        let _DOM = ReactDOM.findDOMNode(this);
        changeCls(_DOM.childNodes[child])
        //event.target.parentNode.classList.toggle('folding-item-on');
    }

    createItem(){
        return React.Children.map(this.props.children, (child: any,index:any) => {
           //let activeKey = this.state.activeKey.length == 1 ? this.state.activeKey[0] : this.state.activeKey[index];
           /*let Cls = classNames('folding-item', {
                'folding-item-on': index == this.state.activeKey[index]
            });*/
            let Cls = classNames('folding-item');
            return <div className={Cls}>
                        <div className="item-header" onClick={(event)=>{
                            this.onClickItem(event,index)
                        }}>
                            <b className="item-icion"></b>
                            {child.props.header}
                        </div>
                        <div className="item-content">
                            {child.props.children}
                        </div>
                    </div>
        });
    }

    render() {
        let {children} = this.props;
        return (
                <div className={`${css_prefix}-folding`}>
                {this.createItem()}
                </div>
            )
    }

}