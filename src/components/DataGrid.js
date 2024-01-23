import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box, Menu,Typography, Button, Grid, InputAdornment, MenuItem, Modal, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { HeaderContainer } from './HeaderContainer';
import InfoIcon from '@mui/icons-material/Info';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import SideBar from './SideBar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const style = {

    width: '53%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    height: '98%',
    // overflowY:'auto',

};

export const DataGridTable = () => {
    
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
    };

    // Modal states
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //   select gender
    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

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

    // console.log(modalData)

    const targetModalValues = (e) => {
        setModalData({
            ...modalData,
            [e.target.name]: e.target.value,
        });
    }

    const handleForm = (e) => {
        e.preventDefault()
        handleClose()
    }

    const columns = [
        {
            field: 'Action',
            headerName: 'Action',
            pinnable: false,
            sortable: false,
            width: 170,
            disableColumnMenu: true,

            renderCell: (params) => (
                <>

                    <PhonelinkSetupIcon sx={{ color: 'gray', }} fontSize="small" />
                    <VisibilityIcon sx={{ color: 'gray' }} fontSize="small" />

                    <IconButton onClick={handleOpen}>
                        <BorderColorIcon sx={{ color: 'gray', }} fontSize="small" />
                    </IconButton>

                    <DeleteSweepIcon sx={{ color: 'gray', }} fontSize="small" />
                    <InfoIcon sx={{ color: 'gray', }} fontSize="small" />

                </>
            )

        },
        {
            field: 'id',
            headerName: 'Sr No',
            width: 70
        },
        {
            field: 'patId',
            headerName: 'PatID',
            width: 70,
        },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 150,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 100,
        },
        {
            field: 'provider',
            headerName: 'Provider',
            width: 150,
        },
        {
            field: 'medicalAssistant',
            headerName: 'MedicalAssistant',
            width: 150,
        },
        {
            field: 'deviceAction',
            headerName: 'DeviceAction',
            width: 150,
        },
        {
            field: 'firstReaction',
            headerName: 'FirstReaction',
            width: 150,
        },
        {
            field: 'rpm',
            headerName: 'Rpm',
            width: 80,
        },
        {
            field: 'reading',
            headerName: 'Reading',
            width: 80,
        },


    ];

    // Lifting State Up

    const [receiveData, setReceiveData] = useState('')

    const liftingState = (data) => {
        setReceiveData(data)
    }

    //   console.log(receiveData)

    //  

    const rows = [
        { id: 1, patId: '19', phone: receiveData.phone, rpm: receiveData.rpm, reading: receiveData.reading, firstName: receiveData.fname, medicalAssistant: receiveData.assistant, provider: receiveData.provider, deviceAction: receiveData.daction, firstReaction: receiveData.dreaction, age: 14 },

    ];
    // console.log(rows)


    return (
        <>
            <Box>
                <HeaderContainer data={liftingState} />
                <Box sx={{ height: 500, width: '94%', ml: '6%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[10]}
                    />
                </Box>
            </Box>


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
                                            value={receiveData.fname}
                                            onChange={targetModalValues}
                                            label="First Name"
                                            variant="outlined"
                                            name='fname'
                                        />

                                        <TextField
                                            value={receiveData.gender}
                                            select
                                            label="Gender"
                                            name='gender'
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
                                            value={receiveData.email}
                                            onChange={targetModalValues}
                                            label="Email"
                                            type='email'
                                            name='email'
                                            variant="outlined"

                                        />

                                        <TextField
                                            value={receiveData.lname}
                                            onChange={targetModalValues}
                                            label="Last Name"
                                            variant="outlined"
                                            name='lname'
                                        />

                                        <TextField
                                            value={receiveData.date}
                                            onChange={targetModalValues}
                                            id="date"
                                            name='date'
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
                                    value={receiveData.address}
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
                                            value={receiveData.zipcode}
                                            onChange={targetModalValues}
                                            label="Zip Code"
                                            name='zipcode'
                                            variant="outlined"
                                        />
                                        <TextField
                                            value={receiveData.daction}
                                            label="Device Action*"
                                            name='daction'

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
                                            value={receiveData.dreaction}
                                            onChange={targetModalValues}
                                            label="Device Reaction*"
                                            // focused
                                            type='date'
                                            name='dreaction'
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true
                                            }}

                                        />
                                        <TextField
                                            value={receiveData.rpm}
                                            onChange={targetModalValues}
                                            label="Rpm*"
                                            name='rpm'
                                            variant="outlined" />
                                    </Grid>

                                    <Grid item lg={6} sx={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
                                        <TextField
                                            value={receiveData.city}
                                            onChange={targetModalValues}
                                            label="City"
                                            name='city'
                                            variant="outlined"
                                        />
                                        <TextField
                                            value={receiveData.provider}
                                            onChange={targetModalValues}
                                            label="Provider*"
                                            name='provider'
                                            variant="outlined" />
                                        <TextField
                                            value={receiveData.assistant}
                                            onChange={targetModalValues}
                                            label="Medical Assistent*"
                                            name='assistant'
                                            variant="outlined" />

                                        <TextField
                                            value={receiveData.phone}
                                            onChange={targetModalValues}
                                            label="Phone*"
                                            name='phone'
                                            type='number'
                                            variant="outlined" />
                                            
                                        <TextField
                                            value={receiveData.reading}
                                            onChange={targetModalValues}
                                            // fullWidth
                                            label="Reading*"
                                            name='reading'
                                            variant="outlined"
                                        />

                                    </Grid>

                                </Grid>
                            </form>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Box sx={{ display: 'flex', gap: '10px', mb: '10px', ml: '10px' }}>
                            <Button variant='contained' onClick={handleForm} sx={{ borderRadius: '1.3rem', bgcolor: 'black' }}>
                                Save
                            </Button>
                            <Button variant='contained' onClick={handleClose} sx={{ borderRadius: '1.3rem', bgcolor: 'gray' }}>
                                Cancel
                            </Button>
                        </Box>
                        <Box sx={{display:'flex', gap:'1rem'}}>
                        <FormGroup sx={{mr:'10px',display:{xs:'none', md:'block'}}}>
                            <FormControlLabel control={<Switch defaultChecked style={{ color: '#55CFDE' }} />} label={<span style={{ color: 'green' }}>Alerts</span>} />                        
                        </FormGroup>

                        <FormGroup sx={{mr:'10px',display:{xs:'none', md:'block'}}}>
                            <FormControlLabel control={<Switch defaultChecked />} label={<span style={{ color: 'red' }}>Alerts</span>} />
                           
                        </FormGroup>

                        </Box>
                       
                    </Box>

                </Box>
            </Modal>
        </>
    )
}
