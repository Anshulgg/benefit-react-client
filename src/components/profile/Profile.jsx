import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import {Link} from 'react-router-dom' ;
import {connect} from 'react-redux' ;
import moment from 'moment';
import ProfileCard from "../common/ProfileCard";
import ProfileHeader from "./ProfileHeader";
import ProfileQuickLinks from "./ProfileQuickLinks";
import WorkoutAdd from '../common/WorkoutAdd';
import {fetchMyClients} from "../../actions/clientAction";
import isEmpty from 'lodash/isEmpty' ;
import Loader from '../common/Loader';

class Profile extends Component {

    state = {
        loading: true
    };

    componentWillMount() {
        if (this.props.makereq) {
            this.props.fetchMyClients().then(() => {
                this.setState({
                    loading: false
                });
            });
        } else {
            if (!this.props.notFound) {
                this.setState({
                    loading: false
                });
            }
        }
    }


    render() {

        console.log("Client in Render", this.props.client);
        let requestClientId = this.props.match.params.id;
        const createForm = () => {
            let form = [];
            let today = moment();

            for (let i = 0; i < 7; i++) {
                let date = today.format('DD-MM-YYYY');
                console.log(date);

                form.push((
                    <Col key={i} span={24}>
                        <WorkoutAdd date={date} clientId={requestClientId}/>
                    </Col>)
                );
                today = today.add('days', 1);

            }
            return form;
        };
        return (
            <Loader loading={this.state.loading}>

                <div className='profile'>
                    <ProfileHeader client={this.props.client}/>
                    <Row gutter={16}>
                        <Col span={12}>
                            <ProfileQuickLinks id={requestClientId}/>
                        </Col>
                        <Col span={12}>
                            <ProfileCard client={this.props.client}/>
                        </Col>
                        {createForm()}

                        <Link to={`/profile/${requestClientId}/training`}>
                            <Button type={'primary'}>
                                View Complete History
                            </Button>
                        </Link>
                    </Row>
                </div>
            </Loader>

        );
    }
}

let mapStateToProps = (state, props) => {
    console.log(state);
    if (state.clients.allIds.length > 0) {
        let requestClientId = props.match.params.id;
        let clientFound = state.clients.byId[requestClientId];

        return {
            client: clientFound,
            notFound: isEmpty(clientFound)
        };

    }
    return {
        makereq: true
    };


};

export default connect(mapStateToProps, {
    fetchMyClients
})(Profile);
