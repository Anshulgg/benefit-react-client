import React, {Component} from 'react' ;
import {Row, Col, Spin, Icon} from 'antd' ;
import ProfileCard from '../common/ProfileCard'
import {connect} from 'react-redux' ;
import {fetchMyClients} from "../../actions/clientAction";

class DashboardComponent extends Component {

    state = {
        loading: true
    };

    componentWillMount() {
        this.props.fetchMyClients().then(() => {
            console.log("Fetch For Clients Completed Successfully");
            console.log(this.props.clients);
            this.setState({
                loading: false
            })
        })
    }

    render() {
        return (
            <Spin spinning={this.state.loading} indicator={<Icon type='loading' style={{fontSize: 24}} spin/>}>
                <div className='dashboard'>
                    <Row gutter={16}>
                        {
                            this.props.clients.allIds.map((clientId , index) => {
                                return (
                                    <Col span={12} className='mb-4' key={index}>
                                        <ProfileCard client={this.props.clients.byId[clientId]}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </div>
            </Spin>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
};


export default connect(mapStateToProps, {
    fetchMyClients
})(DashboardComponent);