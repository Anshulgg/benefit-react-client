import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import {Redirect} from 'react-router-dom' ;
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {login} from "../../actions/authActions";

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.login(values).then(

                    (res) => {
                        console.log('In Login Form' , res);
                        console.log(this.context);
                        this.context.router.history.push('/')
                    },
                    (err) => console.log(err)
                )
            }
        });
    }
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your Email!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
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
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

NormalLoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect(null , {login})(WrappedNormalLoginForm);
