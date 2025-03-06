import React from 'react'
import { Col, Row } from 'antd';
import {ListFooter, Divider} from './style';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <>
    
    <Divider />

    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <ListFooter>
          <li style={{margin: '40px 0px', fontWeight: '500'}}>Thông tin chung</li>
          <li style={{margin: '20px 0px'}}>Người đại diện: HKNstore</li>
          <li style={{margin: '20px 0px'}}>
            Địa chỉ: 256 Nguyễn Văn Cừ, phường An Hòa, 
            quận Ninh Kiều, TP. Cần Thơ
          </li>
          <li style={{margin: '20px 0px'}}>Số điện thoại: 84.7103.894050</li>
          <li style={{margin: '100px 0px'}}>© 2025 HKNstore</li>
        </ListFooter>
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <ListFooter>
          <li style={{margin: '40px 0px', fontWeight: '500'}}>Trợ giúp</li>
          <li style={{margin: '20px 0px'}}> <Link style={{color: "#333"}}>Hướng dẫn mua hàng</Link></li>
          <li style={{margin: '20px 0px'}}> <Link style={{color: "#333"}}>Hướng dẫn đăng kí</Link></li>
          <li style={{margin: '20px 0px'}}> <Link style={{color: "#333"}}>Chính sách đổi trả</Link></li>
        </ListFooter>
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <ListFooter>
          <li style={{margin: '40px 0px', fontWeight: '500'}}>Mạng xã hội</li>
          <li style={{margin: '20px 0px'}}> <Link style={{color: "#333"}}>Facebook</Link></li>
          <li style={{margin: '20px 0px'}}> <Link style={{color: "#333"}}>Instagram</Link></li>
          <li style={{margin: '20px 0px'}}> <Link style={{color: "#333"}}>Email</Link></li>
        </ListFooter>
      </Col>
    </Row>

    
    </>
  )
}

export default FooterComponent