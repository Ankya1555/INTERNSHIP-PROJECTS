import React from 'react';
import img1 from './Photos/1.jpg';
import { Box } from '@mui/material';

const Home1 = () => {
  return (
    <>
    <Box
      sx={{
        backgroundImage: `url('${img1}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '30vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200ea', // Optional: Adjust text color for better visibility
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Optional: Add text shadow for better readability
      }}
    >
      <h1>युथ माणूसकी फाउंडेशन</h1>
      <h5 style={{ color: '##00b0ff' }}>हाक तुमची साथ आमची एक हात माणुसकीचा</h5>
    </Box>


    </>
  );
};

export default Home1;
