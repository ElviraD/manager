import React, { Component } from 'react';
import './index.less';
// import PicHeader from './components/picHeader'
// import pics from '../../config/pics';
import { Row, Col } from 'antd';
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="home">
        {/* <Row>
          <Col>
            <PicHeader pics={pics}/>
          </Col>
        </Row> */}
        <Row>
          <Col>Welcome to Home</Col>
        </Row>
      </div>
    );
  }
}

export default Home;