import React , {Component} from 'react' ;
import {Row,Col} from 'antd' ;
import ProfileCard from '../common/ProfileCard'

class DashboardComponent extends Component {
    render(){
        return (
            <div className='dashboard'>
                <Row gutter={16}>
                    <Col span={12} className='mb-4'>
                        <ProfileCard/>
                    </Col>
                    <Col span={12} className='mb-4'>
                        <ProfileCard/>
                    </Col>
                    <Col span={12} className='mb-4'>
                        <ProfileCard/>
                    </Col>
                    <Col span={12} className='mb-4'>
                        <ProfileCard/>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default DashboardComponent;