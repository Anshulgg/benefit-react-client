import React, {Component} from 'react';
import {Row, Col} from 'antd';
import NutritionCard from '../common/NutritionCard';

class Nutrition extends Component {

    generateCard = () => {
        let a = [];
        for (let i = 0; i < 17; i++) {
            a.push(<Col span={24}><NutritionCard/></Col>);
        }
        return a;
    };

    render() {

        let requestClientId = this.props.match.params.id;

        return (
            <Row>
                <Col span={24}>
                    <NutritionCard clientId={requestClientId} date={'14-07-2018'} type={'Breakfast'}/>
                </Col>


                <Col span={24}>
                    <NutritionCard/>
                </Col>
                <Col span={24}>
                    <NutritionCard/>
                </Col>
                {this.generateCard()}

            </Row>

        );
    }
};

export default Nutrition;