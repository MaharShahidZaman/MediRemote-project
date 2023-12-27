import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, List, CssBaseline, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Heart from './image/Heart.png'
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccessibleIcon from '@mui/icons-material/Accessible';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import { DataGridTable } from './DataGrid';
import { HeaderContainer } from './HeaderContainer';
import { UserScreen } from './UserScreen';
import { Home } from './Home';
import { Loginform } from './loginForm';
import { SignUpForm } from './signUpForm';
import { Link } from 'react-router-dom';


export default function SideBar() {

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [drawerWidth, setDrawerWidth] = useState(240);

    const [menuData, setMenuData] = useState('');

    // const handlebgcolor = ()=>{
    //     setMenuData(true)
    // }


    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        backgroundColor: 'black',
    });

    const closedMixin = (theme) => ({
        width: drawerWidth,

        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        backgroundColor: 'rgb(34, 31, 31)',

    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box component='img' src={Heart} sx={{ width: '50px', height: '50px', }} />
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding component={Link} to='/signUpForm' sx={{ display: 'block' }}>
                        <ListItemButton
                        onClick={()=> setMenuData('/signUpForm')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor: menuData === '/signUpForm' ? 'rgb(71, 71, 71)' : 'inherit'
                            }}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center', }}>
                                <IconButton>
                                    <DashboardIcon sx={{ color: 'white' }} />
                                </IconButton>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding  component={Link} to='/loginform' sx={{ display: 'block' }}>
                        <ListItemButton
                        onClick={()=> setMenuData('/loginform')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor: menuData === '/loginform' ? 'rgb(71, 71, 71)' : 'inherit'  
                            }}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center', }}>

                                <DashboardIcon sx={{ color: 'white' }} />

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem component={Link} to='/patientinfo' disablePadding sx={{ display: 'block'  }}>
                        <ListItemButton
                            onClick={()=> setMenuData('/patientinfo')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor: menuData === '/patientinfo' ? 'rgb(71, 71, 71)' : 'inherit'
                            }} >   
                                <ListItemIcon sx={{ justifyContent: 'center', }}>

                                    <GroupWorkIcon sx={{ color: 'white' }} />

                                </ListItemIcon>
                            
                        </ListItemButton>
                    </ListItem>

                    <ListItem component={Link} to='/' disablePadding sx={{ display: 'block'  }}>
                        <ListItemButton
                            onClick={()=> setMenuData('/')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor: menuData === '/' ? 'rgb(71, 71, 71)' : 'inherit'
                            }} >
                           
                                <ListItemIcon sx={{ justifyContent: 'center', }}>

                                    <GroupWorkIcon sx={{ color: 'white' }} />

                                </ListItemIcon>
                            
                        </ListItemButton>
                    </ListItem> 

                    <ListItem disablePadding component={Link} to='/datagrid' sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={()=> setMenuData('/datagrid')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor: menuData === '/datagrid' ? 'rgb(71, 71, 71)' : 'inherit'
                            }}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center', }}>

                                <AccessibleIcon sx={{ color: 'white' }} />

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding component={Link} to='/user' sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={()=> setMenuData('/user')}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor: menuData === '/user' ? 'rgb(71, 71, 71)' : 'inherit'
                            }}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center', }}>

                                <AssessmentIcon sx={{ color: 'white' }} />

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                        // onClick={handlebgcolor}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                // backgroundColor: menuData === true ? 'rgb(71, 71, 71)' : 'inherit'
                            }}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center', }}>

                                <NotificationsIcon sx={{ color: 'white' }} />

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            // onClick={handlebgcolor}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                // backgroundColor: menuData === true ? 'rgb(71, 71, 71)' : 'inherit'
                            
                            }}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center', }}>

                                <PersonPinCircleIcon sx={{ color: 'white' }} />

                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            // onClick={handlebgcolor}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                // backgroundColor: menuData === true ? 'rgb(71, 71, 71)' : 'inherit'
                            }}
                        >
                                <ListItemIcon sx={{ justifyContent: 'center', }}>

                                    <PeopleIcon sx={{ color: 'white' }} />

                                </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                </List>

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {/* {menuData == "/datagrid" && <DataGridTable />}
                {menuData == "/user" && <UserScreen />}
                {menuData == "/signUpForm" && <SignUpForm />}
                {menuData == "/loginform" && <Loginform />}
                {menuData == "/" && <Home />} */}

            </Box>
        </Box>
    );
}
