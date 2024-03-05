import React from 'react';
import './FrontSceen.css';
import { Typography } from 'antd';

const FrontScreeen = ({page}) => {
  const handleVideoError = (error) => {
    console.error('Video playback error:', error);
  };

  return (
    <div className='frontScreen'>
      <video
        className='center videoPlayer'
        style={{ width: "100vw", height: "100vh" }}
        autoPlay
        loop
        muted
        onError={handleVideoError}
      >
        <source src="http://res.cloudinary.com/dk2scs5jz/video/upload/v1709641432/sma2xh1olseme6z5tj3g.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "frontPage center">
        <Typography.Title
          style ={{ fontSize :"100px" ,color : "white" , textAlign : "center"}}
        
        >{page}</Typography.Title>
      </div>


    </div>
  );
};

export default FrontScreeen;
