import React from 'react';
import './MyFooter.css';
import Image from '../../assets/Icon/logo-no-background.png';
import { Footer } from 'antd/es/layout/layout';
import { Typography } from 'antd';
import { FaWhatsapp } from 'react-icons/fa';
import { TbPhoneCalling } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const MyFooter = ({ scrollToSection }) => {
    const navigate = useNavigate();

    const handleCallClick = () => {
        window.location.href = 'tel:+918397962296';
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://wa.me/8397962296';
    };
    const handleClick = (itemKey) => {
        scrollToSection(itemKey);
        
       
    };
    return (
        <Footer className="footer">
            <img src={Image} className='logoFooter' alt="Footer Logo" />
            <div className='footerBottom'>
                <div className='menuList'>
                    <div className='menuItem'
                        onClick={() => handleClick('home')}
                    
                    >
                        Home
                    </div>
                    <div className='menuItem'
                        onClick={() => handleClick('chooseus')}
                    
                    >
                        Routes
                    </div>
                    <div className='menuItem' 
                        onClick={() => handleClick('services')}
                    
                    >
                        Services
                    </div>
                    <div className='menuItem' onClick={() => handleClick('aboutus')}
                    
                    
                    >
                        About Us
                    </div>
                </div>
                <div className='menuList'>
                    <div className='menuItem center' onClick={handleWhatsAppClick}>
                        <FaWhatsapp className="icons" /> 8397962296
                    </div>
                    <div className='menuItem center' onClick={handleCallClick}>
                        <TbPhoneCalling className="icons" /> 8397962296
                    </div>
                    <div className='menuItem center' onClick={handleCallClick}>
                        <TbPhoneCalling className="icons" /> 8397962296
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default MyFooter;
