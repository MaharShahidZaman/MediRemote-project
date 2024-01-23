import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Toolbar, IconButton, Drawer, AppBar, MenuItem, Typography, Select, CssBaseline, Button, styled, InputBase, FormControlLabel, FormGroup, Checkbox, FormControl, Modal, Grid, InputAdornment, TextField, Menu, Switch, } from '@mui/material'
import AccessibleIcon from '@mui/icons-material/Accessible';
import SearchIcon from '@mui/icons-material/Search';
import '../style/login.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RefreshIcon from '@mui/icons-material/Refresh';
import logo from './image/logo.png.webp'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

//   Modal

const style = {
    width: '53%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    height: '96%',
    // overflowY:'auto',
};



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

export const HeaderContainer = ({ data }) => {



    //Modal TextField States and Target 

    const [modalData, setModalData] = useState({
        fname: '',
        lname: '',
        email: '',
        gender: '',
        date: '',
        phone: '',
        provider: '',
        city: '',
        rpm: '',
        daction: '',
        dreaction: '',
        assistant: '',
        zipcode: '',
        reading: '',
        // select: '',
        address: '',

    })

    const empty = () => {
        setModalData({
            fname: '',
            lname: '',
            email: '',
            gender: '',
            date: '',
            phone: '',
            provider: '',
            city: '',
            rpm: '',
            daction: '',
            dreaction: '',
            assistant: '',
            zipcode: '',
            reading: '',
            // select: '',
            address: '',
        })
    }
    // console.log(modalData)

    const targetModalValues = (e) => {
        setModalData({
            ...modalData,
            [e.target.name]: e.target.value,
        });
    }

    const handleForm = (e) => {
        e.preventDefault()
       
        data(sendData)
        handleClose()
        empty()
    }

    const sendData = {
        fname: `${modalData.fname}`,
        lname: `${modalData.lname}`,
        email: `${modalData.email}`,
        gender: `${modalData.gender}`,
        date: `${modalData.date}`,
        phone: `${modalData.phone}`,
        provider: `${modalData.provider}`,
        city: `${modalData.city}`,
        rpm: `${modalData.rpm}`,
        daction: `${modalData.daction}`,
        dreaction: `${modalData.dreaction}`,
        assistant: `${modalData.assistant}`,
        zipcode: `${modalData.zipcode}`,
        reading: `${modalData.reading}`,
        // select: '',
        address: `${modalData.address}`,
    }
    //  console.log(sendData)

    // icon select options

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    // console.log(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloses = () => {
        setAnchorEl(null);
    };

    const handleOptionSelect = (option) => {
        setSelectedItem(option);
        handleCloses();
    };


    //  chose file button
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        // Handle the selected file logic here
        // console.log('Selected File:', selectedFile);
    };

    //   select gender
    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    // Modal states
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    // const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // const container = window !== undefined ? () => window().document.body : undefined;

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
                                            onChange={handleCheckBox} name='checkBox1' sx={{ ml: '8px' }} />} label="RPM" />
                                        <FormControlLabel required control={<Checkbox checked={checkBox.checkBox2}
                                            onChange={handleCheckBox} name='checkBox2' sx={{ ml: '8px' }} />} label="CCM" />
                                        <FormControlLabel control={<Checkbox checked={checkBox.checkBox3}
                                            onChange={handleCheckBox} name='checkBox3' sx={{ ml: '8px' }} />} label="PCM" />
                                        <FormControlLabel control={<Checkbox checked={checkBox.checkBox4}
                                            onChange={handleCheckBox} name='checkBox4' sx={{ ml: '8px' }} />} label="CCCM" />
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
                                            onChange={handleCheckBoxSecond} name='checkBox1' sx={{ color: 'white', ml: '8px' }} />} label="RPM" sx={{ color: 'white' }} />
                                        <FormControlLabel required control={<Checkbox checked={checkBoxSecond.checkBox2}
                                            onChange={handleCheckBoxSecond} name='checkBox2' sx={{ color: 'white', ml: '8px' }} />} label="CCM" sx={{ color: 'white' }} />
                                        <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox3}
                                            onChange={handleCheckBoxSecond} name='checkBox3' sx={{ color: 'white', ml: '8px' }} />} label="PCM" sx={{ color: 'white' }} />
                                        <FormControlLabel control={<Checkbox checked={checkBoxSecond.checkBox4} name='checkBox4'
                                            onChange={handleCheckBoxSecond} sx={{ color: 'white', ml: '8px' }} />} label="CCCM" sx={{ color: 'white' }} />
                                    </FormGroup>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: '5px' }}>
                            <Button onClick={handleOpen} variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', padding: '2px 5px', backgroundColor: 'black' }}><Box sx={{ marginRight: '5px', mt: '3px' }}><PersonAddIcon /></Box> Add</Button>
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
                                            onChange={handleCheckBoxThird} sx={{ ml: '8px' }} />} label="RPM" />
                                        <FormControlLabel required control={<Checkbox checked={checkBoxThird.checkBox2} name='checkBox2'
                                            onChange={handleCheckBoxThird} sx={{ ml: '8px' }} />} label="CCM" />
                                        <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox3} name='checkBox3'
                                            onChange={handleCheckBoxThird} sx={{ ml: '8px' }} />} label="PCM" />
                                        <FormControlLabel control={<Checkbox checked={checkBoxThird.checkBox4} name='checkBox4'
                                            onChange={handleCheckBoxThird} sx={{ ml: '8px' }} />} label="CCCM" />
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
                            height: '100%'

                        }}>
                            <Box className='mainHeadsm' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', p: '5px', mt: '2rem' }}>
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

                            <Box sx={{ mx: '5px', display: 'flex', gap: '0.5rem' }}>
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

                            <Box sx={{ mx: '5px', display: 'flex', gap: '0.5rem' }}>

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

                            <Box sx={{ mx: '5px', display: 'flex', gap: '0.5rem' }}>

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

                                <Button onClick={handleOpen} variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', padding: '2px 5px', backgroundColor: 'black' }}><Box sx={{ marginRight: '5px', mt: '3px' }}><PersonAddIcon /></Box> Add</Button>

                            </Box>

                            <Box sx={{ ml: '3px', mr: '2px', mb: '2rem', gap: '0.5rem', display: 'flex' }}>

                                <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', backgroundColor: '#168701' }}><RefreshIcon /></Button>
                                <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', boxShadow: '1px 1px 3px 0 white', backgroundColor: '#4A7FC4' }}><FileDownloadIcon /></Button>
                            </Box>

                        </Box>
                    </Drawer>
                </nav>
            </Box>


            {/* Modal */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >

                <Box sx={style} >

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2B5690', padding: '5px', borderTopLeftRadius: '9px', borderTopRightRadius: '9px', }}>
                        <Typography variant='h6' sx={{ my: 'auto', mx: '14px', color: 'white', }}>
                            Add Patient
                        </Typography>
                        <IconButton onClick={handleClose} sx={{ mx: '10px' }}>
                            <AddCircleIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Box>


                    <Box className="scrollStyle" sx={{ m: '1rem 1.5rem', overflowY: 'auto', height: '77%', }}>

                        <Box sx={{ m: '10px 2px' }}>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid item lg={6} sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <Avatar src="/broken-image.jpg" />
                                            <TextField
                                                label="Select Photo"
                                                variant="outlined"
                                                name='photo'
                                                fullWidth

                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="end">
                                                            <button variant="contained" >
                                                                Chose File here
                                                                <input
                                                                    type="file"
                                                                    style={{ display: 'none' }}
                                                                    onChange={handleFileChange}
                                                                />
                                                            </button>
                                                        </InputAdornment>
                                                    ),

                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton>
                                                                <CloudUploadIcon color='primary' />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Box>

                                        <TextField
                                            value={modalData.fname}
                                            onChange={targetModalValues}
                                            label="First Name"
                                            variant="outlined"
                                            name='fname'
                                            fullWidth
                                        />

                                        <TextField
                                            value={modalData.gender}
                                            select
                                            label="Gender"
                                            name='gender'
                                            fullWidth
                                            onChange={targetModalValues}
                                            variant="outlined"

                                        >
                                            <MenuItem value="male">Male</MenuItem>
                                            <MenuItem value="female">Female</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                        </TextField>

                                    </Grid>
                                    <Grid item lg={6} sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
                                        <TextField
                                            value={modalData.email}
                                            onChange={targetModalValues}
                                            label="Email"
                                            type='email'
                                            name='email'
                                            fullWidth
                                            variant="outlined"

                                        />

                                        <TextField
                                            value={modalData.lname}
                                            onChange={targetModalValues}
                                            label="Last Name"
                                            variant="outlined"
                                            name='lname'
                                            fullWidth
                                        />

                                        <TextField
                                            value={modalData.date}
                                            onChange={targetModalValues}
                                            id="date"
                                            name='date'
                                            fullWidth
                                            label="Date"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>
                                </Grid>
                            </form>
                        </Box>

                        <Box sx={{ m: '10px 2px', }}>
                            <form>
                                <TextField
                                    value={modalData.address}
                                    onChange={targetModalValues}
                                    label="Address"
                                    name='address'
                                    variant="outlined"
                                    multiline
                                    // Adjust the number of rows as needed
                                    fullWidth
                                />
                            </form>
                        </Box>

                        <Box sx={{ m: '10px 2px', }}>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid item lg={6} sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
                                        <TextField
                                            value={modalData.zipcode}
                                            onChange={targetModalValues}
                                            label="Zip Code"
                                            name='zipcode'
                                            fullWidth
                                            variant="outlined"
                                        />
                                        <TextField
                                            value={modalData.daction}
                                            label="Device Action*"
                                            name='daction'
                                            fullWidth
                                            type='date'
                                            variant="outlined"
                                            onChange={targetModalValues}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                        />

                                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                            <TextField
                                                // value={modalData.select}
                                                // onChange={targetModalValues}
                                                label="Selected Item"
                                                fullWidth
                                                name='select'
                                                value={selectedItem || ''}
                                                variant="outlined"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                            <IconButton
                                                aria-label="add"
                                                onClick={handleClick}
                                            >
                                                <AddCircleOutlineIcon />
                                            </IconButton>

                                            <Menu
                                                anchorEl={anchorEl}
                                                open={Boolean(anchorEl)}
                                                onClose={handleCloses}
                                            >
                                                <MenuItem onClick={() => handleOptionSelect('Mehar')}>Mehar</MenuItem>
                                                <MenuItem onClick={() => handleOptionSelect('Shahid')}>Zaman</MenuItem>
                                                {/* Add more menu items as needed */}
                                            </Menu>
                                        </Box>
                                        <TextField
                                            value={modalData.dreaction}
                                            onChange={targetModalValues}
                                            label="Device Reaction*"
                                            // focused
                                            type='date'
                                            name='dreaction'
                                            fullWidth
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true
                                            }}

                                        />
                                        <TextField
                                            value={modalData.rpm}
                                            onChange={targetModalValues}
                                            label="Rpm*"
                                            name='rpm'
                                            fullWidth
                                            variant="outlined" />
                                    </Grid>

                                    <Grid item lg={6} sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
                                        <TextField
                                            value={modalData.city}
                                            onChange={targetModalValues}
                                            label="City"
                                            name='city'
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <TextField
                                            value={modalData.provider}
                                            onChange={targetModalValues}
                                            label="Provider*"
                                            name='provider'
                                            fullWidth
                                            variant="outlined" />
                                        <TextField
                                            value={modalData.assistant}
                                            onChange={targetModalValues}
                                            label="Medical Assistent*"
                                            name='assistant'
                                            variant="outlined" />

                                        <TextField
                                            value={modalData.phone}
                                            onChange={targetModalValues}
                                            label="Phone*"
                                            name='phone'
                                            type='number'
                                            fullWidth
                                            variant="outlined" />
                                        <TextField
                                            value={modalData.reading}
                                            onChange={targetModalValues}
                                            fullWidth
                                            label="Reading*"
                                            name='reading'
                                            variant="outlined"
                                        />

                                    </Grid>

                                </Grid>
                            </form>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: '10px', mb: '10px', ml: '10px' }}>
                            <Button variant='contained' onClick={handleForm} sx={{ borderRadius: '1.3rem', bgcolor: 'black', fontSize: '12px', padding: '5px' }}>
                                Save
                            </Button>
                            <Button variant='contained' onClick={empty} sx={{ borderRadius: '1.3rem', bgcolor: 'gray', fontSize: '12px', padding: '5px' }}>
                                Cancel
                            </Button>
                        </Box>

                        <FormGroup sx={{ mr: '10px', display: { xs: 'none', sm: 'block' } }}>
                            <FormControlLabel control={<Switch defaultChecked />} label={<span style={{ color: 'red' }}>Alerts</span>} />

                        </FormGroup>
                    </Box>

                </Box>
            </Modal>

        </>
    )
}