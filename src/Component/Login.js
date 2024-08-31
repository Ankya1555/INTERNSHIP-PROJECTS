import React, { useState } from 'react';
import { Box, Card, Button, Checkbox, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAuth }) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const SignupData = JSON.parse(localStorage.getItem('SignupData'));

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const SubmitForm = (e) => {
        e.preventDefault();

        if (Username === SignupData?.username && Password === SignupData?.password) {
            localStorage.setItem('Auth', true);
            setAuth(true);  // Set auth state to true
            navigate('/home');
        } else {
            alert('Invalid Username or Password');
        }
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ minWidth: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, m: 'auto', gap: 2 }}>
                <Typography sx={{ fontSize: 35, fontWeight: 500 }}>Sign In</Typography>
                <TextField id="username" label="Username" variant="outlined" fullWidth onChange={handleUsername} value={Username} size='small' />
                <TextField id="password" label="Password" variant="outlined" fullWidth type="password" onChange={handlePassword} value={Password} size='small' />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox size='small' />
                    <Typography>I am not a Robot</Typography>
                </Box>
                <Button onClick={SubmitForm} variant="contained">Sign In</Button>
                <Typography sx={{ mt: 2 }}>Don't have an account?</Typography>
                <Button onClick={handleSignup} variant="outlined">Sign Up</Button>
            </Card>
        </Box>
    );
}
