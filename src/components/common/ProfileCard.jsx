import React, {Component} from 'react';
import {Card, Row, Col} from 'antd' ;


class ProfileCard extends Component {
    render() {
        return (
            <Card className='profile-card'>
                <Row gutter={16}>
                    <Col span={4}>
                        <img src="images/placeholder/500.png" className='img-fluid rounded-circle' alt=""/>
                    </Col>
                    <Col span={20}>
                        <Row className='mb-4'>
                            <Col span={12}>
                                <div>
                                    <h5>Priyanka ( 205603 )</h5>
                                </div>
                                <div>
                                    Female ,31
                                </div>
                                <div>
                                    Fitness + Nutrition
                                </div>
                                <div>
                                    Coach : Kevin Samuels
                                </div>
                                <div>
                                    Phone : 9899999999
                                </div>
                                <div>
                                    <a>See Notes</a><br/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div class="text-center">
                                    <h3>Plan</h3>
                                    <div class="time-remaining">
                                        0
                                    </div>
                                    <h5>Minutes Remaining.</h5>
                                </div>

                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>

                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>

                                </div>
                            </Col>
                            <Col span={12}>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default ProfileCard;
