import * as React from "react";
//console.log(React)
import * as classNames from "classnames";
export default class Tabs extends React.Component<any, any> {

    static defaultProps = {
        activeKey: 0
    }

    constructor(props){
        super(props);
        this.state = {
            activeKey: this.props.activeKey
        }
        
    }
    onChange(value,key){
        this.setState({
            activeKey: key
        })
        if (this.props.onChange) {
            this.props.onChange(value, key, this);
        }
    }

    TabsTitle (){
        /**--遍历组件--**/
        return React.Children.map(this.props.children, (c: any,index:any) => {
            let Cls = this.state.activeKey == index ? 'tabOn' : ' ';
            return <div className = {Cls} onClick={(event)=>this.onChange(c.props.tab,index)}>{c.props.tab}</div>
        });
    }
    tabConten() {
        /**--克隆组件返回新添加组件--**/
        return React.Children.map(this.props.children, (c: any, index: any) => {
            let Cls = this.state.activeKey == index ? 'TabConOn' : ' ';
            return React.cloneElement(c, { className: Cls })
        });
        /**--遍历组件--**/
    }
    render() {
        const {children} = this.props;
        return (
            <div className="cwgj-tabs">
                <div className="cwgj-tabs-title">
                    {this.TabsTitle()}
                </div>
                <div className="cwgj-tabs-content">
                    {this.tabConten() }
                </div>
            </div>)
    }

}