
import { CameraOutlined, CompassFilled, DollarOutlined, GlobalOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { RiAirplayLine } from 'react-icons/ri';

const { Title } = Typography;

const Services = () => {
  const services = [
    {
      icon: <RiAirplayLine style={{ fontSize: '32px', marginBottom: '10px' }} />,
      title: 'Flight Booking',
      description: 'Book flights to your desired destinations at competitive prices.',
    },
    {
      icon: <CompassFilled style={{ fontSize: '32px', marginBottom: '10px' }} />,
      title: 'Guided Tours',
      description: 'Explore the world with our experienced tour guides and curated itineraries.',
    },
    {
      icon: <CameraOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />,
      title: 'Photography Expeditions',
      description: 'Capture breathtaking moments with our photography experts in stunning locations.',
    },
    {
      icon: <DollarOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />,
      title: 'Budget Packages',
      description: 'Enjoy affordable travel packages without compromising on quality.',
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />,
      title: 'Customized Travel Plans',
      description: 'Tailor-made travel plans to suit your preferences and interests.',
    },
  ];

  return (
    <div className='services' id="services">
     <br/>
  
      <Typography.Title className='title'>Services</Typography.Title>
      <Row >
        {services.map((service, index) => (
          <Col key={index} xs={23}>
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '91vw', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

                <div>
                {service.icon}
                <Title level={4}>{service.title}</Title>

                </div>
                <Typography>{service.description}</Typography>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
