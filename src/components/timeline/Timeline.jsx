import React, { Component } from 'react';
import Header from './../common/Header';
import SearchUserCard from './SearchUserCard';
import TimelineLog from './TimelineLog';
import { Row, Col } from 'antd';

class Timeline extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col span={24}>
						<Header title="User's Timeline"/>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<SearchUserCard />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<TimelineLog/>
					</Col>
				</Row>
			</div>
		);
	};
};

export default Timeline;