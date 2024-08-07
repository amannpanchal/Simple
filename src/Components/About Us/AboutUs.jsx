import React from 'react'
import FrontScreeen from '../FrontScreen/FrontScreeen'
import { Typography } from 'antd'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div id="aboutus" className='aboutUs center'>
      <br />
    
      <div >
        <Typography.Title className='title'>About Us</Typography.Title>
        <Typography.Paragraph style ={{margin : "0 20px "}}>
Welcome to Khatu Shayam Tours and Travel Agency
Hello! I am Aakash Panchal, the proud owner of Khatu Shayam Tours and Travel Agency. Our mission is to provide you with the best travel experiences and memorable journeys, tailored to your needs and preferences.

At Khatu Shayam Tours and Travel, we believe in making travel dreams come true. Whether you're planning a solo adventure, a family vacation, or a corporate trip, we've got you covered. Our team of dedicated professionals is committed to delivering exceptional service and ensuring your travel experience is seamless and enjoyable.
        
        </Typography.Paragraph>
      </div>


    </div>
  )
}

export default AboutUs
