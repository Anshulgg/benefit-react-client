import React, { Component }  from 'react';
import Breadcrumb from './Breadcrumb';
import { Row, Col, Card } from 'antd';

class Header extends Component {
	
	render() {
		return(
			<Card className="header my-4 mx-2">
				<Row>
					<Col xs={24} sm={24} md={24} lg={16}>
						<h3>{this.props.title}</h3>
					</Col>
					<Col xs={24} sm={24} md={24} lg={{span:16, offset:8}}>
						<div style={{float: 'right'}}>
							<Breadcrumb/>
						</div>
					</Col>
				</Row>
			</Card>
		);
	};
};

export default Header;