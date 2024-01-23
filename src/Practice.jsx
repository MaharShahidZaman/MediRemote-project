import { Grid, Paper, Typography, Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useEffect, useState } from 'react'

export const Practice = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [emailChacker, setEmailChecker] = useState(false);

  const emailValidation = (ourEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    { emailRegex.test(ourEmail) ? setEmailChecker(true) : setEmailChecker(false) }
}

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const [data, setdata] = useState({
    password:'',
    email:''
  })

  const handleForm = (e)=>{
    e.preventDefault()
    setdata({
      password:'',
      email:''
    })
  }

  useEffect(()=>{
    handleForm()
  },)
  const targetValues = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
    emailValidation(data.email)
  }
  // console.log(data)

  return (
    <>
      <Paper elevation={12} sx={{ width: '85%', borderRadius: '1.5rem', m: '2rem auto' }}>

        <Grid container>
          <Grid item lg={5}>
            <TextField
              id="outlined-multiline-flexible"
              helperText={emailChacker == true ? '' : 'Email Required'}
              label="Email"
              required
              name='email'
              value={data.email}
              onChange={targetValues}
              error={emailChacker == true ? false : true}
            />
            <TextField onChange={targetValues} name='password' value={data.password} type={showPassword ? 'password' : 'text'}
              error= {data.password.length <= 4 ? true : false}
              id="outlined-basic" label="Password*" variant="outlined"
              helperText={data.password.length === 0 ? 'Password requerd' : data.password.length <= 4 ? 'Password Must Be 5 Chracture' : ''}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant='contained' disabled={emailChacker && data.password.length > 4 ? false : true} onClick={handleForm}>Submit</Button>
          </Grid>
          <Grid item lg={7} sx={{ backgroundColor: '#2B5690' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: '8rem 8rem' }}>
              <Typography variant='h4' sx={{ color: 'white' }}>
                Welcome to the mediremote
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Paper>
    </>
  )
}
