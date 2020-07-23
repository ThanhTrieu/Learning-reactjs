import React from 'react';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Menu, Icon, Row, Col, Input,Button} from 'antd';
import { NavLink } from "react-router-dom";
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions';
import LanguageSelector from './ChangeLanguae';

const { SubMenu } = Menu;
const { Search } = Input;
const sizeLogo = {
  height: '16px'
}
const divLogo = {
  padding: "12px 30px"
}


const getLanguage = () => {
  return i18n.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
    'en';
};

class Header extends React.PureComponent {  
  constructor(props) {
    super(props);
    this.state = {id: '', email: ''}
  }
  componentDidMount() {
    this.getTokenLogin();
  }

  getTokenLogin() {
    const token =  JSON.parse(localStorage.getItem('token'));
    if(token){
      const decodeToken = jwt.verify(token, 'RJS1911E');
      this.setState(() => ({
        id: decodeToken.id,
        email: decodeToken.email
      }))
    } else {
      this.setState({
        id: '',
        email: ''
      })
    }
  }

  logout = () => {
    this.props.submitLogout();
    this.getTokenLogin();
  }
  

  render() {
    const { props, t } = this.props;
    const currentLang = getLanguage();
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
                  <Search 
                    placeholder="Nhập từ khoá ... " 
                    onSearch={value => console.log(value)}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <Menu selectedKeys={[props.location.pathname]} mode="horizontal">
              <Menu.Item key="/">
                <NavLink to="/" className={`nav-text`}>
                  <Icon type="home" />
                  {t('header.home')}
                </NavLink>
              </Menu.Item>
              <Menu.Item key="/cart">
                <NavLink to="/cart" className={`nav-text`}>
                  <Icon type="shopping-cart" />
                  {t('header.cart')}
                </NavLink>
              </Menu.Item>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    {t('header.policies')}
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

              {
                (this.state.id && this.state.email) ? (
                  <SubMenu
                    title={
                      <span className="submenu-title-wrapper">
                        <Icon type="user" />
                        {t('header.hi')}: {this.state.email}
                      </span>
                    }
                  >
                    <Menu.Item key="/logout">
                      <Button onClick={this.logout}>
                        <Icon type="logout" />
                        {t('header.logout')}
                      </Button>                       
                    </Menu.Item>
                  </SubMenu>
                ) 
                : (
                  <Menu.Item key="/login">
                    <NavLink to="/login" className="nav-text">
                      <Icon type="user" />
                      {t('header.login')}
                    </NavLink>
                  </Menu.Item>
                )
              }
              {currentLang === 'en' ? (
                <Menu.Item key="/vi">
                  <LanguageSelector lang="vi" />
                </Menu.Item>
              ) : (
                <Menu.Item key="/en">
                  <LanguageSelector lang="en" />
                </Menu.Item>
              )}
            </Menu>
          </Col>
        </Row>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitLogout: () => {dispatch(logoutRequest())} 
})

const connected = connect(null, mapDispatchToProps)(Header);
export default withTranslation()(connected);