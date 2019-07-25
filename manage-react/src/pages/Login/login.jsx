/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:42:36 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-25 18:39:42
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import '../../styles/login/login.scss'

class LoginForm extends Component {
  state = {
    date: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
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
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedNormalLoginForm;