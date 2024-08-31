import React, { useState } from 'react';
import { Box, Button, Card, Checkbox, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const SubmitForm = (e) => {
        e.preventDefault();

        const SignupData = {
            username: Username,
            email: Email,
            password: Password,
        };

        localStorage.setItem("SignupData", JSON.stringify(SignupData));
        console.log('User signed up:', SignupData);

        navigate('/login'); // Redirect to login after signup
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ minWidth: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, m: 'auto', padding: 5, gap: 2 }}>
                <Typography sx={{ fontSize: 35, fontWeight: 500, mb: 2 }}>Sign Up</Typography>
                <TextField id="Username" label="Username" variant="outlined" fullWidth onChange={handleUsername} value={Username} size='small' />
                <TextField id="Email" label="Email" variant="outlined" fullWidth onChange={handleEmail} value={Email} size='small' />
                <TextField id="Password" label="Password" variant="outlined" fullWidth type="password" onChange={handlePassword} value={Password} size='small' />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox size='small' />
                    <Typography>I am not a Robot</Typography>
                </Box>
                <Button onClick={SubmitForm} variant="contained">Sign Up</Button>
            </Card>
        </Box>
    );
};
