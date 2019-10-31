import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goodsData from '../../config/goodsData';
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
        {
          goodsData.map((item,index) => {
            return <div className='list' key={index}>
              <Link id={item.id} to={item.schema}>Goods_{item.title}</Link>
            </div>
          })
        }
      </div>
    );
  }
}

export default Goods;