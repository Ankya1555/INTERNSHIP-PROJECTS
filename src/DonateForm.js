import React from 'react';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

export default function DonateForm() {
  const [donationType, setDonationType] = React.useState('');
  const [name, setName] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleDonationTypeChange = (event) => {
    setDonationType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Donation Type:', donationType);
    console.log('Name:', name);
    console.log('Contact Number:', contactNumber);
    console.log('Address:', address);
  };

  return (
    <Container>
      <Box sx={{ mt: 4, p: 2, border: '1px solid grey', borderRadius: '8px' }}>
        <Typography variant="h6">Donate Now</Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Donation Type</InputLabel>
            <Select
              value={donationType}
              onChange={handleDonationTypeChange}
            >
              <MenuItem value="marriage">Marriage</MenuItem>
              <MenuItem value="blood">Blood</MenuItem>
              <MenuItem value="clothes">Clothes</MenuItem>
              <MenuItem value="cycle">Cycle</MenuItem>
              <MenuItem value="computer">Computer</MenuItem>
              <MenuItem value="toys">Toys</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Your Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label="Your Address"
            multiline
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
