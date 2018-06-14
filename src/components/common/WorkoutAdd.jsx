import React, {Component} from 'react';
import {Card, Row, Col, Form, Input, Button, Select } from 'antd' ;
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input

{/* TODO: FIX WIDTH OF TEXT AREA 
TODO: FIX WIDTH OF SELECT INPUT 
 TODO: ADD TABLE */}
 
class WorkoutAdd extends Component {
	
	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	  }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Card className="my-4">
				<Form layout="inline" onSubmit={this.handleSubmit}>
					<Row>
						<Col span={8}>
							<h4>20-07-2017</h4>
						</Col>
						<Col span={8} offset={8}>
							<div className="float-right">
								<FormItem>
							        <Button
							        	style={{marginRight: '1.2rem'}}
							        	type="primary"
							            htmlType="submit"
							        >
							            Submit
							        </Button>
							        <Button
							        	type="danger"
							            htmlType="submit"
							        >
							        	Delete
							        </Button>
							    </FormItem>
							</div>
						</Col>
					</Row>

					<hr />
					
					<Row>
						<Col span={8}>
							<FormItem
						        label="Workout name(visible to user)"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('workoutName', {
					         	rules: [{ required: true, message: 'Please input workout name!' }],
						    })(
						        <Input placeholder="Workout Name" />
						    )}
						    </FormItem>
						</Col>

						<Col span={8}>
							<FormItem
						        label="Workout search name(invisible to user)"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('workoutSearchName')
						    (	
						        <Input placeholder="Workout Search Name" />
						    )}
						    </FormItem>
						</Col>

						<Col span={8}>
							<FormItem
						        label="Welcome audio message"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('audioMessage')
						    (
						        <Input placeholder="Message" />
						    )}
						    </FormItem>
						</Col>
					</Row>

					<hr />
					
					<Row>

						

						<Col span={24}>
							<FormItem
						        label="Workout description"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('workoutDescription', {
					         	rules: [{ required: true, message: 'Please input workout description!' }],
						    })(
						        <TextArea placeholder="Description" autosize={{ minRows: 1, maxRows: 6 }} style={{width: '100%'}}/>
						    )}
						    </FormItem>
						</Col>

					</Row>

					<hr />
					
					<Row>

						<Col span={8}>
							<FormItem
						        label= "Select sport"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('selectSport', {
						    	initialValue: "Running",
						    	rules:[{required: true, message: "Please select a sport"}]
					         })(
						        <Select>
						        	<Option value="Football">Football</Option>
      								<Option value="Cricket">Cricket</Option>
      							</Select>
						    )}
						    </FormItem>
						</Col>

						<Col span={8}>
							<FormItem
						        label= "Select routines"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('selectRoutine', {
						    	initialValue: "Routine",
						    	rules:[{required: true, message: "Please select a routine"}]
					         })(
						        <Select>
						        	<Option value="Football">Football</Option>
      								<Option value="Cricket">Cricket</Option>
      							</Select>
						    )}
						    </FormItem>
						</Col>

						<Col span={8}>
							<FormItem
						        label= "Add from workout"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('selectWorkout', {
						    	initialValue: "Workout",
						    	rules:[{required: true, message: "Please select a workout"}]
					         })(
						        <Select>
						        	<Option value="Football">Football</Option>
      								<Option value="Cricket">Cricket</Option>
      							</Select>
						    )}
						    </FormItem>
						</Col>

					</Row>
					<p class="text-left font-weight-bold">
					    Total Expected Calories Burn: <span>{}</span>
					</p>
					<p class="text-left text-muted">
					    Selected Routines
					</p>

				</Form>
			</Card>
		);
	};
};

const WrappedHorizontalLoginForm = Form.create()(WorkoutAdd);

export default WrappedHorizontalLoginForm;