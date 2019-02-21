import React,{Component} from 'react';
import {Row,Col} from 'antd';
import {Menu,Icon} from 'antd';
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.MenuItemGroup;

export default class MoblileFooter extends Component{


    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    
                    <Col span={20} className="footer">
                       &copy;&nbsp;2016 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}