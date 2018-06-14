import React, {Component} from 'react';
import {Card, Row, Col} from 'antd' ;

class ProfileHeader extends Component {
    render() {
        return (
            <Card title='Priyanka' className='my-4'>
                <Row>
                    <Col span={4}>
                        Age: <b>31 years</b> <br/>
                        Start weight : <b>0.00 kg</b>
                    </Col>
                    <Col span={4}>
                        Gender: <b>Female </b> <br/>
                        Target Weight: <b>0.00 kg</b>
                    </Col>
                    <Col span={4}>
                        Height : <b>163 cm</b> <br/>
                        BMI : <b>28.6 kg/m^2</b>
                    </Col>
                    <Col span={6}>
                        Current Weight : <b>76 kg</b> <br/>
                        Premium Activation Date : <b>30-12-2016</b>
                    </Col>
                    <Col span={6}>
                        Premium Plan Start Date : <b>30-12-2016</b> <br/>
                        Premium Expiry Date : <b>30-12-2016</b>
                    </Col>
                </Row>
            </Card>
        );
    }
}


export default ProfileHeader;
