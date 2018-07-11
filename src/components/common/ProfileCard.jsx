import React, {Component} from 'react';
import {Card, Row, Col} from 'antd' ;
import {Link} from 'react-router-dom' ;
import moment from 'moment' ;
import isEmpty from 'lodash/isEmpty' ;

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

class ProfileCard extends Component {

    calculateRemainingDays(client) {
        let endDate = moment(client.premium_expiry, "DD-MM-YYYY");
        let today = moment();
        return endDate.diff(today, "days")
    }

    render() {

        let client = this.props.client;
        console.log(isEmpty(client))
        return (
            <Card className='profile-card' loading={isEmpty(client)}>
                <Row gutter={16}>
                    <Col span={4}>
                        <img src="images/placeholder/500.png" className='img-fluid rounded-circle' alt=""/>
                    </Col>
                    <Col span={20}>
                        <Row className='mb-4'>
                            <Col span={12}>
                                <div>
                                    <Link to={`/profile/${client._id}`}>
                                        <h5>{client.name}</h5>
                                        {/*{client._id}*/}
                                    </Link>
                                </div>
                                <div>
                                    {client.gender} ,{client.age}
                                </div>
                                <div>
                                    Fitness + Nutrition
                                </div>
                                <div>
                                    Coach : Kevin Samuels
                                </div>
                                <div>
                                    Phone : {client.mobile}
                                </div>
                                <div>
                                    <a>See Notes</a><br/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="text-center">
                                    <h3>Plan</h3>
                                    <div className="time-remaining">
                                        {this.calculateRemainingDays(client)}
                                    </div>
                                    <h5>Days Remaining.</h5>
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
                                    <button className="btn btn-outline-primary  btn-block">View Tracking
                                    </button>
                                </div>

                                <div className='my-2'>
                                    <button className="btn btn-outline-success  btn-block">Update Call Status
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">Chat
                                    </button>
                                </div>

                            </Col>
                            <Col span={12}>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit MealLogs
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">View/Edit Workouts
                                    </button>
                                </div>
                                <div className='my-2'>
                                    <button className="btn btn-outline-danger  btn-block">Send Unable to Contact Mail
                                    </button>
                                </div>

                                <div className='my-2'>
                                    <button className="btn btn-outline-primary  btn-block">Assign Category
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
