import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css'
import PCIndex from './componant/pc_index';
import MobileIndex from './componant/mobile_index';
import MediaQuery from 'react-responsive'

export default class Root extends Component {

  render() {
    return (
      <Router>
        <div>
          <MediaQuery query='(min-device-width:1224px)'>
            <PCIndex />
          </MediaQuery>
          <MediaQuery query='(max-device-width:1224px)'>
            <MobileIndex />
          </MediaQuery>
        </div>
      </Router>
    );
  }
}

ReactDom.render(<Root />, document.getElementById('root'));