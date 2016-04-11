import * as React from "react";
import {connect} from 'react-redux';
import Tool from '../../pub/Tool';
import {selectMenu} from '../../redux/actions/BaseAction';

interface AppMenuProps {
    active:number;
    MenuReducers:any;
    dispatch:Function;
}

class AppMenu extends React.Component<AppMenuProps,any> {
    
    constructor(props){
        super(props);
        //让当前函数this 指向到类本身
        this.createItem = this.createItem.bind(this);
        this.state = {
            active: 0
        }
    }
    
    handleOrderTabClick(event,index){
        this.setState({active:index});
        //console.log(Tool.hasClass(event.target.parentNode,'active'))
        
        if(Tool.hasClass(event.target.parentNode,'active')){
            Tool.removeClass(event.target.parentNode,'active')
        }
        //防止冒泡多次触发
        event.preventDefault();
        event.stopPropagation();
    }

    createItem(item,index){
        //判断是否存在子菜单
        let hasChild = item.subMunu.length >0 ? true : false;
        let active = this.state.active == index ? "cw-menu-parent-item active" : "cw-menu-parent-item";
        return (
            <li key={index} className={ active } >
                <h3 className = {hasChild ? 'on' : 'off'} onClick = {(event) => this.handleOrderTabClick(event, index)}>{item.name}</h3>
                { hasChild ? (
                    <ul className="cw-menu-child">
                        {item.subMunu.map((childItem,childIndex) => {
                            return (<li key = {childIndex} className="cw-menu-child-item">
                                        <a href="#">{childItem.name}</a>
                                    </li>
                                    )
                        })}
                    </ul>) : null}
            </li>
        )
    }

    render(){

        const {MenuReducers,dispatch} = this.props;
        return (
          <div className="cw-menu">
              <ul className="cw-menu-parent" >
                  {MenuReducers.map(this.createItem)}
              </ul>
          </div>
        );
  }

    componentDidMount() {
        let {MenuReducers,dispatch} = this.props;
        dispatch(selectMenu())
    }

}

let mapStateToProps = (state) => {
    return {
        MenuReducers: state.MenuReducers.menuList
    }
}

export default connect(mapStateToProps)(AppMenu);