import React, { Component } from 'react';
import Header from './../common/Header';
import CallCard from './CallCard';
import { Row, Col } from 'antd';

class Calls extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col span={24}>
						<Header title="Today's Calls"/>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<CallCard/>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<CallCard/>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<CallCard/>
					</Col>
				</Row>
			</div>
		);
	};
};

export default Calls;