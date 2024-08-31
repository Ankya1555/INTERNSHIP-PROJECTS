import React from 'react';
import Slider from 'react-slick';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img10 from '../Photos/n4.jpg';
import img11 from '../Photos/n5.jpg';
import img12 from '../Photos/n1.jpg';
import img13 from '../Photos/n2.jpg';
import img14 from '../Photos/n3.jpg';
import img15 from '../Photos/n6.jpg';
import img16 from '../Photos/w1.jpg';
import img17 from '../Photos/n8.jpg';
import img18 from '../Photos/n9.jpg';
import img19 from '../Photos/n10.jpg';
import img20 from '../Photos/n11.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Main.css'; // Ensure this path is correct
import Home3 from '../Home3';

const News = () => {
  const newsData = [
    {
      id: 1,
      images: [img10, img11, img13], 
      title: "कोव्हिड रुग्णांसाठी माणुसकी फाऊंडेशन आधारवड",
      description:
        "माणुसकी फाऊंडेशनच्या कार्याने कोविड-१९ काळात अनेक गरजू रुग्णांना जीवदान दिले. या काळात माणुसकी फाऊंडेशनने अत्यावश्यक औषधे, ऑक्सिजन सिलिंडर आणि अन्नधान्याचे किट गरजूंपर्यंत पोहोचवले. संस्थेच्या स्वयंसेवकांनी गावोगावी जाऊन रुग्णांच्या सेवा करण्याचे कार्य केले. माणुसकी फाऊंडेशनचा हा समाजासाठीचा यथार्थ आणि प्रेरणादायी प्रवास आजही अविरत सुरू आहे.",
    },
    {
      id: 2,
      images: [img14, img15, img16],
      title: "माणुसकी फाऊंडेशन",
      description:  "माणुसकी फाऊंडेशनच्या कार्याने कोविड-१९ काळात अनेक गरजू रुग्णांना जीवदान दिले. या काळात माणुसकी फाऊंडेशनने अत्यावश्यक औषधे, ऑक्सिजन सिलिंडर आणि अन्नधान्याचे किट गरजूंपर्यंत पोहोचवले. संस्थेच्या स्वयंसेवकांनी गावोगावी जाऊन रुग्णांच्या सेवा करण्याचे कार्य केले. माणुसकी फाऊंडेशनचा हा समाजासाठीचा यथार्थ आणि प्रेरणादायी प्रवास आजही अविरत सुरू आहे.",
    },
    {
      id: 3,
      images: [img17, img18, img19, img20],
      title: "माणुसकी फाऊंडेशन",
      description:   "कोव्हिड रुग्णांसाठी माणुसकी फाऊंडेशन आधारवड गणेश मगर-पाटील यांच्या फाउंडेशन मा काम असेसरिजले दुधोंडी / चार्यहर करणारे सर्व सहकारी उच्चशिक्षित कार्यमचे माणुसकी शीतल माणुसकी फाऊंडेशन आणि मराठीत यांनी पडेशनचे संस्थापक गणेश कोविड रुणांस आधारवड पडेगाना टोम सोबत पलूस मगर-पाटील, अध्यक्ष अनिकेत समितीचे बारी सभात पांडूरंग सीन, एस डिसेंटर येथे मंडले, आफताब शिकलार, मगर-पाटील व लिवर कामगारान सर्वसामान व लोक प्रथमेशचा मंगेश जाधव पटनांचे हसः सकाळी कामावर गेलाशिवाय मेंमेहिते, सर्वराज मुजावर, गीत पटीत खंने मायुसको फाउंडेशन संध्याकाळी भाकरी मिजत नाही सूर्यवंशी, शावार नाफ, मुर्णल शेर मगुमको फाउंडेशनकडून कोरे, साहिल सत्तवर्डचे जेवणाचे",
    },
  ];

  const galleryImages = [img10, img11, img12, img13, img14, img15]; // Images for the gallery

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Container>
        <div className="news-container">
          {newsData.map((newsItem, index) => (
            <div
              className={`news-grid ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
              key={newsItem.id}
            >
              <Slider {...sliderSettings} className="news-slider">
                {newsItem.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="slider-item">
                    <img src={image} alt={`News related to ${newsItem.title}`} className="news-image" />
                  </div>
                ))}
              </Slider>
              <div className="news-description">
                <h2>{newsItem.title}</h2>
                <p>{newsItem.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Gallery before the footer */}
        <Grid container spacing={3} className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <img src={image} alt={`News gallery item ${index + 1}`} className="gallery-image" />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Home3 />
    </>
  );
};

export default News;
