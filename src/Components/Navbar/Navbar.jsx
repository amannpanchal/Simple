import { Drawer, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import image from '../../assets/Icon/logo-no-background.png'
import './Navbar.css';
import { AlignRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToSection}) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Header className={`${scrolled && "headerNavbar"} header`}>
            <div className='center'>
                <img className='logoPic' src={image} alt="Logo" />
            </div>
            <AppMenu scrollToSection={scrollToSection} />
        </Header>
    );
};

const AppMenu = ({ scrollToSection }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const items = [
        {
            label: "Home",
            key: "home"
        },
        {
            label: "Quality",
            key: "chooseus"
        },
        {
            label: "Services",
            key: "services"
        },
        {
            label: "About Us",
            key: "aboutus"
        }
    ];

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

 
    return (
        <>
            <AlignRightOutlined className='sideMenu' onClick={showDrawer} />

            <Drawer onClose={onClose} open={open}>
                <Menu  mode="vertical">
                    {items.map(item => (
                        <Menu.Item
                            onClick={() => { scrollToSection(item.key)}}
                            key={item.key}>{item.label}</Menu.Item>
                    ))}
                </Menu>
            </Drawer>

            <div className='parentMenu'>
                <Menu className='menu' >
                    {items.map(item => (
                        <Menu.Item
                            onClick={() => { scrollToSection(item.key) }}
                            key={item.key} >
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        </>
    );
};

export default Navbar;
