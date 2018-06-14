import React, {Component} from 'react';
import {Card, Row, Col, Form, Input, Button, Select, Checkbox } from 'antd' ;
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;  
const CheckboxGroup = Checkbox.Group;

// TODO: fix label text wrap around input

class ProfileInfoForm extends Component {

	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	    	if (!err) {
	        	console.log('Received values of form: ', values);
	      	}
	    });
	};

	render() {
		const formItemLayout = {
	     	labelCol: {
	        	xs: { span: 24 },
	        	sm: { span: 8},
	      },
	    	wrapperCol: {
	        	xs: { span: 24 },
	        	sm: { span: 16 },
	      },
	    };

		const { getFieldDecorator } = this.props.form;
		return(
			<Card className="my-4">
				<div className="container">
					
					<Form onSubmit={this.handleSubmit}>
						<Row>
							<Col span={16} offset={4}>
								<div className="text-center">
									<h2>Info For Fitness and Nutrition Coaches</h2>
								</div>
									<hr />
									
									<FormItem
							        	{...formItemLayout}
							          	label="Name"
							          	colon={false}
							        >
							        {getFieldDecorator('name', {
							            rules: [{
							              required: true, message: 'Please input your name!',
							            }],
							          })(
							            <Input />
							          )}
							        </FormItem>
							        
							        <FormItem
							        	{...formItemLayout}
							          	label="Gender"
							          	colon={false}
							        >
							        {getFieldDecorator('gender', {
							        	initialValue: "Male",
							            rules: [{
							              required: true, message: 'Please select your gender',
							            }],
							          })(
							            <Select>
							            	<Option value="Male">Male</Option>
							            	<Option value="Female">Female</Option>
							            </Select>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Date of Birth"
							          	colon={false}
							        >
							        {getFieldDecorator('dateOfBirth', {
							            rules: [{
							              required: true, message: 'Please input your D.O.B!',
							            }],
							          })(
							            <Input placeholder="dd-mm-yyyy"/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Contact email"
							          	colon={false}
							        >
							        {getFieldDecorator('email', {
							            rules: [{
							              required: true, message: 'Please input your email', type: 'email'
							            }],
							          })(
							            <Input/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Phone"
							          	colon={false}
							        >
							        {getFieldDecorator('phone', {
							            rules: [{
							              required: true, message: 'Please input your phone number', min: 10
							            }],
							          })(
							            <Input/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Weight"
							          	colon={false}
							        >
							        {getFieldDecorator('weight', {
							            rules: [{
							              required: true, message: 'Please enter your weight',
							            }],
							          })(
							            <Input/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Height(in cm)"
							          	colon={false}
							        >
							        {getFieldDecorator('height', {
							            rules: [{
							              required: true, message: 'Please enter your height',
							            }],
							          })(
							            <Input/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="What is your fitness goal?"
							          	colon={false}
							        >
							        {getFieldDecorator('fitnessGoal', {
							        	initialValue: "Weight Loss",
							          })(
							            <Select>
							            	<Option value="something">something</Option>
							            	<Option value="something">something</Option>
							            </Select>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="What was your weight 6 months ago?"
							          	colon={false}
							        >
							        {getFieldDecorator('height', {
							            rules: [{
							              required: true, message: 'Please enter your weight',
							            }],
							          })(
							            <Input/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="What was your weight 6 months ago?"
							          	colon={false}
							        >
							        {getFieldDecorator('height', {
							            rules: [{
							              required: true, message: 'Please enter your weight',
							            }],
							          })(
							            <Input/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Diet Type"
							          	colon={false}
							        >
							        {getFieldDecorator('dietType', {
							        	initialValue: "Vegitarian",
							          })(
							            <Select>
							            	<Option value="Vegetarian">Vegitarian</Option>
							            	<Option value="Non-Vegetarian">Non-Vegetarian</Option>
							            </Select>
							          )}
							        </FormItem>

							        <FormItem
							          	{...formItemLayout}
							          	label="Meals you consume regularly"
							          	colon={false}
							        >
							          {getFieldDecorator('meals')(
							           	<CheckboxGroup>
								           	<Row>
											    <Col span={24}><Checkbox value="Bed Tea">Bed Tea</Checkbox></Col>
											    <Col span={24}><Checkbox value="Breakfast">Breakfast</Checkbox></Col>
											    <Col span={24}><Checkbox value="Morning Snack">Morning Snack</Checkbox></Col>
										    	<Col span={24}><Checkbox value="Lunch">Lunch</Checkbox></Col>
											    <Col span={24}><Checkbox value="Evening Snack">Evening Snack</Checkbox></Col>
											    <Col span={24}><Checkbox value="Dinner">Dinner</Checkbox></Col>
											    <Col span={24}><Checkbox value="After Dinner Snack">After Dinner Snack</Checkbox></Col>
											</Row>
										</CheckboxGroup>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Frequency of eating out"
							          	colon={false}
							        >
							        {getFieldDecorator('eatOut', {
							        	initialValue: "One week or less",
							          })(
							            <Select>
							            	<Option value="One week or less">One week or less</Option>
							            	<Option value="something">something</Option>
							            </Select>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="In what time period you aim to achieve your target?"
							          	colon={false}
							        >
							        {getFieldDecorator('targetTime', {
							        	initialValue: "12 weeks",
							          })(
							            <Select>
							            	<Option value="12">12 weeks</Option>
							            	<Option value="something">something</Option>
							            </Select>
							          )}
							        </FormItem>
							          
							        <FormItem
							        	{...formItemLayout}
							          	label="Current physical activity level"
							          	colon={false}
							        >
							        {getFieldDecorator('activityLevel', {
							        	initialValue: "Normal",
							          })(
							            <Select>
							            	<Option value="Normal">Normal</Option>
							            	<Option value="something">something</Option>
							            </Select>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="How many hours do you sleep in a day?"
							          	colon={false}
							        >
							        {getFieldDecorator('activityLevel', {
							        	initialValue: "6-8 Hours",
							          })(
							            <Select>
							            	<Option value="6-8 Hours">6-8 Hours</Option>
							            	<Option value="something">something</Option>
							            </Select>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Please mention any medical problems or allergies"
							          	colon={false}
							        >
							        {getFieldDecorator('medicalProblems')(
							            <TextArea autosize={{ minRows: 2, maxRows: 6 }}/>
							          )}
							        </FormItem>

							        <FormItem
							        	{...formItemLayout}
							          	label="Please mention any medical problems or allergies"
							          	colon={false}
							        >
							        {getFieldDecorator('contactTime')(
							        	<Input placeholder="--:--" />
							        )}
							        </FormItem>
							        <div className="text-center"> 
								        <FormItem>
	          								<Button type="primary" htmlType="submit">Submit</Button>
	        							</FormItem>
        							</div>
					        </Col>
				        </Row>
					</Form>
				
				</div>
			</Card>
		);
	};
};

const WrappedProfileInfoForm = Form.create()(ProfileInfoForm);

export default WrappedProfileInfoForm;