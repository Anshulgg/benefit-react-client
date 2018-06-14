import React, {Component} from 'react';
import {Row, Col} from 'antd'
import ProfileCard from "../common/ProfileCard";
import ProfileHeader from "./ProfileHeader";
import ProfileQuickLinks from "./ProfileQuickLinks";
import WorkoutAdd from '../common/WorkoutAdd';

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
                <ProfileHeader/>
                <Row gutter={16}>
                    <Col span={12}>
                        <ProfileQuickLinks/>
                    </Col>
                    <Col span={12}>
                        <ProfileCard/>
                    </Col>

                    <Col span={24}>
                        <WorkoutAdd />
                    </Col>
                    <Col span={24}>
                        <WorkoutAdd />
                    </Col>
                    <Col span={24}>
                        <WorkoutAdd />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;
