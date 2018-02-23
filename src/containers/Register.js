
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
class Register extends React.Component {

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
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
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
           Register
          </Button>
        
          Or <Link to='/'>Already have account ?</Link>
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
const WrappedNormalRegisterForm = Form.create()(Register);
/* Connect Component with Redux */
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalRegisterForm);
