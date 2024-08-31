import React from 'react';
import img1 from '../Photos/1.jpg';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const Contact1 = () => {
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
          color: '#fff',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
        }}
      >
        <Typography variant="h3" align="center">Contact Us</Typography>
        <Typography variant="h6" align="center" sx={{ color: '#00b0ff', mt: 1 }}>
          हाक तुमची साथ आमची एक हात माणुसकीचा
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>We would love to hear from you</Typography>
        <Typography variant="body1" gutterBottom>
          Reach Us:
          <br />
          Address: More Petrol Pump, Shivane, Pune. Maharashtra, India.
          <br />
          Contact: 020 25290909 | 9011013330
          <br />
          Email: goodwillpune01@gmail.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please donate used/unwanted clothes, ladies' dresses, pots, toys, computers, furniture, and other household items at any of the collections mentioned below. We will deliver them to the needy & underprivileged people.
        </Typography>
        <Typography variant="body1" gutterBottom>
          आपणास नको असलेले सर्व प्रकारचे कपडे, वस्तू, खेळणी, फर्निचर, संगणक, लहान मुलांचे कपडे, मोठ्या माणसांचे कपडे, धान्य इत्यादी गुडविल इंडियाच्या खालील कलेक्शन कॅम्पमध्ये आणून देऊ शकता. धन्यवाद!
        </Typography>

        <Typography variant="h5" sx={{ mt: 3 }}>Enquiry Form</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Phone Number" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" size="large">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact1;
