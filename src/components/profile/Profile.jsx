import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {connect} from 'react-redux' ;

import ProfileCard from "../common/ProfileCard";
import ProfileHeader from "./ProfileHeader";
import ProfileQuickLinks from "./ProfileQuickLinks";
import WorkoutAdd from '../common/WorkoutAdd';
import {fetchMyClients} from "../../actions/clientAction";
import isEmpty from 'lodash/isEmpty' ;
import Loader from '../common/Loader'

class Profile extends Component {

    state = {
        loading : true
    } ;

    componentWillMount() {
        if (this.props.makereq){
            this.props.fetchMyClients().then(()=>{
                this.setState({
                    loading : false
                })
            })
        } else {
            if(!this.props.notFound){
                this.setState({
                    loading : false
                })
            }
        }
    }

    render() {

        console.log("Client in Render", this.props.client);
        let requestClientId = this.props.match.params.id;

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
                    <Col span={24}>
                        <WorkoutAdd/>
                    </Col>
                    <Col span={24}>
                        <WorkoutAdd/>
                    </Col>
                    <Col span={24}>
                        <WorkoutAdd/>
                    </Col>
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
        }

    }
    return {
        makereq: true
    }


}

export default connect(mapStateToProps , {
    fetchMyClients
})(Profile);
