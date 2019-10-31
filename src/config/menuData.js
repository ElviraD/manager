const menuData = [
  {
    title: '首页',
    key: '/'
  },
  {
    title: '商品列表',
    key: '/goods'
  },
  {
    title: '购物车',
    key: '/cart'
  },
  // {
  //   title: '商品详情',
  //   key: '/goods/:id'
  // },
  {
    title: '个人中心',
    key: '/info'
  },
  {
    title: 'Ant Design',
    key: '/antd',
    children: [
      {
        title: '按钮',
        key: '/antd/buttons'
      },{
        title: '模态框',
        key: '/antd/modals'
      },
    ]
  }
];
export default menuData;