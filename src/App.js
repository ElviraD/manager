import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import MyNavLeft from './components/NavLeft';
import Goods from './pages/Goods';
import GoodDetail from './pages/GoodDetail'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Info from './pages/Info';
import Buttons from './pages/antd/Buttons';
import Modals from './pages/antd/Modals';
// import routes from './config/menuData';

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {

  render(){
    return (
      // <Row className="App">
      //   <Col xs={6} sm={6} md={4} lg={3} xl={3}>
      //     <NavLeft />
      //   </Col>
      //   <Col xs={18} sm={18} md={20} lg={21} xl={21}>
      //     <Header />
      //     <Row className="content">
      //       {/* { this.props.children } */}
      //       {/* <div>内容区</div> */}
      //       {/* <Switch>
      //         {
      //           routes.map(route => {
      //             return (
      //               <route
      //                 key={route.key}
      //                 path={route.path}
      //                 component={route.component}
      //               />
      //             );
      //           })
      //         }
      //       </Switch> */}
      //     </Row>
      //     <Footer />
      //   </Col>
      // </Row>
      <Layout>
        <Sider>
          <MyNavLeft />
        </Sider>
        <Layout>
          <Header style={{background: '#E4E6F0'}}>
            <MyHeader />
          </Header>
          <Content>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/goods' exact component={Goods} />
              <Route path='/goods/:id' component={GoodDetail} />
              <Route path='/cart' component={Cart} />
              <Route path='/info' component={Info} />
              <Route path='/antd/buttons' component={Buttons} />
              <Route path='/antd/modals' component={Modals} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#ccc' }}>
            <MyFooter />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;