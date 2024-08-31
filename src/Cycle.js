import { Container } from '@mui/material';
import React from 'react';

const Cycle = () => {
  return (

      <>
      <Container> 

      
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center' }}>Cycle: The Eco-Friendly Ride</h1>
      
      <img 
        src="https://via.placeholder.com/400x300.png?text=cycle" 
        alt="cycle" 
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />
      
      <p>
        Cycling is not only a healthy and enjoyable activity but also an eco-friendly mode of transportation. Bicycles reduce carbon emissions, promote physical fitness, and offer a convenient way to navigate through busy streets. Whether for commuting or recreation, cycling is a sustainable choice that benefits both individuals and the environment.
      </p>
    </div>
    </Container>
      </>
    
  );
}

export default Cycle;




// const handleDonateClick = () => {
//   navigate('/donate'); // This navigates to the DonateForm page
// };


// <Box textAlign={'center'} alignItems={'center'} mt={10}>
// <Button variant='contained' color='warning' onClick={handleDonateClick}>Donate Now</Button>
// </Box>