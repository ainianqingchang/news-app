import React,{Component} from 'react';
import {Row,Col} from 'antd';
import {Menu,Icon} from 'antd';
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.MenuItemGroup;

export default class MobileHeader extends Component{
    render(){
        return(
            <div id="mobileheader">
                <header>
                       
                            <img src="images/logo.png" alt="logo"/>
                            <span>React News</span>
                        
                </header>
            </div>
        );
    }
}