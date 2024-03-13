import { CameraOutlined, CompassFilled, DollarOutlined, GlobalOutlined } from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { FaCarSide } from "react-icons/fa";
import { GiHorizonRoad } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import Cab from '../../assets/Image/cab.jpeg'
import Toursim from '../../assets/Image/toursim.jpg'
const { Title } = Typography;

const Services = () => {
  const services = [
    {
      icon: < FaCarSide  style={{ fontSize: '132px', marginBottom: '10px' }} />,
      image: `${Cab}`,
      title: 'Cab Services',
      description: 'Reliable, efficient cab services tailored to your needs. Professional drivers, modern fleet, and seamless booking. Your comfort and safety are our priorities. Experience convenience with our premier cab service today.',
    },
    {
      icon: <GiHorizonRoad style={{ fontSize: '132px', marginBottom: '10px' }} />,
      image: `${Toursim}`,
      title: 'Tourism Services',
      description: 'Experience personalized tours with our cab tourism service. Discover local gems, cultural landmarks, and scenic vistas with knowledgeable drivers. Relax and enjoy hassle-free exploration tailored to your interAs the proprietor of a cab tourism provider, our focus lies in crafting unforgettable travel experiences for our clientele. Our fleet of well-maintained vehicles ensures comfort and safety throughout the journey. We pride ourselves on knowledgeable and courteous drivers who serve as both guides and companions, enriching the exploration with insights into local culture and attractions. Offering customizable itineraries, we cater to diverse preferences, whether it is sightseeing, culinary adventures, or off- the - beaten - path discoveries.Our commitment to excellence extends to seamless logistics, timely pickups, and flexible scheduling, ensuring every trip exceeds expectations.With us, travelers embark on journeys marked by convenience, authenticity, and cherished memoriesests.',
    },
    {
      icon: <CiDeliveryTruck style={{ fontSize: '132px', marginBottom: '10px' }} />,
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/3/38/Link2.png',
      title: 'Tempo Services',
      description: 'Tempo services offer flexible transportation solutions, catering to various needs from short trips to longer journeys. Our fleet of well-maintained vehicles and skilled drivers prioritize safety and comfort. We understand the importance of punctuality, adhering to schedules to meet customer demands. With a focus on customer satisfaction, we strive to provide seamless experiences, offering convenient booking options and responsive customer support. Our commitment to excellence drives us to continuously improve our services, adapting to changing needs and delivering reliable transportation solutions for individuals and businesses alike.',
    },
    // {
    //   icon: <DollarOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />,
    //   image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/3/38/Link2.png',
    //   title: 'Budget Packages',
    //   description: 'Enjoy affordable travel packages without compromising on quality.',
    // },
    // {
    //   icon: <GlobalOutlined style={{ fontSize: '32px', marginBottom: '10px' }} />,
    //   image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/3/38/Link2.png',
    //   title: 'Customized Travel Plans',
    //   description: 'Tailor-made travel plans to suit your preferences and interests.',
    // },
  ];

  return (
    <div className='services' id="services">
      <br />
      <Typography.Title className='title'>Services</Typography.Title>
      <Row gutter={[16, 16]}>
        {services.map((service, index) => (
          <Col key={index} span={24}>
            <Card
              style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '90vw', margin: "auto" }}
              bodyStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,}}
            >
              {index % 2 === 0 ? (
                <>
                  <div style={{ flex: '0 0 auto', width: '30%' }}>
                    <img alt={service.title} src={service.image} style={{ width: '100%', height: 'auto', borderRadius: '10px 0 0 10px' }} />
                  </div>
                  <div style={{ padding: '20px', flex: 1 }}>
                    {service.icon}
                    <Title level={4}>{service.title}</Title>
                    <Typography>{service.description}</Typography>
                  </div>
                </>
              ) : (
                <>
                    <div style={{ padding: '20px', flex: 1, width: '50%' }}>
                    {service.icon}
                    <Title level={4}>{service.title}</Title>
                    <Typography>{service.description}</Typography>
                  </div>
                    <div style={{ flex: '0 0 auto', width: '30%' }}>
                    <img alt={service.title} src={service.image} style={{ width: '100%', height: 'auto', borderRadius: '0 10px 10px 0' }} />
                  </div>
                </>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
