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
    // State to track the currently selected menu item, defaulting to "home"
    const [current, setCurrent] = useState('home');

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

    // Handler to update the current menu item and close the drawer if open
    const handleClick = (itemKey) => {
        scrollToSection(itemKey);
        setCurrent(itemKey);
        if (open) {
            setOpen(false);
        }
    };

    return (
        <>
            <AlignRightOutlined className='sideMenu' onClick={showDrawer} />

            <Drawer style = {{zIndex : 2323234234}} onClose={onClose} open={open}>
                <Menu mode="vertical" selectedKeys={[current]}>
                    {items.map(item => (
                        <Menu.Item
                            onClick={() => handleClick(item.key)}
                            key={item.key}>{item.label}</Menu.Item>
                    ))}
                </Menu>
            </Drawer>

            <div className='parentMenu'>
                <Menu className='menu' selectedKeys={[current]}>
                    {items.map(item => (
                        <Menu.Item
                            onClick={() => handleClick(item.key)}
                            key={item.key}>
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        </>
    );
};

export default Navbar;
