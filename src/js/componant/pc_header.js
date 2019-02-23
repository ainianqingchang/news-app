import React,{Component} from 'react';
import {Row,Col} from 'antd';
import {
    Menu,Icon,Tabs,message,Form,Input,Button,Checkbox,Modal
} from 'antd';
import { Link } from 'react-router-dom';
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.MenuItemGroup;

const FormItem=Form.Item;
const TabPane=Tabs.TabPane;

class PCHdeader extends Component{

    constructor(){
        super();
        this.state={
            current:'top',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userid:0
        }
        
    }

    componentWillMount(){
        if(localStorage.userid!=''&&localStorage.userid!=undefined){
            this.setState({hasLogined:true});
            this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
        }
    };

    callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};

    handleClick(e) {
		if (e.key == "register") {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			{
				this.setState({current: e.key});
			}
		}
    };
    
    handleSubmit(e){
        e.preventDefault();
		let myFetchOptions = {
			method: 'GET'
		};
        let formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
        + formData.r_confirmPassword, myFetchOptions)
        .then(response => response.json())
		.then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
        });
        if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
    }

    setModalVisible(modalVisible){
        this.setState({modalVisible:modalVisible});
    }

    logout(){
        localStorage.userid='';
        localStorage.userNickName='';
        this.setState({hasLogined:false});

    }

    

    render(){
        let {getFieldProps} = this.props.form;
        const usershow=this.state.hasLogined?
        <Menu.Item key="logout" className="register">
            <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
            <Link target="_blank">
                <Button type="dashed" htmlType="button">个人中心</Button>
            </Link>
            <Button type="ghost" htmlType="button">退出</Button>
        </Menu.Item>
        :
        <Menu.Item key="register" className="register">
            <Icon type="appstore"/>注册/登陆
        </Menu.Item>
        ;

        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="images/logo.png" alt="logo"/>
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
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
                            {usershow}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal"visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} cancelText="取消" onOk={() => this.setModalVisible(false)} okText = "关闭" >
                            <Tabs type="card" onChange={this.callback.bind(this)}>
                                <TabPane tab="登录" key="1">
									<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldProps('userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入您的账号:"{...getFieldProps('r_userName')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入您的密码:"{...getFieldProps('r_password')} />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type="password" placeholder="请再次输入您的密码:"{...getFieldProps('r_confirmPassword')} />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" >注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}

export default PCHdeader=Form.create({})(PCHdeader);