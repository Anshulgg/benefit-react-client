import React, {Component} from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom' ;

class ProfileQuickLinks extends Component {
    render() {

        let clientId = this.props.id ;
        return (
            <Card title='Quick Links'>
                <ul className="quick-links">
                    <li>
                        <Link to={`/profile/${clientId}/training`}>Training History</Link>
                    </li>
                    <li>
                        <Link to={`/profile/${clientId}/nutrition`}>Nutrition History</Link>
                    </li>
                    <li>
                        <Link to='/'>Tracking History</Link>
                    </li>
                    <li>
                        <Link to='/calls'>Call History</Link>
                    </li>
                    <li>
                        <Link to={`/profile/${clientId}/info`}>User Information</Link>
                    </li>
                    <li>
                        <Link to='/'>Chat</Link>
                    </li>
                </ul>
            </Card>
        );
    }
}

export default ProfileQuickLinks;
