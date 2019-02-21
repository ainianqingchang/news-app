import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.css'

class Login extends Component{
    render(){
        return(
            <div className="login">
                                <ul>
                                    <li>
                                        <input type="text" name="username" />
                                    </li>
                                    <li>
                                        <input type="password" name="password" />
                                    </li>
                                    <li>
                                        <button style={{color:'white',backgroundColor: '#0c56f1'}} onMouseMove={"this.style.background='#3780ff'"} onMouseOut={"this.style.background='#0c56f1'"}>登录</button>
                                    </li>
                                    <li>.
                                        <button>注册</button>
                                    </li>
                                </ul>
                        </div>
        );
    }
}

ReactDom.render(<Login />,document.getElementById('login-div'));