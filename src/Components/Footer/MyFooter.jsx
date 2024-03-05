import { Footer } from 'antd/es/layout/layout'
import React from 'react'
import './MyFooter.css'
import Image from '../../assets/Icon/logo-no-background.png'
import { TbPhoneCalling } from "react-icons/tb";
import { Typography } from 'antd'
import { InstagramFilled, TwitterOutlined, TwitterSquareFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
const MyFooter = () => {
    const navigate = useNavigate();
    const handleCallClick = () => {
        window.location.href = 'tel:+918397962296';
    };

    const handleWhatsAppClick = () => {

        window.location.href = 'https://wa.me/8397962296';
    };
  return (
      <Footer className="footer ">
          <img src={Image} className='logoFooter'/>
          <div className='footerBottom'>
              <div className='menuList '>
                  <div
                      onClick={() => { navigate("/") }
                      }
                      
                      className='menuItem'>
                      Home
                  </div>
                  <div
                      onClick={() => { navigate("/contactus") }
                      }
                      className='menuItem'>
                      Contact Us
                  </div >
                  <div
                      onClick={() => { navigate("/services") }
                      }
                      className='menuItem'>
                      Services
                  </div>
                  <div
                      onClick={() => { navigate("/aboutus") }
                      }
                      className='menuItem'>
                      About Us
                  </div>
              </div>
              <div className='menuList  '>
                  <div className='menuItem center' onClick={handleWhatsAppClick} >
                      <FaWhatsapp className = "icons" /> 8397962296
                  </div>
                  <div className='menuItem center'>
                      <TbPhoneCalling className="icons" onClick={handleWhatsAppClick} />8397962296
                  </div>
                  <div className='menuItem center' >
                      <TbPhoneCalling className="icons" onClick={handleCallClick} />8397962296
                  </div>
              </div>
           
          </div>
         
          

 </Footer>
  )
}

export default MyFooter