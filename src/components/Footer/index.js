import React, { Component } from 'react';
import './index.less';

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="footer">
        版权所有：我就是练手的！感谢支持
      </div>
    );
  }
}

export default Footer;