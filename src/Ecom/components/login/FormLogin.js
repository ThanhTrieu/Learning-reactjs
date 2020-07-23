import React from 'react';
import { connect } from 'react-redux';
import { 
  Form,
  Icon,
  Input,
  Button,
  Row,
  Col,
  Layout
} from 'antd';
import './FormLogin.css';

import { loginRequest } from '../../actions/index';

class NormalLoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values.password);
        this.props.submitLogin(values.username, values.password);
      }
    });
  };

  render() {

    const { getFieldDecorator } = this.props.form;
    return (
      <Row>
        <Col span={8} offset={8}>
          <Layout className="content-form">
            <Form style={{border: '1px solid #ccc', padding : '10px'}} onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Layout>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => ({
  submitLogin: (email, password) => dispatch(loginRequest(email, password)) 
})

// make Redux state piece of `login` and our action `loginRequest`
// available in this.props within our component
const connected = connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm)
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(connected);

export default WrappedNormalLoginForm;