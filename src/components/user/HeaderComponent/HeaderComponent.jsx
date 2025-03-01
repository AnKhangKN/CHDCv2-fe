import React from 'react'
import { Col } from 'antd';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import { WrapperTopHeader, ListTopHeader, WrapperHeader, WrapperSubHeader } from './style.js';
// import { UserOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <>
    
    <WrapperTopHeader>
      <Col span={12}></Col>
      <Col span={12} style={{ textAlign: 'right' }}>
        <ListTopHeader>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <Link to="" style={{color: '#333'}}>Theo dõi đơn hàng</Link>
            <div  style={{margin: '12px', height: '12px', border: '1px solid'}}></div>
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <Link to="" style={{color: '#333'}}>Hỗ trợ</Link>
            <div style={{margin: '12px', height: '12px', border: '1px solid'}}></div>

          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <Link to="" style={{color: '#333'}}>Đăng ký</Link>
            {/* <UserOutlined /> */}
          </li>
        </ListTopHeader>
      </Col>
    </WrapperTopHeader>
    <WrapperHeader>
      header
    </WrapperHeader>
    <WrapperSubHeader>
      sub
    </WrapperSubHeader>
    </>
  )
}

export default HeaderComponent
