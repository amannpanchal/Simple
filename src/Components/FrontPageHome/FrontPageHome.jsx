import React from 'react';
import './FrontPageHome.css';
import { Button, Col, Row, Typography } from 'antd';

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Image from '../../assets/Icon/frontpage.png'

const FrontPageHome = () => {


    const handleCallClick = () => {
        window.location.href = 'tel:+918397962296';
    };

    const handleWhatsAppClick = () => {

        window.location.href = 'https://wa.me/8397962296';
    };


    return (


        <div class="frontPage">
            <Row className='row'>


                <Col className='col' xs={24} md={12} >

                    <div
                        className='text center'
                    >
                        <div className='mainBoldText'>


                            <span>Cab Services</span>
                            <br />
                            Ride Smoothly <br/>Anywhere
                            <br />

                            <div className='buttons'>
                                <button className='callButton center'
                                    onClick={handleCallClick}
                                
                                >
                                    <FaPhoneAlt className='icon' />

                                    Call Now</button>
                                <button className='whatsappButton center' onClick={handleWhatsAppClick} >
                                    <FaWhatsapp className='icon' />
                                    WhatsApp</button>
                            </div>
                        </div>
                        <div className='tickMark'>
                            {/* <div className='tickMarkOne'>  */}
                                <div className='tickMarkOneByOne'>
                                <RiCheckboxCircleFill className='tickIcon' />
                                Transparent fare breakdown
                                </div>
                                <div className='tickMarkOneByOne'>
                                    <RiCheckboxCircleFill className='tickIcon' /> No hidden charges or surprises
                                </div>
                            {/* </div> */}
                            <div className='tickMarkOneByOne'>
                                <RiCheckboxCircleFill className='tickIcon' />Competitive, Affordable Pricing 
                            </div>
                        </div>
                    </div>

                </Col>

                <Col className='col' xs={0} md={12}>
                    <div className ="center imageRight">
                        <img src={Image} className = "sideImage" />
                    </div>
                </Col>
            </Row>
        </div>


    );
};

export default FrontPageHome;
