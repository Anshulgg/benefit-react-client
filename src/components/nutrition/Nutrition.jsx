import React, {Component} from 'react';
import {Row, Col} from 'antd'
import NutritionCard from '../common/NutritionCard';

class Nutrition extends Component {

	render() {
		return (
			<Row>
                <Col span={24}>
                    <NutritionCard/>
                </Col>
                <Col span={24}>
                    <NutritionCard/>
                </Col>
                <Col span={24}>
                    <NutritionCard/>
                </Col>
            </Row>
		);
	}
};

export default Nutrition;