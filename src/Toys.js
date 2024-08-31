import { Container } from '@mui/material';
import React from 'react';

const Toys = () => {
  return (
    <>
    <Container>

    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center' }}>Toys: A World of Fun and Learning</h1>
      
      <img 
        src="https://cdn.pixabay.com/photo/2015/10/21/07/32/lego-998419_960_720.jpg" 
        alt="Toys" 
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />
      
      <p>
        Toys are more than just playthings; they are tools for learning and development. From building blocks to educational games, toys help children develop cognitive, social, and motor skills. They also spark creativity and imagination, allowing children to explore and understand the world around them.
      </p>
    </div>
    </Container>
    </>

  );
}

export default Toys;
