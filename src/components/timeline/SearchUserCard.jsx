import React, { Component } from 'react';
import { Card, Input, Button, Form } from 'antd';
const FormItem = Form.Item;

//Fix padding of label

class SearchUserCard extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, value) => {
			if (!err) {
				console.log('Received values of form: ', value);
			}
		})
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Card className="search-user my-2 mx-2">
				<Form onSubmit={this.handleSubmit}>
					<FormItem
						label={<h4>Enter User Id</h4>}
						colon={false}
					>
					{getFieldDecorator('userId')(
            			<Input />
          			)}
        			</FormItem>
        			<Button type="primary" htmlType="submit">Search</Button>
				</Form>
			</Card>
		);
	};
};

const WrappedSearchUserCard = Form.create()(SearchUserCard);

export default WrappedSearchUserCard;