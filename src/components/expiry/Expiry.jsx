import React, { Component } from 'react';
import Header from './../common/Header';
import ExpiryCard from './ExpiryCard';
import { Row, Col } from 'antd';

//TODO problem with responsive design of Header and ExpiryCard

class Expiry extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col span={24}>
						<Header title="Expiry Plans"/>
					</Col>
				</Row>
				<Row>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
				</Row>
				<Row>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
				</Row>
				<Row>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
					<Col xs={24} sm={12} md={12} lg={8}>
						<ExpiryCard />
					</Col>
				</Row>
			</div>
		);
	};
};

export default Expiry;