import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;
interface TipsProps {
    timeout?:any;
    onFinish?:Function;
    showTime?:number;
    message?:string;
    type?:number;
    onClose:Function;
}

 class Tips extends React.Component<TipsProps,any> {

    static defaultProps = {
        timeout:2000,
        type:0,
        showTime:50
    }

    constructor(props){
        super(props);
        this.state = {
            show: false,
            showTime:this.props.showTime,
            message: this.props.message,
            timeout: this.props.timeout,
            type: this.props.type
        };
    }

    componentDidMount() {
        //延迟显示
        this.setState({showTime: setTimeout(()=>{
            this.setState({ show: true});
        },this.state.showTime)});
        //隐藏并且删除
        if(this.props.timeout){
            this.setState({timeout: setTimeout(()=>{
                this.setState({ show: false});
                if(this.props.onFinish) this.props.onFinish(this);
                this.props.onClose();
            },this.state.timeout)})
        }
    }
   
    componentWillUnmount(){
        clearTimeout(this.state.showTime);
        clearTimeout(this.state.timeout);
    }
   
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        let className = classNames(`${css_prefix}-poptips`, {
            'show': this.state.show
        });

        return (
            <div className={ className }>
                <div className={`${css_prefix}-poptips-cnt`}>
                    <p>{this.state.message}</p>
                </div>
            </div>
        );
    }

}

/**
 * 关掉弹出提示框
 */
let  onClose = (messageHolder)=>{
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(messageHolder);
        messageHolder.parentNode && messageHolder.parentNode.removeChild(messageHolder);
                }, 500);        
}

export default function (config?:any):any {

let _messageHolder = document.createElement('div');
    document.body.appendChild(_messageHolder);
    ReactDOM.render(
        <Tips {...config} onClose={() => onClose(_messageHolder)}/>,
        _messageHolder
    );
}