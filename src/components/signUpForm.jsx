import { Box, Grid, Paper, TextField, InputAdornment, Typography, Link, Button } from '@mui/material'
import React, { useState } from 'react'
import logo from './image/logo.png.webp'
import '../style/login.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export const SignUpForm = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true)
    const handleClickShowPassword = () => {
        setShow(() => !show)
    }

    const [showConfirm, setShowConfirm] = useState(true)
    const handleClickShowConfirmPassword = () => {
        setShowConfirm(() => !showConfirm)
    }

    const [userData, setUserData] = useState(
        {
            first_Name: '',
            last_Name: '',
            user_Email: '',
            user_Password: '',
            user_Contact: '',
            user_ConfirmPassword: ''
        }
    )

    const [emailChecker, setEmailChecker] = useState(false)

    // target value

    const targetTextField = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });

        emailValidation(userData.user_Email);

    }

    const [error, setError] = useState('')

    // Handle form

    const handleForm = (e) => {
        e.preventDefault()
        signUpUser()
        setUserData(
            {
                first_Name: '',
                last_Name: '',
                user_Email: '',
                user_Password: '',
                user_Contact: '',
                user_ConfirmPassword: ''

            })
        navigate('/')

    }

    const handleCancelForm = () => {
        setUserData({
            first_Name: '',
            last_Name: '',
            user_Email: '',
            user_Password: '',
            user_Contact: '',
            user_ConfirmPassword: ''
        })
    }

    // Email Validations

    const emailValidation = (ourEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        { emailRegex.test(ourEmail) ? setEmailChecker(true) : setEmailChecker(false) }
    }


    // signUp User API

    const signUpUser = async () => {
        try {
            await axios.post("http://192.168.0.145/tasks/api/Patient_L/CreateLogin", userData)

        } catch (error) {
            setError(error.message)
            alert('ERROR')
        }
    }

    return (
        <>
            <Box>
                <Typography variant='h4' align='center' mt={'10px'} >{error}</Typography>
            </Box>

            <Paper elevation={12} sx={{ m: '15px auto', width: '88%', ml: '8%' }}>
                <Grid container>
                    <Grid item lg={6} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#01619B' }}>
                        <Box sx={{ m: '125px auto', width: '60%' }}>
                            <Typography variant='h4' sx={{ color: 'rgb(241, 237, 237)' }}>
                                Welcome to the < br /> <span style={{ textTransform: 'uppercase' }}>Mediremote</span>
                            </Typography>

                            <Box sx={{ color: 'rgb(241, 237, 237)', flexWrap: 'wrap', fontSize: '12px' }}>
                                A Brand of E-Healthcare Systems and Wireless Communications. Current and Future Challenges
                            </Box>
                            <Box sx={{ color: 'rgb(241, 237, 237)', fontSize: '12px' }}>
                                Copyright © 2023 MEDIREMOTE. All Rights Reserved
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={12} sx={{ display: 'flex', flexDirection: 'column' }} >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', m: '125px 0' }}>
                            <Box component='img' src={logo} sx={{ width: '150px', height: '30px', }} />
                            <Typography variant='h6' sx={{ color: '#01619B', fontSize: '18px', fontWeight: 'bold', mt: '8px', mb: '0px' }}>
                                Sign-Up Here!
                            </Typography>
                            <Box sx={{ fontSize: '10px', fontWeight: 'bold', color: 'gray' }}>
                                Enter Sign up information for your acount
                            </Box>
                            <Grid container justifyContent={'space-evenly'} sx={{ mt: '10px', mb: '10px', }}>

                                <Grid item lg={5}>
                                    <Box sx={{ mb: '5px' }}>
                                        <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#01619B' }}>
                                            Step 1: Identify Your-Self
                                        </Typography>
                                    </Box>
                                    <form className='signForm'>
                                        <TextField value={userData.first_Name} onChange={targetTextField} name='first_Name' id="outlined-basic" label="First Name*" variant="outlined" />
                                        <TextField onChange={targetTextField} value={userData.last_Name} name='last_Name' id="outlined-basic" label="Last Name*" variant="outlined" />
                                        <TextField onChange={targetTextField} name='user_Contact' value={userData.user_Contact} id="outlined-basic" label="Phone Number*" variant="outlined" />
                                    </form>
                                    <Box sx={{ mt: '8px' }}>
                                        <Link className='forgotPassword' href='#' sx={{ color: '#01619B', fontWeight: '400', mt: '10px' }} underline='none'>Forgot your password</Link>
                                    </Box>

                                </Grid>

                                <Grid item lg={5}>
                                    <Box sx={{ mb: '5px' }}>
                                        <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#01619B' }}>
                                            Step 2: Choose Username Password
                                        </Typography>
                                    </Box>
                                    <form className='signForm'>
                                        <TextField onChange={targetTextField} name='user_Email' value={userData.email} error={emailChecker === false ? true : false} type='email' id="outlined-basic" label="User Email*" variant="outlined" />
                                        <TextField onChange={targetTextField} name='user_Password' value={userData.password} type={showConfirm ? 'password' : 'text'}
                                            error={userData.user_Password.length <= 4 ? true : false}
                                            id="outlined-basic" label="Password*" variant="outlined"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='start'>
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowConfirmPassword}
                                                            edge="end"
                                                        >
                                                            {showConfirm ? <VisibilityOff /> : <VisibilityIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <TextField onChange={targetTextField} name='user_ConfirmPassword' value={userData.cpassword} type={show ? 'password' : 'text'}
                                            error={userData.user_ConfirmPassword !== userData.user_Password ? true : userData.user_ConfirmPassword.length <= 4 ? true : false}
                                            id="outlined-basic" label="Confirm Password*" variant="outlined"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='start'>
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            edge="end"
                                                        >
                                                            {show ? <VisibilityOff /> : <VisibilityIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }} />
                                    </form>
                                    <Box sx={{ mt: '8px' }}>
                                        <Link className='forgotPassword1' href='#' sx={{ color: '#01619B', fontWeight: '400', mt: '10px' }} underline='none'>Forgot your password</Link>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', mt: '8px' }}>

                                        <Button onClick={handleCancelForm} variant="contained" sx={{ padding: '7px 12px', color: 'white', borderRadius: '20px', background: 'black' }}>Cancel</Button>

                                        <Button onClick={handleForm}
                                            disabled={userData.user_Password.length && userData.user_ConfirmPassword.length && emailChecker === true ? false : true} variant="contained" sx={{ padding: '7px 12px', color: 'white', borderRadius: '20px', backgroundColor: 'black' }}>Create
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
