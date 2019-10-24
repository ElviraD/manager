import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './index.less';
import menuData from '../../config/menuData';
const { SubMenu } = Menu;

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: 1,
      menuNode: '',
      currentKey: ''
    }
  }

  componentDidMount() {
    // const menuNode = this.renderMenu(menuData)
    // this.setState({
    //   menuNode,
    //   currentKey: ''
    // })
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <Link to={item.key}>
            { item.title }
          </Link>
        </Menu.Item>
      )
    })
  }

  handleClick = ({item, key}) => { // eslint-disable-next-line
    if( key == this.state.currentKey ){
      return false;
    }

    this.setState({
      currentKey: key
    })
  }
  render() {
    return (
      <div className="navleft">
        <Menu theme={'dark'}
              // mode="inline"
              onClick={this.handleClick}
              // defaultOpenKeys={['/home']}
              defaultSelectedKeys={['/']}
        >
              {/* { this.state.menuNode } */}
            { this.renderMenu(menuData) }
          {/* <Menu.Item key='sub0'>菜单一</Menu.Item>
          <SubMenu key='sub1'
                   title={
                     <span>菜单二</span>
                   }>
            <Menu.Item key='1'>1</Menu.Item>
            <Menu.Item key='2'>2</Menu.Item>
            <Menu.Item key='3'>3</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2'
                   title={
                     <span>菜单三</span>
                   }>
            <Menu.Item key='4'>4</Menu.Item>
            <Menu.Item key='5'>5</Menu.Item>
            <Menu.Item key='6'>6</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default Footer;