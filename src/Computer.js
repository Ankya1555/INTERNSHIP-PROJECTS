import { Container } from '@mui/material';
import React from 'react';

const Computer = () => {
  return (
    <>
    <Container>

   
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center' }}>Computer: The Brain of the Modern Age</h1>
      
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDEzNjB8MHwxfGFsbHwxfHx8fHx8fHwxNjIwNjg1NDA5&ixlib=rb-1.2.1&q=80&w=400" 
        alt="Computer" 
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />
      
      <p>
        Computers have revolutionized the way we live, work, and communicate. From powerful desktops to portable laptops, computers are integral to every aspect of modern life. They perform complex calculations, store vast amounts of data, and connect us to the world in ways that were unimaginable just a few decades ago.
      </p>
    </div>
    </Container>
    </>
  );
}

export default Computer;
