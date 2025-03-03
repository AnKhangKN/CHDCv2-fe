import React from 'react'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import { 
  WrapperTopHeader, 
  ListTopHeader, 
  WrapperHeader, 
  WrapperSubHeader,
  DesktopCategory,
  IconButton
} from './style.js';
import { IoBagOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import SearchButton from "../SearchButton/SearchButton.jsx";

const HeaderComponent = () => {
  return (
    <>
    
    <WrapperTopHeader>
      <Col span={12}></Col>
      <Col span={12} style={{ textAlign: 'right', paddingRight: '8px' }}>
        <ListTopHeader>
          <li style={{display: 'flex'}}>
            <Link to="" style={{color: '#333', lineHeight: '36px'}}>Theo dõi đơn hàng</Link>
            <div  style={{margin: '12px', height: '12px', borderLeft: '0.5px solid'}}></div>
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <Link to="" style={{color: '#333', lineHeight: '36px'}}>Hỗ trợ</Link>
            <div style={{margin: '12px', height: '12px', borderLeft: '0.5px solid'}}></div>

          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <Link to="" style={{color: '#333', lineHeight: '36px'}}>Đăng ký</Link>
          </li>
        </ListTopHeader>
      </Col>
    </WrapperTopHeader>
    <WrapperHeader>
      <Row>
        
        <Col span={6}>
          <div className="logo-img"> logo
            <img src="" alt="" srcset="" />
          </div>
        </Col>

        <Col span={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <DesktopCategory>
            <li style={{padding: '0px 12px'}}> <Link to="/" style={{color: '#333'}}>Trang chủ</Link> </li>
            <li style={{padding: '0px 12px'}}> <Link to="/products" style={{color: '#333'}}>Sản phẩm</Link> </li>
            <li style={{padding: '0px 12px'}}> <Link to="/promotion" style={{color: '#333'}}>Khuyến mãi</Link> </li>
            <li style={{padding: '0px 12px'}}> <Link to="/new" style={{color: '#333'}}>Mới nhất</Link> </li>
          </DesktopCategory>
        </Col>

        <Col span={6} style={{fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '8px'}}>
          
          <SearchButton />
            
          <Link to="/favorite" style={{color: '#333'}}>
            <IconButton>
              <IoMdHeartEmpty />
            </IconButton>
          </Link>
          
          <Link to="/cart" style={{color: '#333'}}>
            <IconButton style={{fontSize: '22px'}}>
              <IoBagOutline />
            </IconButton>
          </Link>
          
        </Col>
      </Row>
      

    </WrapperHeader>
    <WrapperSubHeader>
      sub
    </WrapperSubHeader>
    </>
  )
}

export default HeaderComponent
