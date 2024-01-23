import { Box, Paper, TextField, styled, Button, InputAdornment, Typography, Link, Grid } from '@mui/material'
import React, { useState } from 'react'
import '../style/login.css'
import CopyrightIcon from '@mui/icons-material/Copyright';
import IconButton from '@mui/material/IconButton';
import logoImg from '../logo/logo.png.webp'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Loginform = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailChecker, setEmailChecker] = useState(false);
  const [show, setShow] = useState(true)

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.0.145/tasks/api/Patient_L/Login?UserEmail=${email}&UserPassword=${password}`)
      //  console.log(response.data.result) 
      if (response.data.result.role === null) {
        navigate(`/user/${response.data.result.user_ID
          }`)
      } else {
        navigate('/')
      }
    } catch (error) {
      alert('Please first Sign Up')
    }

  }

  const handleClickShowPassword = () => {
    setShow(() => !show)
  }

  let passwordValidation = password.length >= 4;

  // Email Validation

  function validateEmail(ourEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(ourEmail)) {
      setEmailChecker(true)
    }
    else {
      setEmailChecker(false)
    }
  }
  const targetEmail = (e) => {
    setEmail(e.target.value)
    validateEmail(email)
  }

  const targetPassword = (e) => {
    setPassword(e.target.value)

  }

  const handleForm = (e) => {
    e.preventDefault()
    fetchData()
    setEmailChecker(false)
  }

  return (
    <>
      <Grid container sx={{ boxShadow: '2px 2px 5px 0 gray', borderRadius: '1rem', margin: '1rem auto', ml: '10%', width: '88%', minHeight: '300px', }}>
        <Grid container item justifyContent={'center'} flexDirection={'column'} lg={5} md={12}>
          <ContainerForm>
            <Box component='img' src={logoImg} sx={{ width: '150px', height: '40px' }} />
            <form className='formStyle'>
              <TextField
                error={emailChecker === false ? true : false}
                helperText={emailChecker === false ? 'You must enter email' : emailChecker === false ?'Enter Valid Email' : ''} value={email} onChange={targetEmail} type='email' label='Email' />

              <TextField error={password.length >= 4 ? false : true} helperText={password.length === 0 ? 'Enter Password' : password.length <=4 ? 'Must be 5 Charecture' : ''} value={password} onChange={targetPassword} type={show ? 'password' : 'text'} label='Password'
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
              <Button onClick={handleForm} disabled={passwordValidation && emailChecker == true ? false : true} type='submit' sx={{ borderRadius: '20px', backgroundColor: 'rgb(185, 185, 185)', color: 'gray' }} variant='contained'>Login</Button>
              <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2px' }}>
                <Link href='#' sx={{ color: '#37D5EF' }} underline='none'>Forgot your password</Link>
              </Typography>
            </form>
          </ContainerForm>
          <WarningBox>
            <Box sx={{ mt: '3px', mr: '15px' }}>
              <InfoOutlinedIcon sx={{ color: '#37D5EF', width: '20px', height: '20px' }} />
            </Box>
            <p className='warningDetail'>Incase of any issues & concerns please contact Adminstrator.</p>
          </WarningBox>

        </Grid>

        <Grid container item lg={7} md={12} sx={{
          justifyContent: 'center', alignItems: 'center', background: '#01619B',
        }} className='rightContainer'>
          <Grid item sx={{ maxWidth: '40%', margin: '4rem' }} className='right_side'>
            <h1>Welcome to the <span>MEDIREMOTE</span></h1>
            <Box className='detail'>
              <p>A Brand of E-Healthcare Systems and Wireless Cammunications. Current and Future Challenges <span>Copyright <CopyrightIcon sx={{ fontSize: 'inherit', marginTop: 'auto' }} /> 2023 MEDIREMOTE. All Rights Reserved.</span> </p>
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}

// CUSTOM STYLE

const ContainerForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '50px 15px',
  padding: '5px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem'

}))

const WarningBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E8F4FD',
  padding: '4px 5px',
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '5px',
  marginBottom: '45px',
  borderRadius: '6px'
}))