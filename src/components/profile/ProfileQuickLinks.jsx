import React, {Component} from 'react';
import {Card} from 'antd'

class ProfileQuickLinks extends Component {
    render() {
        return (
            <Card title='Quick Links'>
                <ul className="quick-links">
                    <li>
                        <a href='/'>Training History</a>
                    </li>
                    <li>
                        <a href='/'>Nutrition History</a>
                    </li>
                    <li>
                        <a href='/'>Tracking History</a>
                    </li>
                    <li>
                        <a href='/'>Call History</a>
                    </li>
                    <li>
                        <a href='/'>User Information</a>
                    </li>
                    <li>
                        <a href='/'>Chat</a>
                    </li>
                </ul>
            </Card>
        );
    }
}

export default ProfileQuickLinks;
