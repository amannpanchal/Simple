import React from 'react'
import FrontPageHome from '../FrontPageHome/FrontPageHome';
import { Card, Col, Row, Space, Typography } from 'antd';
import { CustomerServiceOutlined, LikeOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import ChooseUs from '../ChooseUs/ChooseUs';
import Services from '../Services/Services';
import AboutUs from '../About Us/AboutUs';

const Home = () => {

    return (
      
        <div id = "home">
            <FrontPageHome />
            <div>
                <ChooseUs />
                <Services />
                <AboutUs/>
                


            </div>
        </div>
  )
}

export default Home