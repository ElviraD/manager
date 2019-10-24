import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

class Goods extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="goods-list">
        <Link to='/goods/:id'>Goods</Link>
      </div>
    );
  }
}

export default Goods;