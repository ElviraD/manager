import React, { Component } from 'react';
import { Button, Card, Radio, Icon } from 'antd';
import './index.less';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
      size: 'large'
    }
  }
  enterLoading(){
    this.setState({
      loading: true
    })
  }
  enterIconLoading(){
    this.setState({
      iconLoading: true
    });
  }
  handleSizeChange(e){
    this.setState({
      size: e.target.value
    });
  }
  render() { 
    const { size } = this.state;
    return (
      <React.Fragment>
        <Card title="基础按钮" headStyle={{background:'#cccccc'}} className="card-wrap">
          <Button type="primary">按钮</Button>
          <Button>Default</Button>
          <Button type="primary" disabled>Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </Card>
        <Card title="图标按钮" className="card-wrap">
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" shape="circle">A</Button>
          <Button type="primary" icon="search">placeholder</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">Search</Button>
        </Card>
        <Card title="加载中状态" className="card-wrap">
          <Button type="primary" loading>Loading</Button>
          <Button type="primary" size="small" loading>Loading</Button>
          <Button type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>Click</Button>
          <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading.bind(this)}>Click</Button>
          <Button type="primary" loading />
          <Button type="primary" shape="circle" loading />
          <Button type="danger" shape="round" loading />
        </Card>
        <Card title="尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleSizeChange.bind(this)}>
            <Radio value="large">大</Radio>
            <Radio value="default">中</Radio>
            <Radio value="small">小</Radio>
          </Radio.Group>
          <Button size={size} type="primary">Primary</Button>
          <Button>Default</Button>
          <Button size={size} type="dashed">Dashed</Button>
          <Button size={size} type="danger">Danger</Button>
          <Button size={size} type="link">Link</Button>
        </Card>
        <Card title="按钮组合" headStyle={{background:'#cccccc'}} className="card-wrap">
          <Button.Group>
            <Button type="primary"><Icon type="left" />后退</Button>
            <Button type="primary">前进<Icon type="right" /></Button>
          </Button.Group>
        </Card>
        <Card title="幽灵按钮" style={{background:'#cccccc'}} headStyle={{background:'#cccccc'}} className="card-wrap">
          <Button type="primary" ghost>Primary</Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>Dashed</Button>
        </Card>
      </React.Fragment>
    );
  }
}
 
export default Buttons;