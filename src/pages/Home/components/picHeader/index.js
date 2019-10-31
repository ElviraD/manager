import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.less'
class PicHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { pics } = this.props;
    return (
      <div className="pic">
        <Carousel autoplay>
          {
            pics.map((item,index) => {
              return (<div key={index}>
                <img src={item.url} alt=''/>
              </div>)
            })
          }
        </Carousel>
      </div>
    );
  }
}
 
export default PicHeader;