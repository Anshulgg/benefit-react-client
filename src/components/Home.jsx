import React, {Component} from 'react' ;
import {Layout, Icon, Menu} from 'antd';
import {Link} from 'react-router-dom' ;
// import BreadcrumbComponent from './common/breadcrumb.component' ;
import Router from './Router' ;


const {Header, Content, Sider, Footer} = Layout;

class HomeComponent extends Component {

    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className='custom-layout'>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo">
                        <img src="/images/logo.png" className='img-fluid' alt=""/>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1">
                            <Link to={'/'}> <Icon type="user"/>
                                <span>Dashboard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={'/calls'}>
                                <Icon type="video-camera"/>
                                <span>Calls</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={'/expiry'}>
                                <Icon type="video-camera"/>
                                <span>Expiry</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={'/timeline'}>
                                <Icon type="upload"/>
                                <span>Timeline</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content>
                        <Router/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        IOSD ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>


        );
    }
}

export default HomeComponent;