import React, { Component } from 'react';
import './index.less';

class GoodDetail extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="good-detail">
        GoodDetail{this.props.match.params.id}
      </div>
    );
  }
}

export default GoodDetail;