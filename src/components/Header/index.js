import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="header">
        <Row type='flex' justify='end'>
          <Col>头部</Col>
        </Row>
      </div>
    );
  }
}

export default Footer;