import TajMahal from '../../assets/Image/agra.jpg';
import shilma from '../../assets/Image/shimla.jpg';
import vrindavan from '../../assets/Image/vrindavan.jpg';
import ayodhya from '../../assets/Image/ayodhya.png';
import haridwarr from '../../assets/Image/haridwar.jpg';

import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import './ChooseUs.css';
const { Title } = Typography;

const famousDestinations = [
    {
        title: "Agra",
        description: "Home to the iconic Taj Mahal.",
        imageUrl: `${TajMahal}`
    },
    {
        title: "Vrindavan",
        description: "A historical city famous for its temples and rich culture.",
        imageUrl : `${vrindavan}`
    },
    {
        title: "Shimla",
        description: "The summer capital with breathtaking views and colonial architecture.",
        imageUrl: ` ${shilma}`
    },
    {
        title: "Haridwar",
        description: "A high-altitude Himalayan resort town known for adventure sports.",
        imageUrl: ` ${haridwarr}`
    },
    {
        title: "Ayodhya",
        description: "A city believed to be the birthplace of Lord Rama.",
        imageUrl: `${ayodhya}`
    },
    {
        title: "Rishikesh",
        description: "A city believed to be the birthplace of Lord Rama.",
        imageUrl: `${ayodhya}`
    },
    {
        title: "Manali",
        description: "A city believed to be the birthplace of Lord Rama.",
        imageUrl: `${ayodhya}`
    },
    {
        title: "Kashi",
        description: "A city believed to be the birthplace of Lord Rama.",
        imageUrl: `${ayodhya}`
    },
];

const ChooseUs = () => {
    return (
        <div id="chooseus" className='chooseus'>
            <br />
            <Typography.Title className='title'>
                Explore Famous Destinations
            </Typography.Title>
            <Row gutter={[16, 16]}>
                {famousDestinations.map((destination, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
                        <Card className="chooseus-card" cover={<img alt={destination.title} src={destination.imageUrl} className="chooseus-image" />} >
                            <div className="card-content">
                                <Title level={4}>{destination.title}</Title>
                                <Typography>{destination.description}</Typography>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ChooseUs;
