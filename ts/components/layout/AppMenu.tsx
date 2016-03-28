import * as React from "react";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
export default class AppMenu extends React.Component<any,any> {
    
    constructor(props){
        super(props);
        this.state = {
            current:'1',
            openKey:[]
        }
    }
    
    handleClick(e):void {
        console.log('click ', e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1)
        });
  }
    
    onToggle(info):void{
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
        });
  }
  
    render(){
        return (
      <Menu >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
          <Menu.Item key="1">选项1</Menu.Item>
          <Menu.Item key="2">选项2</Menu.Item>
          <Menu.Item key="3">选项3</Menu.Item>
          <Menu.Item key="4">选项4</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}