import React,{Component} from 'react';
import {Row,Col} from 'antd';
import {Menu,Icon} from 'antd';
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.MenuItemGroup;

export default class PCHdeader extends Component{

    constructor(){
        super();
        this.state={
            current:'top'
        }
    }

    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="images/logo.png" alt="logo"/>
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" ></Icon>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"></Icon>社会
                            </Menu.Item>
                            <Menu.Item  key="guonei">
                                <Icon type="appstore"></Icon>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"></Icon>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"></Icon>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"></Icon>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"></Icon>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"></Icon>时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}