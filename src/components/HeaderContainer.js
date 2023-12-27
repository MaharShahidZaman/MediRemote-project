import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Toolbar, IconButton, Drawer, AppBar, MenuItem, Typography, Select, CssBaseline, Button, styled, InputBase, FormControlLabel, FormGroup, Checkbox, FormControl, } from '@mui/material'
import AccessibleIcon from '@mui/icons-material/Accessible';
import SearchIcon from '@mui/icons-material/Search';
import '../style/login.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RefreshIcon from '@mui/icons-material/Refresh';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'gray',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const HeaderContainer = (props) => {

    const [checkBox, setCheckBox] = useState({
        checkBox1: true,
        checkBox2: false,
        checkBox3: false,
        checkBox4: false,
    });

    const handleCheckBox = (e) => {
        setCheckBox({
            ...checkBox,
            [e.target.name]: e.target.checked,
        });
    }; 
    
    const [checkBoxSecond, setCheckBoxSecond] = useState({
        checkBox1: true,
        checkBox2: false,
        checkBox3: false,
        checkBox4: false,
    });

    const handleCheckBoxSecond = (e) => {
        setCheckBoxSecond({
            ...checkBoxSecond,
            [e.target.name]: e.target.checked,
        });
    }; 
    
    const [checkBoxThird, setCheckBoxThird] = useState({
        checkBox1: true,
        checkBox2: false,
        checkBox3: false,
        checkBox4: false,
    });

    const handleCheckBoxThird = (e) => {
        setCheckBoxThird({
            ...checkBoxThird,
            [e.target.name]: e.target.checked,
        });
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex', }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: '#2B5690', width: '96%' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 'auto', display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '5px' }}>
                            <AccessibleIcon sx={{ color: 'white' }} />
                        </Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
                        >
                            Patients
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '5px' }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon sx={{ color: 'gray' }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search By Name,Email"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '5px' }}>
                            <Button variant="outlined" style={{ textTransform: 'capitalize' }} sx={{ color: 'white', boxShadow: '1px 1px 3px 0 white', }}>Service Provider</Button>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '5px', }}>
                            <FormControl sx={{ m: 1, width: 100, color: 'white', }}>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    displayEmpty
                                    sx={{
                                        border: 'none', outline: 'none',
                                        textTransform: 'capitalize',
                                        color: 'white',
                                        backgroundColor: 'black',
                                        padding: '0px',
                                        height: '40px',
                                        margin: 0,
                                        padding: 0,
                                        boxShadow: '1px 1px 3px 0 white',
                                        '& .MuiSelect-icon': {
                                            color: 'white'
                                        },
                                    }}>
                                    <MenuItem sx={{ background: 'black', paddingLeft: '2px', marginRight: '2px', color: 'white' }} value="">
                                        Action
                                    </MenuItem>
                                    
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox checked={checkBox.checkBox1}
                                            onChange={handleCheckBox} name='checkBox1' sx={{  ml:'8px' }} />} label="RPM" />
                                        <FormControlLabel required control={<Checkbox checked={checkBox.checkBox2}
                                            onChange={handleCheckBox} name='checkBox2' sx={{  ml:'8px' }} />} label="CCM" />
                                        <FormControlLabel control={<Checkbox checked={checkBox.checkBox3}
                                            onChange={handleCheckBox} name='checkBox3' sx={{  ml:'8px' }} />} label="PCM" />
                                        <FormControlLabel control={<Checkbox checked={checkBox.checkBox4}
                                            onChange={handleCheckBox} name='checkBox4' sx={{ ml:'8px' }} />} label="CCCM" />
                                    </FormGroup>  
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '5px', }}>
                            <FormControl sx={{ m: 1, width: 150, color: 'white', }}>

                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    displayEmpty
                                    sx={{
                                        border: 'none', outline: 'none',
                                        textTransform: 'capitalize',
                                        color: 'white',
                                        padding: '0px',
                                        height: '40px',
                                        margin: 0,
                                        padding: 0,
                                        boxShadow: '1px 1px 3px 0 white',
                                        '& .MuiSelect-icon': {
                                            color: 'white'
                                        },
                                        '&:hover': {
                                            backgroundColor: 'black',
                                        },
                                    }} >
                                    <MenuItem sx={{ backgroundColor: 'black', paddingLeft: '2px', marginRight: '2px', color: 'white' }} value="">
                                        Patient Type
                                    </MenuItem>

                                    <FormGroup sx={{ backgroundColor: 'black', }}>
                                        <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox1}
                                            onChange={handleCheckBoxSecond} name='checkBox1' sx={{ color: 'white', ml:'8px' }} />} label="RPM" sx={{ color: 'white' }} />
                                        <FormControlLabel required control={<Checkbox checked={checkBoxSecond.checkBox2}
                                            onChange={handleCheckBoxSecond} name='checkBox2' sx={{ color: 'white', ml:'8px' }} />} label="CCM" sx={{ color: 'white' }} />
                                        <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox3}
                                            onChange={handleCheckBoxSecond} name='checkBox3' sx={{ color: 'white', ml:'8px' }} />} label="PCM" sx={{ color: 'white' }} />
                                        <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox4} name='checkBox4'
                                            onChange={handleCheckBoxSecond} sx={{ color: 'white', ml:'8px' }} />} label="CCCM" sx={{ color: 'white' }} />
                                    </FormGroup>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '5px' }}>
                            <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', padding: '2px 5px', backgroundColor: 'black' }}><Box sx={{ marginRight: '5px', mt: '3px' }}><PersonAddIcon /></Box> Add</Button>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, ml: '3px', mr: '2px' }}>
                            <FormControl
                                sx={{
                                    m: 1,
                                    width: 110,
                                    color: 'white',
                                    // backgroundColor: 'black', 
                                }} >
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    displayEmpty
                                    sx={{
                                        border: 'none', outline: 'none',
                                        textTransform: 'capitalize',
                                        color: 'white',
                                        padding: '0px',
                                        height: '40px',
                                        margin: 0,
                                        padding: 0,
                                        boxShadow: '1px 1px 3px 0 white',
                                        '& .MuiSelect-icon': {
                                            color: 'white'
                                        },
                                        '&:hover': {
                                            // backgroundColor: 'black',
                                        },
                                    }}  >
                                    <MenuItem sx={{ backgroundColor: 'black', paddingLeft: '2px', marginRight: '2px', color: 'white' }} value="">
                                        Filter By
                                    </MenuItem>
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox1} name='checkBox1'
                                            onChange={handleCheckBoxThird} sx={{ ml:'8px' }} />} label="RPM"  />
                                        <FormControlLabel required control={<Checkbox checked={checkBoxThird.checkBox2} name='checkBox2'
                                            onChange={handleCheckBoxThird} sx={{ ml:'8px' }} />} label="CCM"  />
                                        <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox3} name='checkBox3'
                                            onChange={handleCheckBoxThird} sx={{ ml:'8px' }} />} label="PCM" />
                                        <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox4} name='checkBox4'
                                            onChange={handleCheckBoxThird} sx={{  ml:'8px' }} />} label="CCCM" />
                                    </FormGroup>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, ml: '3px', mr: '5px' }}>
                            <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', backgroundColor: '#168701' }}><RefreshIcon /></Button>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, ml: '3px', mr: '3' }}>
                            <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', backgroundColor: '#4A7FC4' }}><FileDownloadIcon /></Button>
                        </Box>

                    </Toolbar>
                </AppBar>

                <nav>
                    <Drawer variant='temporary' onClick={handleDrawerToggle} open={mobileOpen}  >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', gap: '1rem', px: '1rem', py: '1rem', backgroundColor: '#2B5690',
                            height:'100%'

                        }}>
                            <Box className='mainHeadsm' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', p: '5px',mt:'2rem' }}>
                            <Box sx={{ mx: '5px' }}>
                                <AccessibleIcon sx={{ color: 'white' }} />
                            </Box>
                                <Typography component='div' sx={{ color: 'white' }} variant='h5'>
                                    Patient
                                </Typography>
                            </Box>

                            <Box sx={{ mx: '5px' }}>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon sx={{ color: 'gray' }} />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search By Name,Email"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Box>

                            <Box sx={{ mx: '5px', display:'flex', gap:'0.5rem' }}>
                                <Button variant="outlined" style={{ textTransform: 'capitalize' }} sx={{ color: 'white', boxShadow: '1px 1px 3px 0 white', }}>Service Provider</Button>   

                            </Box>

                            <Box sx={{ mx: '5px', }}>
                            <Select
                                        value={selectedOption}
                                        onChange={handleChange}
                                        displayEmpty
                                        sx={{
                                            border: 'none', outline: 'none',
                                            textTransform: 'capitalize',
                                            color: 'white',
                                            padding: '0px',
                                            height: '40px',
                                            margin: 0,
                                            padding: 0,
                                            boxShadow: '1px 1px 3px 0 white',
                                            '& .MuiSelect-icon': {
                                                color: 'white'
                                            },
                                            '&:hover': {
                                                backgroundColor: 'black',
                                            },
                                        }}  >
                                        <MenuItem sx={{ backgroundColor: 'black', paddingLeft: '2px', marginRight: '2px', color: 'white' }} value="">
                                            Patient Type
                                        </MenuItem>
                                        <FormGroup sx={{ backgroundColor: 'black', }}>
                                            <FormControlLabel control={<Checkbox checked={checkBox.checkBox1} name='checkBox1'
                                                onChange={handleCheckBox} sx={{ color: 'white' }} />} label="RPM" sx={{ color: 'white' }} />
                                            <FormControlLabel required control={<Checkbox checked={checkBox.checkBox2} name='checkBox2'
                                                onChange={handleCheckBox} sx={{ color: 'white' }} />} label="CCM" sx={{ color: 'white' }} />
                                            <FormControlLabel control={<Checkbox checked={checkBox.checkBox3} name='checkBox3'
                                                onChange={handleCheckBox} sx={{ color: 'white' }} />} label="PCM" sx={{ color: 'white' }} />
                                            <FormControlLabel control={<Checkbox checked={checkBox.checkBox4} name='checkBox4'
                                                onChange={handleCheckBox} sx={{ color: 'white' }} />} label="CCCM" sx={{ color: 'white' }} />
                                        </FormGroup>
                                    </Select>
                            </Box>

                            <Box sx={{ mx: '5px', display:'flex', gap:'0.5rem' }}>

                            <Select
                                        value={selectedOption}
                                        onChange={handleChange}
                                        displayEmpty
                                        sx={{
                                            border: 'none', outline: 'none',
                                            textTransform: 'capitalize',
                                            color: 'white',
                                            padding: '0px',
                                            height: '40px',
                                            margin: 0,
                                            padding: 0,
                                            boxShadow: '1px 1px 3px 0 white',
                                            '& .MuiSelect-icon': {
                                                color: 'white'
                                            },
                                            '&:hover': {
                                                backgroundColor: 'black',
                                            },
                                        }} >
                                        <MenuItem sx={{ backgroundColor: 'black', paddingLeft: '2px', marginRight: '2px', color: 'white' }} value="">
                                            Filter By
                                        </MenuItem>
                                        <FormGroup sx={{ backgroundColor: 'black', }}>
                                            <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox1} name='checkBox1'
                                                onChange={handleCheckBoxSecond} sx={{ color: 'white' }} />} label="RPM" sx={{ color: 'white' }} />
                                            <FormControlLabel required control={<Checkbox checked={checkBoxSecond.checkBox2} name='checkBox2'
                                                onChange={handleCheckBoxSecond} sx={{ color: 'white' }} />} label="CCM" sx={{ color: 'white' }} />
                                            <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox3} name='checkBox3'
                                                onChange={handleCheckBoxSecond} sx={{ color: 'white' }} />} label="PCM" sx={{ color: 'white' }} />
                                            <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox4} name='checkBox4'
                                                onChange={handleCheckBoxSecond} sx={{ color: 'white' }} />} label="CCCM" sx={{ color: 'white' }} />
                                        </FormGroup>
                                    </Select>

                            </Box>

                            <Box sx={{ mx: '5px', display:'flex', gap:'0.5rem' }}>

                            <Select
                                        value={selectedOption}
                                        onChange={handleChange}
                                        displayEmpty
                                        sx={{
                                            border: 'none', outline: 'none',
                                            textTransform: 'capitalize',
                                            color: 'white',
                                            padding: '0px',
                                            height: '40px',
                                            margin: 0,
                                            padding: 0,
                                            boxShadow: '1px 1px 3px 0 white',
                                            '& .MuiSelect-icon': {
                                                color: 'white'
                                            },

                                            backgroundColor: 'black',
                                        }}

                                    >
                                        <MenuItem sx={{ backgroundColor: 'black', paddingLeft: '2px', marginRight: '2px', color: 'white' }} value="">
                                            Action
                                        </MenuItem>
                                        <FormGroup sx={{ backgroundColor: 'black', }}>
                                            <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox1} name='checkBox1'
                                                onChange={handleCheckBoxThird} sx={{ color: 'white' }} />} label="RPM" sx={{ color: 'white' }} />
                                            <FormControlLabel required control={<Checkbox checked={checkBoxThird.checkBox2} name='checkBox2'
                                                onChange={handleCheckBoxThird} sx={{ color: 'white' }} />} label="CCM" sx={{ color: 'white' }} />
                                            <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox3} name='checkBox3'
                                                onChange={handleCheckBoxThird} sx={{ color: 'white' }} />} label="PCM" sx={{ color: 'white' }} />
                                            <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox4} name='checkBox4'
                                                onChange={handleCheckBoxThird} sx={{ color: 'white' }} />} label="CCCM" sx={{ color: 'white' }} />
                                        </FormGroup>
                                    </Select>

                                    <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', padding: '2px 5px', backgroundColor: 'black' }}><Box sx={{ marginRight: '5px', mt: '3px' }}><PersonAddIcon /></Box> Add</Button>
                            
                            </Box>

                            <Box sx={{ ml: '3px', mr: '2px', mb:'2rem', gap:'0.5rem', display:'flex' }}>
                            
                                <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', backgroundColor: '#168701' }}><RefreshIcon /></Button>
                                <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', backgroundColor: '#4A7FC4' }}><FileDownloadIcon /></Button>
                            </Box>

                        </Box>
                    </Drawer>
                </nav>
            </Box>
        </>
    )
}