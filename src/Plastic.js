import { Container } from '@mui/material';
import React from 'react';

const Plastic = () => {
  return (
    <>
      <Container>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center' }}>Plastic: The Double-Edged Sword</h1>
      
      <img 
        src="https://via.placeholder.com/400x300.png?text=Plastic+Waste" 
        alt="Plastic Waste" 
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />
      
      <p>
        Plastic is one of the most versatile materials in modern manufacturing, used in everything from packaging to electronics. However, its durability also makes it a significant environmental concern. Single-use plastics contribute to pollution, and improper disposal leads to long-lasting damage to ecosystems. Reducing plastic waste and finding sustainable alternatives is crucial for preserving our planet.
      </p>
    </div>
    </Container>
    </>
  );
}

export default Plastic;
