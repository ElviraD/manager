import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import './index.less';
import menuData from '../../config/menuData';
import { switchMenu } from '../../redux/actions/index'
import { isTSEnumMember } from '@babel/types';
const { SubMenu } = Menu;

class NavLeft extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: 1,
      menuNode: '',
      currentKey: ''
    }
  }

  GetUrlRelativePath(){
  　　var url = document.location.toString();
  　　var arrUrl = url.split("//");
  
  　　var start = arrUrl[1].indexOf("/");
  　　var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
  
  　　if(relUrl.indexOf("?") != -1){
  　　　　relUrl = relUrl.split("?")[0];
  　　}
  　　return relUrl;
  }
  componentDidMount() {
    const key = this.GetUrlRelativePath();
    // console.log('currentKey:',this.state.currentKey,{key});

    let currentMenu = '';
    let findMenu = menuData.find((item)=>{
      if(item.children){
        let itemChild = item.children.find((item1)=>{
          return item1.key == key
        })
        currentMenu = itemChild;
        return itemChild;
      }
      return item.key == key
    })
    currentMenu = currentMenu || findMenu;
    // console.log({currentMenu});
    const { dispatch } = this.props;
    dispatch(switchMenu(currentMenu.title))
    this.setState({
      currentKey: key
    })
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
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title))
    // console.log(item.props.title);
    this.setState({
      currentKey: key
    })
  }
  homeHandleClick = () => {
    const { dispatch } = this.props;
    dispatch(switchMenu('首页'))
    this.setState({
      currentKey: '/'
    })
  }
  render() {
    return (
      <div className="navleft">
        {/* <NavLink to="/" onClick={this.homeHandleClick}>
          <div className="logo">
            <img src="/assets/logo-ant.svg" alt=""/>
            <h1>管理系统</h1>
          </div>
        </NavLink> */}
        <Menu theme="dark"
              // mode="inline"
              onClick={this.handleClick}
              // defaultOpenKeys={['/']}
              selectedKeys={this.state.currentKey ? [`${this.state.currentKey}`] : '[]'}
        >
            { this.renderMenu(menuData) }
        </Menu>
      </div>
    );
  }
}

export default connect()(NavLeft);