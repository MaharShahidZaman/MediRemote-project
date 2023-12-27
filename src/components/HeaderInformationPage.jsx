import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { Avatar, Drawer } from '@mui/material';

export default function HeaderInformationPage() {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    return (
        <Box sx={{ flexGrow: 1, ml: '4.5rem' }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 'auto', display: { md: 'none' } }}
                    >
                        <MenuIcon sx={{ color: 'black' }} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1, textTransform: 'uppercase', color: '#4674A5', fontSize: '14px', fontWeight: 'bold' }}>
                        Sohail parekh internal medicine
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <IconButton>
                            <SyncOutlinedIcon />
                            <NotificationsOutlinedIcon />
                        </IconButton>
                    </Box>

                    <Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' }, color: 'black' }}>
                            <Typography>
                                mahar@gmail.com
                            </Typography>
                            <Typography sx={{ color: 'gray', ml: '6rem' }}>
                                admin
                            </Typography>
                        </Box>

                    </Box>

                    <Box sx={{ ml: '5px', display: { xs: 'none', md: 'block' } }}>
                        <Avatar>S</Avatar>
                    </Box>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer variant='temporary' onClick={handleDrawerToggle} open={mobileOpen}  >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', gap: '1rem', px: '1rem', py: '1rem', backgroundColor: '#2B5690',
                        height: '100%'

                    }}>
                        <Box >
                            <IconButton>
                                <SyncOutlinedIcon sx={{ color: 'white' }} />
                                <NotificationsOutlinedIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ ml: '5px', }}>
                            <Avatar>S</Avatar>

                        </Box>
                        <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase', color: 'white', fontSize: '14px', fontWeight: 'bold' }}>
                            Sohail parekh internal medicine
                        </Typography>
                        <Box sx={{ color: 'white' }}>
                            <Typography>
                                mahar@gmail.com
                            </Typography>
                            <Typography sx={{ color: 'lightgray', textAlign: 'center' }}>
                                admin
                            </Typography>
                        </Box>
                        <Box>

                        </Box>

                    </Box>
                </Drawer>
            </nav>
        </Box>
    );
}