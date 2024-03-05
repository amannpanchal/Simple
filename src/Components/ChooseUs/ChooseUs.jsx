import { CustomerServiceOutlined, LikeOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import './ChooseUs.css'
const { Title } = Typography;

const ChooseUs = () => {
    return (
        <div id="chooseus" className='chooseus '>
            <br/>
            <Typography.Title className='title'>
                So, why choose us?
            </Typography.Title>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card>
                        <SafetyCertificateOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />
                        <Title level={4}>Safety</Title>
                        <Typography>Safety is our top priority. We ensure the safety and well-being of our customers.</Typography>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card>
                        <CustomerServiceOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />
                        <Title level={4}>Exceptional Customer Service</Title>
                        <Typography>Our dedicated team provides prompt responses and personalized attention to our customers.</Typography>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card>
                        <LikeOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />
                        <Title level={4}>Satisfaction Guarantee</Title>
                        <Typography>We stand behind our products and services with a satisfaction guarantee.</Typography>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ChooseUs;
