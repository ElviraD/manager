import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import './index.less';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }
  render() {
    const { menuName } = this.props;
    return (
      <div className="header">
        <Row type='flex' justify='space-between'>
          <Col>{ menuName || "首页" }</Col>
          <Col>头部</Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    menuName: state.menuName
  }
}

export default connect(mapStateToProps)(Header);