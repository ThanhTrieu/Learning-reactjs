import React from 'react';
import { Menu, Icon, Row, Col, Carousel, Input} from 'antd';

import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const sizeLogo = {
  height: '16px'
}
const divLogo = {
  padding: "12px 30px"
}

class Header extends React.PureComponent {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  
  render() {
    return (
      <>
        <Row>
          <Col span={12}>
            <div className="logo" style={divLogo}>
              <Row>
                <Col span={6}>
                  <img style={sizeLogo}  alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                  <img style={sizeLogo} alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
                </Col>
                <Col span={18}>
                  <Input placeholder="Nhập từ khoá và nhấn phím enter" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="mail">
                <NavLink to="/" className="nav-text">
                  <Icon type="home" />
                  Dashboard
                </NavLink>
              </Menu.Item>
              <Menu.Item key="cart">
                <Icon type="shopping-cart" />
                Giỏ hàng
              </Menu.Item>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    Chính sách và Tài khoản
                  </span>
                }
              >
                <Menu.ItemGroup title="Chính sách">
                  <Menu.Item key="setting:1">Chính sách đổi trả</Menu.Item>
                  <Menu.Item key="setting:2">Chương trình khuyến mại</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Tài khoản">
                  <Menu.Item key="setting:3">Hồ sơ cá nhân</Menu.Item>
                  <Menu.Item key="setting:4">Cài đặt tài khoản</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="user">
                <NavLink to="/login" className="nav-text">
                  <Icon type="user" />
                  Đăng nhập
                </NavLink>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
        <Carousel autoplay >
          <div>
            <img src="https://www.viettien.com.vn/admin/wp-content/uploads/2017/06/BANNER-TRANG-CHU.jpg" alt="BST Fall Winter 2019 Arrival" />
          </div>
          <div>
            <img src="https://www.viettien.com.vn/admin/wp-content/uploads/2017/06/BANNER-TRANG-CHU.jpg" alt="Owen Black Friday 2019"/>
          </div>
        </Carousel>
      </>
    );
  }
}

export default Header;