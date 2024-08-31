import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './Component/Main.css'; // or the path to your CSS file

import img1 from './Photos/h13.jpg';
import img2 from './Photos/c1.jpg';
import img3 from './Photos/h8.jpg';
import img4 from './Photos/h7.jpg';
import img5 from './Photos/n10.jpg';
import img6 from './Photos/n11.jpg';
import img7 from './Photos/n3.jpg';
import img8 from './Photos/h3.jpg';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export default function Home2() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleDonateClick = () => {
    navigate('/donate'); // Navigate to the donate page when the button is clicked
  };

  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1, mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Slider {...sliderSettings}>
                <div>
                  <img src={img1} alt="img1" width="100%" height="400" />
                </div>
                <div>
                  <img src={img2} alt="img2" width="100%" height="400" />
                </div>
                <div>
                  <img src={img3} alt="img3" width="100%" height="400" />
                </div>
              </Slider>

              <Box textAlign={'center'} alignItems={'center'} mt={10}>
                <Button variant='contained' color='warning' onClick={handleDonateClick}>Donate Now</Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} mb={3} mt={5}>
              <Box display="flex" flexDirection="column" alignItems="center" sx={{ height: 405, width: '100%' }} gap={2}>
                <List sx={{ width: '80%'  }}>
                  {[
                    { text: 'Marriage Donations', link: '/Marriage' },
                    { text: 'Manuskichi Thali', link: '/Manuskichi' },
                    { text: 'Toys Donation', link: '/Toys' },
                    { text: 'Computer Donations', link: '/Computer' },
                    { text: 'Cycle Donation', link: '/Cycle' },
                    { text: 'Say No to Plastic Bags', link: '/Plastic' }
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ padding: '10px 0', justifyContent: 'center' }}
                      component={Link}
                      to={item.link}
                    >
                      <ListItemIcon
                        sx={{
                          '&:hover': {
                            color: 'red',
                            transform: 'scale(1.2)',
                          },
                          '&:active': {
                            color: 'blue',
                          },
                        }}
                      >
                        <FavoriteIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box textAlign={'start'} sx={{ maxWidth: '325px' }}>
                <Typography variant="h6" gutterBottom>
                  Our Events
                </Typography>
                <Slider {...sliderSettings}>
                  <div>
                    <img src={img1} alt="event1" style={{ width: '325px', height: '150px' }} />
                  </div>
                  <div>
                    <img src={img2} alt="event2" style={{ width: '325px', height: '150px' }} />
                  </div>
                  <div>
                    <img src={img3} alt="event3" style={{ width: '325px', height: '150px' }} />
                  </div>
                </Slider>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={4}>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" color="primary">
                Goodwill India Upkaram
              </Typography>
              <Typography variant="body1">
                Today, more than ever, you can help your neighbors and communities in need by donating clothes and other gently used household items to local charities...
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Our organization is not only collecting and distributing clothes, toys, computers, books, etc...
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: '#ed6c02',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h5" color="#e3f2fd" gutterBottom>
                  Donate Now
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Call us for Donating Things, We can arrange Vehicle for Society Collection
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Phone: 123-456-7890
                </Typography>
                <Button variant="contained" color="primary" onClick={handleDonateClick}>
                  Donate Now
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* New Section: Two Rows of Images */}
          <Grid container spacing={2} mt={4}>
            <Grid item xs={12} sm={4}>
              <img src={img3} alt="img1" width="100%" height="200" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={img4} alt="img2" width="100%" height="200" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={img5} alt="img3" width="100%" height="200" />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={4}>
              <img src={img6} alt="img1" width="100%" height="200" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={img7} alt="img2" width="100%" height="200" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img src={img8} alt="img3" width="100%" height="200" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
