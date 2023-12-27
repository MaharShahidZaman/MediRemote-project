import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from './image/logo.png.webp'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box component='img' src={logo} sx={{ width: '150px', height: '30px', }} />
          </IconButton>
        
        <Box sx={{ml:'auto'}}>
         <Button><Link to={'/'} className='linkStyle'> Home </Link></Button>
          <Button><Link to={'/loginform'} className='linkStyle'> Login </Link></Button>
          <Button><Link to={'/signUpForm'} className='linkStyle'> Sign Up </Link></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
