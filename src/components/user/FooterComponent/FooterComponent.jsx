import React from 'react'
import { Col, Row } from 'antd';
import {ListFooter, Divider} from './style';

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
          <li style={{margin: '20px 0px'}}>Hướng dẫn mua hàng</li>
          <li style={{margin: '20px 0px'}}>Hướng dẫn đăng kí</li>
          <li style={{margin: '20px 0px'}}>Chính sách đổi trả</li>
        </ListFooter>
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <ListFooter>
          <li style={{margin: '40px 0px', fontWeight: '500'}}>Mạng xã hội</li>
          <li style={{margin: '20px 0px'}}>Facebook</li>
          <li style={{margin: '20px 0px'}}>Instagram</li>
          <li style={{margin: '20px 0px'}}>Email</li>
        </ListFooter>
      </Col>
    </Row>

    
    </>
  )
}

export default FooterComponent