import React from 'react';
import './MyFooter.css';
import Image from '../../assets/Icon/logo-no-background.png';
import { Layout } from 'antd';
import { Typography } from 'antd';
import { FaWhatsapp } from 'react-icons/fa';
import { TbPhoneCalling } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const { Footer } = Layout;

const MyFooter = ({ scrollToSection }) => {
    const navigate = useNavigate();

    const handleCallClick = () => {
        window.location.href = 'tel:+917056118281';
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://wa.me/917056118281';
    };

    const handleClick = (itemKey) => {
        scrollToSection(itemKey);
    };

    return (
        <Footer className="footer">
            <img src={Image} className="logoFooter" alt="Footer Logo" />
            <div className="footerBottom">
                <div className="menuList">
                    <div className="menuItem" onClick={() => handleClick('home')}>
                        Home
                    </div>
                    <div className="menuItem" onClick={() => handleClick('chooseus')}>
                        Routes
                    </div>
                    <div className="menuItem" onClick={() => handleClick('services')}>
                        Services
                    </div>
                    <div className="menuItem" onClick={() => handleClick('aboutus')}>
                        About Us
                    </div>
                </div>
                <div className="menuList">
                    <div className="menuItem center" onClick={handleWhatsAppClick}>
                        <FaWhatsapp className="icons" /> +917056118281
                    </div>
                    <div className="menuItem center" onClick={handleCallClick}>
                        <TbPhoneCalling className="icons" /> +917056118281
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default MyFooter;
