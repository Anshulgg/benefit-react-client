import React, {Component} from 'react';
import {Card, Row, Col, Form, Button, Select, Table } from 'antd' ;
const FormItem = Form.Item;
const Option = Select.Option;

const columnsNutrition = [{
  title: 'Calories',
  dataIndex: 'calories',
  key: 'calories',
}, {
  title: 'Carbs',
  dataIndex: 'carbs',
  key: 'carbs',
}, {
  title: 'Protein',
  dataIndex: 'protein',
  key: 'protein',
}, {
  title: 'Fat',
  dataIndex: 'fat',
  key: 'fat',
}];

const dataNutrition = [{
  key: '1',
  calories: '270',
  carbs: '35g',
  protein: '24g',
  fat: '4g'
}];


const columnsInfo = [{
	title: 'Name',
	dataIndex: 'name',
	key: 'name'
}, {
  title: 'Calories',
  dataIndex: 'calories',
  key: 'calories',
}, {
  title: 'Carbs',
  dataIndex: 'carbs',
  key: 'carbs',
}, {
  title: 'Protein',
  dataIndex: 'protein',
  key: 'protein',
}, {
  title: 'Fat',
  dataIndex: 'fat',
  key: 'fat',
}, {
	title: 'Quantity',
	dataIndex: 'quantity',
	key: 'quantity'
}, {
	title: 'Source',
	dataIndex: 'source',
	key: 'source'
}];

const dataInfo = [{
  key: '1',
  name: 'Egg white',
  calories: '270',
  carbs: '35g',
  protein: '24g',
  fat: '4g',
  quantity: '2',
  source: 'Bowl'
}, {
  key: '2',
  name: 'Chappati',
  calories: '270',
  carbs: '35g',
  protein: '24g',
  fat: '4g',
  quantity: '2',
  source: 'piece/20g'
}];

class NutritionCard extends Component {

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

					<hr/>

					<Row>
						<Col span={8}>
							<FormItem
						        label="Type"
						        colon={false}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('type', {
					         	initialValue: 'Breakfast',
					         	rules: [{ required: true, message: 'Please select type!' }],
						    })(
						        <Select>
						        	<Option value="Breakfast">Breakfast</Option>
      								<Option value="Lunch">Lunch</Option>
      								<Option value="Dinner">Dinner</Option>
      							</Select>
						    )}
						    </FormItem>
						</Col>
					</Row>

					<hr/>
					
					<Row>
						<Col span={24}>
							<Table 
								columns={columnsNutrition} 
								dataSource={dataNutrition} 
								pagination={false}
							/>
						</Col>
					</Row>
					
					<hr/>
					<Row>
						<Col span={24}>
							<Table 
								columns={columnsInfo} 
								dataSource={dataInfo} 
								pagination={false}
							/>
						</Col>
					</Row>
				</Form>
			</Card>
		);
	}
};

const WrappedNNutritionForm = Form.create()(NutritionCard);

export default WrappedNNutritionForm;