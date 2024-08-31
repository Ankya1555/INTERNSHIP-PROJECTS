import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, TextField, Typography } from '@mui/material';

const Profile = () => {
    const navigate = useNavigate();
    const signupData = JSON.parse(localStorage.getItem('SignupData')) || {};
    const [username, setUsername] = useState(signupData.username || "");
    const [password, setPassword] = useState(signupData.password || "");

    const handleUpdate = () => {
        const updatedSignupData = {
            ...signupData,
            username: username,
            password: password,
        };

        localStorage.setItem('SignupData', JSON.stringify(updatedSignupData));
        alert('Profile updated successfully!');
        navigate('/home');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ padding: 3, minWidth: '300px' }}>
                <Typography variant="h4" sx={{ mb: 2 }}>Update Profile</Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" fullWidth onClick={handleUpdate}>Update</Button>
            </Card>
        </Box>
    );
};

export default Profile;
