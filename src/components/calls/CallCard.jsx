import React, { Component } from 'react';
import { Row, Col, Table, Card } from 'antd';


const columns = [{
  dataIndex: 'name',
  key: 'name'
}, {
  dataIndex: 'callNote',
  key: 'callNote'
}, {
  dataIndex: 'followUpDate',
  key: 'followUpDate'
}, {
  dataIndex: 'history',
  key: 'history'
}, {
  dataIndex: 'chat',
  key: 'chat'
}, {
  dataIndex: 'tick',
  key: 'tick'
}]

const data = [{
  key: '1',
  name: 'Suchrita - 97176444056',
  callNote: "Add Call Note",
  followUpDate: 'followUpDate',
  history: 'Call History',
  chat: 'Chat',
  tick: 'Tick'
}, {
  key: '2',
  name: 'Suchrita - 97176444056',
  callNote: "Add Call Note",
  followUpDate: 'followUpDate',
  history: 'Call History',
  chat: 'Chat',
  tick: 'Tick'
}];

class CallCard extends Component {

	render() {
		return (
			<Card className='mx-2 my-2'>
				<Row>
					<Col span={8}>
						<h5>3pm - 6pm</h5>
					</Col>
					<Col span={8} offset={8}>
						<div className='float-right'>
							todo: add tools here
						</div>
					</Col>
				</Row>

				<Table 
					className='mt-4'
					columns={columns}
					dataSource={data}
					pagination={false}
					showHeader={false}
				/>
			</Card>
		);
	};
};

export default CallCard;

