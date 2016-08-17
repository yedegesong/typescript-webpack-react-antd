import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
const css_prefix = ComponentsConfig.css_prefix;

export default class FormGroup extends React.Component<any,any> {
    /**
     * 表单布局 块布局(默认),水平布局(horizontal),行内布局(inline)
     * @type {{type: string}}
     */
    static defaultProps = {
        type: 'horizontal'
    }

    constructor(props){
        super(props);
    }
    /**
     * body 主容器 包括头部和菜单
     */
     toChild(){
        const {children,horizontal,inline,className} = this.props;
        /**
            传递给子元素是否行内样式
        **/
        return React.Children.map(this.props.children, (c: any,index:any) => {
            let bool = inline ? true : false;
            return React.cloneElement(c, { isInline: bool })
        });
    }
    render() {
        const {children,horizontal,inline,className} = this.props;
        let addClassName = className;
        let Cls = classNames(
            `${css_prefix}-form-group`,
            {'horizontal':horizontal,
                'inline':inline,
                [`${addClassName}`]: className});
        return (<div className = {Cls}>
                    {this.toChild()}
                </div>
                    );
    }

}