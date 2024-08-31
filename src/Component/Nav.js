import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import img1 from '../Photos/logo M.jpg';
import img2 from '../Photos/logo2.png';
import backgroundImg from '../Photos/background.jpg'; // Correct path to your background image
import { useMediaQuery } from '@mui/material';

const pages = [
  { tab: 'Home', link: '/' },
  { tab: 'About', link: '/About' },
  { tab: 'Contact', link: '/Contact' },
  { tab: 'Gallery', link: '/Gallery' },
  { tab: 'News', link: '/News' },
];

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDonateClick = () => {
    window.open('/donate', '_blank');
  };

  const isSmallScreen = useMediaQuery('(max-width:800px)');

  return (
    <>
      <div className="header_logo_area" style={{ display: isSmallScreen ? 'none' : 'flex' }}>
        <Container maxWidth="xl">
          <Box display="flex" alignItems="center" justifyContent="space-evenly">
            <Box display="flex" alignItems="center">
              <img src={img1} alt="Logo" style={{ height: 100 }} />
            </Box>

            <Box display={isSmallScreen ? "none" : "flex"} alignItems="center">
              <Box display="flex" alignItems="center" mr={4}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Box textAlign="right" marginRight={30}>
                  <Typography variant="body1" color="textSecondary">
                    Want to talk with us
                  </Typography>
                  <Typography variant="body2">
                    <a href="tel:02025290909">020 25290909</a>
                  </Typography>
                  <Typography variant="body2">
                    <a href="tel:9011013330">+91 8466071140</a>
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mr={4}>
                <EmailIcon sx={{ mr: 1 }} />
                <Box textAlign="right">
                  <Typography variant="body1" color="textSecondary">
                    Send an Email
                  </Typography>
                  <Typography variant="body2">
                    <a href="mailto:goodwillpune01@gmail.com">aniketshendge50@gmail.com</a>
                  </Typography>
                </Box>
              </Box>

              <Button variant="contained" color="secondary" onClick={handleDonateClick}>
                Donate Now
              </Button>
              <img src={img2} alt="Logo" style={{ height: 100, width: 80, marginLeft: 50 }} />
            </Box>
          </Box>
        </Container>
      </div>

      <AppBar 
        position="static" 
        sx={{ 
          height: 70,
          backgroundImage: `url(${backgroundImg})`, // Set background image
          backgroundSize: 'cover', // Cover the entire area
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat' // Avoid repeating the image
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Cloth Donation
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'black' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: 'black' }}>
                      {page.tab}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Cloth Donation
            </Typography>
            <Box sx={{ flexGrow: 1 }} />

            {/* Navigation items */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {pages.map((page, index) => (
                <Link 
                  to={page.link} 
                  key={index} 
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    sx={{
                      my: 2,
                      color: 'black',
                      display: 'block',
                      fontWeight: 600,
                      fontSize: 16,
                      mr: 4,
                      font: 'open sans',
                    }}
                  >
                    {page.tab}
                  </Button>
                </Link>
              ))}

              {/* Commenting out the Search and More icons */}
              {/* 
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon sx={{ color: 'black' }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreIcon sx={{ color: 'black' }} />
              </IconButton>
              */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
