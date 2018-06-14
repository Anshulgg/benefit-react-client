import React from 'react' ;
import {Breadcrumb} from 'antd' ;


const BreadcrumbComponent = () => {
    return (
        <Breadcrumb className='container' style={{ margin: '16px auto' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbComponent ;