/*
* Todo component
* Integrated with Redux
* */

import React from 'react';
import { connect } from  'react-redux';
import {bindActionCreators} from 'redux';
/* Actions */
import { getTodos } from './../actions';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import { Link } from 'react-router-dom';
import './styles/login.scss'
class Login extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.actions.getTodos();
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render(){
  
    const { getFieldDecorator } = this.props.form;
  
    return (
  
  <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" className="input-field"/>}  className="input-field" placeholder="Username" />
          )}
        </FormItem>
        
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock"/>} className="input-field" type="password" placeholder="Password" />
          )}
        </FormItem>
        
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
        
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        
          Or <Link to='register'>register now!</Link>
        </FormItem>
      </Form>
    );
  }

}

/* Map state to props */
function mapStateToProps(state){
  return {
    todos: state.todos,
  };
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators({
      getTodos
    }, dispatch)
  };
}
const WrappedNormalLoginForm = Form.create()(Login);
/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
