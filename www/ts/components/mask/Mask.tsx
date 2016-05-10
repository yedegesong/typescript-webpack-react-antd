import * as React from "react";
import * as ReactDOM from "react-dom";
interface MaskProps {
    autoClose?: boolean;
}
const _maskHolder = document.createElement('div');
document.body.appendChild(_maskHolder);

class Mask extends React.Component<MaskProps, any> {

    static defaultProps = {
        autoClose: true
    }

    constructor(props) {
        super(props);
    }

    handleClick() {
        let {autoClose} = this.props;
        if (!autoClose) { return false;}
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(_maskHolder);
        }, 15);
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        return (
            <div className="cwgj-mask"  onClick = {this.handleClick.bind(this) } ></div>
        );
    }

}

export default {

    open(config?: any) {
        ReactDOM.render(
            <Mask {...config} />,
            _maskHolder
        );
    },

    close() {
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(_maskHolder);
        }, 15);
    }

};