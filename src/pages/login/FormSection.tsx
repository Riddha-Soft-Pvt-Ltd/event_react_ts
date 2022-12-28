import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../contexts/AppContext';

import { Controller, useForm } from 'react-hook-form'
import Cookies from 'universal-cookie'
import axios from 'axios';
import { adminLoginUrl } from '../../http/endpoints/endpoints';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { toast } from 'react-toastify';


const theme = createTheme();

export default function FormSection() {
    const [value, setValue] = React.useState();

    const appContext = React.useContext(AppContext);

    const navigate = useNavigate();

    const { register, control, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit: (data: any) => void = (data) => {
        axios.post(adminLoginUrl.toString(), {
            email: data.email,
            password: data.password,
        })
            .then(function (response) {
                if (response && response.data && response.data.success === true) {
                    const cookie = new Cookies();
                    cookie.set("isLoggedIn", "true", { maxAge: 36000 }); // 60 minutes 3600s
                    cookie.set('token', response.data.data.token)
                    toast.success('Login successfully')
                    navigate("/");
                }
                else {
                    toast.error(response.data.message);
                }
            })
            .catch(function (error) {
                toast.error(error.message);
            });
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '30px',
                        background: 'rgb(239, 255, 253,0.95)',
                        borderRadius: "5px"
                    }}
                >
                    <Avatar sx={{ bgcolor: 'error.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <Controller
                            name={'email'}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        autoComplete="email"
                                        autoFocus
                                        {...register('email')}
                                        sx={{
                                            "& .MuiInputLabel-root": { color: 'black' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "black", borderWidth: '2px', borderRadius: '10px' },
                                            },
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "black"
                                                }
                                            },
                                        }}



                                    />
                                </>
                            )}
                        />
                        <Controller
                            name={'password'}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        {...register('password')}
                                        sx={{
                                            "& .MuiInputLabel-root": { color: 'black' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "black", borderWidth: '2px', borderRadius: '10px' },
                                            },
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "black"
                                                }
                                            },
                                        }}
                                    />

                                </>
                            )}
                        />
                        <Button
                            color='secondary'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, }}
                        >
                            Log In
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}