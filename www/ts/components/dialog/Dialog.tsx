import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from "classnames";
import Mask from "../mask/Mask";
interface DialogProps {
    className?: string;
    show?: boolean;
    type?: any;
    header?: any;
    title?: string;
    actions?: any;
    onMaskClick?: any;
    onClose?: any;
    id?: any;
    center?: any;
    children?: any;
    childrens?: any;
}
class Dialog extends React.Component<DialogProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        }
    }

    static defaultProps = {
        actions: [],
        className: '',
        show: true,
        type: 'confirm'
    }

    renderActions() {
        return this.props.actions.map((action, idx) => {

            let className = classNames('chgj-btn_dialog', {
                default: !action.primary,
                primary: action.primary
            });

            if (action.className) className += ` ${action.className}`;

            if (action.onClick) {
                let _click = action.onClick;
                action.onClick = () => {
                    _click(this);
                };
            }
            else {

                action.onClick = () => {
                    this.close();
                };
            }

            return (<a href="javascript:;" key={idx} {...action} className={className}>{action.label}</a>);
        });
    }

    close() {
        this.props.onClose && this.props.onClose();
        Mask.close();
    }

    render() {
        let className = classNames({
            'cwgj-dialog_alert': this.props.type == 'alert',
            'cwgj-dialog_confirm': this.props.type == 'confirm'
        });

        let contentClassName = 'chgj-dialog';
        if (this.props.className) contentClassName += ` ${this.props.className}`;

        let Children = React.cloneElement(this.props.children);

        return (
            <div id={this.props.id} className={className}>
                <div {...this.props} className={contentClassName}>
                    <div className="chgj-dialog_hd">
                        {this.props.title ? <strong className="chgj-dialog_title">{this.props.title}</strong> : null}
                        {this.props.header}
                    </div>
                    <div className="chgj-dialog_bd">{this.props.children}</div>
                    <div className="chgj-dialog_ft">
                        {this.renderActions() }
                    </div>
                </div>
            </div>
        );
    }
}


let show = (content?: any, actions?: any, callback?: any, title?: string) => {
    init(content, actions, callback, title);
};

let dailog = (content?: any, actions?: any, callback?: any, title?: string) => {
    show(content, actions, callback, title);
};

//内容，按钮名称，弹出回调
let alter = (content?: any, label?: any, callback?: Function) => {
    dailog(content, [{ label: label || '确定' }], callback);
};

let onClose = (div) => {
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode && div.parentNode.removeChild(div);
};

let init = (content?: any, actions?: any, callback?: Function, title?: string) => {
    let dialogHolder = document.createElement('div');
    document.body.appendChild(dialogHolder);
    let dailog = {};

    ReactDOM.render(<Dialog type="confirm" show={true} onClose={() => onClose(dialogHolder) }
        actions={actions}>{content}</Dialog>, dialogHolder, function() {
            dailog = this;
            callback && callback(dailog);
        });
    Mask.open({ autoClose: false });
};



export default { show, dailog, alter };