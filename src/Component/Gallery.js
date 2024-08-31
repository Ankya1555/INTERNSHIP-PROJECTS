import React from 'react';
import Slider from 'react-slick';
import img1 from '../Photos/h10.jpg';
import img2 from '../Photos/h9.jpg';
import img3 from '../Photos/h8.jpg';
import img4 from '../Photos/h7.jpg';
import img5 from '../Photos/h6.jpg';
import img6 from '../Photos/h5.jpg';
import img7 from '../Photos/h4.jpg';
import img8 from '../Photos/h3.jpg';
import img9 from '../Photos/j1.jpg';
import img10 from '../Photos/j4.jpg';
import img11 from '../Photos/j5.jpg';
import img12 from '../Photos/j6.jpg';
import img13 from '../Photos/j8.jpg';
import img14 from '../Photos/j9.jpg';
import img15 from '../Photos/j10.jpg';
import img16 from '../Photos/j11.jpg';
import './Main.css'; // Ensure this path is correct
import Home3 from '../Home3';
import { Container } from '@mui/material';

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const groups = [...images, ...images];

  return (
    <>
    <Container>
    <div className="gallery">
      <Slider {...settings}>
        {groups.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <Slider {...settings}>
        {groups.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {groups.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {groups.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    
    
    </Container>
    <Home3/>
    </> 
  );
}

export default Gallery;
