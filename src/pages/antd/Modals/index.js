import React, { Component } from 'react';
import { Modal, Card, Button } from 'antd';
import './index.less';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false
    }
  }
  
  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }
  showConfirm = () => {
    Modal.confirm({
      title: '确定？',
      content: '信息都正确吗？',
      autoFocusButton: 'ok',
      onOk() {
        return new Promise((resolve,reject) => {
          setTimeout(Math.random()>0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('出错'))
      },
      onCancel(){},
    })
  }
  handleModal = (type) => {
    Modal[type]({
      title: `${type}信息`,
      content: `${type}信息模态框`
    })
  }
  render() { 
    return (
      <React.Fragment>
        <Card title="基础模态框" headStyle={{background:'#cccccc'}}>
          <Button type="primary" onClick={() => this.handleOpen('visible1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('visible2')}>自定义页脚</Button>
          <Button type="primary" onClick={this.showConfirm}>Confirm</Button>
        </Card>
        <Card title="信息模态框" headStyle={{background:'#cccccc'}}>
          <Button type="primary" onClick={() => this.handleModal('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleModal('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleModal('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.handleModal('error')}>error</Button>
        </Card>

        <Modal title="确认信息1"
              visible={this.state.visible1}
              onCancel={() => {
                this.setState({
                  visible1: false
                })
              }}>
          是否同意提交？
        </Modal>
        <Modal title="确认信息2"
              visible={this.state.visible2}
              onCancel={() => {
                this.setState({
                  visible2: false
                })
              }}
              cancelText="取消"
              okText="确定">
          是否同意提交？
        </Modal>
      </React.Fragment>
    );
  }
}
 
export default Modals;