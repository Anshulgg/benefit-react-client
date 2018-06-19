import React, {Component} from 'react';
import {Row, Col, Card } from 'antd';

class ExpiryCard extends Component {
	render() {
		return (
			<Card className='expiry-card my-2 mx-2'>
                <Row gutter={16}>
                    <Col span={8}>
                        <img src="images/placeholder/500.png" className='img-fluid rounded-circle' alt=""/>
                    </Col>
                    <Col span={16}>
                        <div>
                            <h4>Jayant Kohli</h4>
                        </div>
                        <div>
                            Fitness + Nutrition
                        </div>
                        <div>
                        	Billing Date:<strong>23-10-1978</strong>
                        </div>
                    </Col>
                </Row>
            </Card>
		);
	}
}

export default ExpiryCard;