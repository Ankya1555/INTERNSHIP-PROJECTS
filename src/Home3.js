import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import backgroundImg from '../src/Photos/foot.jpg';

// Styled component for the footer container with background image
const FooterContainer = styled(Box)({
  backgroundImage: `url(${backgroundImg})`, // Set the background image
  backgroundSize: 'cover', // Cover the entire container
  backgroundPosition: 'center', // Center the background image
  backgroundRepeat: 'no-repeat', // Prevent the image from repeating
  color: '#eeeeee', // Ensure text color contrasts with the background image
  padding: '16px', // Adjust padding as needed
  marginTop: '16px', // Adjust margin as needed
  textAlign: 'center', // Center the text (optional)
});

// Styled component for footer links
const FooterLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',color: '#eeeeee',
  },
}));

// Functional component for the footer
export default function Home3() {
  return (
    <FooterContainer>
      <Typography variant="body1" gutterBottom>
        We request you to join us in making this social transformation, by whatever way possible to you. You can help us in many ways.
      </Typography>
      
      <Grid container spacing={2}>
        {/* Home Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Home</Typography>
          <FooterLink to="/About">About Us</FooterLink><br />
          <FooterLink to="/our-vision">Our Vision</FooterLink><br />
          <FooterLink to="/our-mission">Our Mission</FooterLink><br />
          <FooterLink to="/our-trustees">Our Trustees</FooterLink><br />
          <FooterLink to="/gallery">Gallery</FooterLink><br />
          <FooterLink to="/news">News</FooterLink>
        </Grid>

        {/* Donation Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Donation</Typography>
          <FooterLink to="/clothes-donation">Clothes Donation</FooterLink><br />
          <FooterLink to="/Marriage">Marriage Donations</FooterLink><br />
          <FooterLink to="/Manuskichi">Goodwill Thali</FooterLink><br />
          <FooterLink to="/Toy">Toys Donation</FooterLink><br />
          <FooterLink to="/Computer">Computer Donations</FooterLink><br />
          <FooterLink to="/Cycle">Cycle Donation</FooterLink><br />
          <FooterLink to="/Plastic">Say No to Plastic Bags</FooterLink>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">Reach Us</Typography>
          <Typography variant="body2">Address: More Petrol Pump, Shivane, Pune. Maharashtra, India.</Typography>
          <Typography variant="body2">Contact: 020 25290909 | 9011013330</Typography>
          <Typography variant="body2">Email: <FooterLink to="mailto:goodwillpune01@gmail.com">goodwillpune01@gmail.com</FooterLink></Typography>
          <Box mt={2}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0196156589284!2d73.79995331528358!3d18.533269987396234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8d084c44a9f%3A0xe3ab84e01863ea1f!2sDudhondi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692723341283!5m2!1sen!2sin"
              width="80%"
              height="100"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Dudhondi Location"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}
