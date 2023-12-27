import { Box, Button, Card, CardActions, CardContent, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Grid, Hidden, IconButton, InputBase, MenuItem, Paper, Select, Typography, styled } from '@mui/material'
import Badge from '@mui/material/Badge';
import { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { DataGrid } from '@mui/x-data-grid';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import HeaderInformationPage from './HeaderInformationPage';
import { LineChart, } from '@mui/x-charts/LineChart';
import ReactApexChart from 'react-apexcharts';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        left: 20,
        top: 11,
        fontSize: '16px',
        padding: '10px',
    },
    // ml:'3rem'
}));
const StyledBadgeHg1 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        left: 38,
        top: 13,
        fontSize: '13px',
        padding: '10px',
        color: 'white',
    },
}));
const StyledBadgeHg2 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        left: 16,
        top: 13,
        fontSize: '13px',
        padding: '10px',
        // color: 'white',
    },
}));

const StyledBadgeHg3 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        left: 15,
        top: 10,
        fontSize: '11px',
        padding: '10px',
        // color: 'white',
    },
}));
const StyledBadgeHg4 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        left: 4,
        top: 10,
        fontSize: '11px',
        padding: '10px',
        // color: 'white',
    },
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    position: 'relative',
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
        paddingLeft: `3px`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const PatientInfo = () => {


    const [selectedOption, setSelectedOption] = useState('/');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
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

    const columns = [
        {
            field: 'Action',
            headerName: 'Action',
            pinnable: false,
            sortable: false,
            width: 130,
            disableColumnMenu: true,

            renderCell: (params) => (
                <>
                    <ModeEditIcon sx={{ color: 'gray' }} />
                </>
            )

        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150
        },
    ]

    const rows = [
        { id: '1', name: 'Mehar Shahid', },
        { id: '2', name: 'Shahid Zaman', },
        { id: '3', name: 'Jaime Arya', },
        { id: '4', name: 'Hussain Zaman', },
        { id: '5', name: 'Hassan Mujtaba', },
        { id: '6', name: 'Mehar Shahid', },
        { id: '7', name: 'Shahid Zaman', },
        { id: '8', name: 'Haider Mustaffa', },
        { id: '9', name: 'Mustaffa Ali', },
    ];

    const data = [4, 2, 1, 2, 2];

    // Chats 2nd chart apexcharts

    const chartData = [
        {
            name: 'Mehar',
            data: [3,3,3,3,3],
          },
         
          // Add more data series as needed
        ];
      
        // Configuration options for the area chart
        const chartOptions = {
          chart: {
            type: 'area',
            height: 300,
            toolbar: {
                show: false, // Set to false to hide the entire toolbar
              },
          },
          xaxis: {
            labels: {
                show: false
              },
            categories: [1,2,3,4,5],
            axisBorder: {
                show: false, // Set to false to hide bottom axis border lines
              },
              axisTicks: {
                show: false, // Set to false to hide x-axis ticks
              },
          },
        
          fill: {
            colors: ['#008FFB'],
            opacity: 0.7,
    
          },
          dataLabels: {
            enabled: false,
          },
          markers: {
            size: 3, // Set the size of the markers (dots)
            colors:'rgb(208, 8, 8)',
            borderWidth: 5,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val;
              },
            },
          },
          stroke: {
            curve: 'smooth',
          },
          grid: {
            // Configure grid lines for both x-axis and y-axis
            show: true,
            borderColor: '#e0e0e0', // Set the color of the grid lines
            strokeDashArray: 0, // Set the dash array for dashed grid lines
            position: 'back', // Set the position of the grid lines ('front' or 'back')
            yaxis: {
              lines: {
                show: true, // Set to false to hide vertical grid lines
              },
            },
          },
    
          yaxis: {
            labels:{
                show:false
            },
            categories: [4,2,1,2,4],
          
          }
        };


        const chartsData = [
            {
                name: 'Mehar',
                data: [3,2,1,2,1.5],
              },
             
              // Add more data series as needed
            ];

        const chartOption = {
            chart: {
              type: 'area',
              height: 300,
              toolbar: {
                  show: false, // Set to false to hide the entire toolbar
                },
            },
            xaxis: {
              labels: {
                  show: false
                },
              categories: [1,2,3,4,5],
              axisBorder: {
                  show: false, // Set to false to hide bottom axis border lines
                },
                axisTicks: {
                    show: false, // Set to false to hide x-axis ticks
                  },
            },
          
            fill: {
              colors: ['#008FFB'],
              opacity: 0.7,
      
            },
            dataLabels: {
              enabled: false,
            },
            markers: {
              size: 3, // Set the size of the markers (dots)
              colors:'rgb(208, 8, 8)',
              borderWidth: 5,
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val;
                },
              },
            },
            stroke: {
              curve: 'smooth',
            },
            grid: {
              // Configure grid lines for both x-axis and y-axis
              show: true,
              borderColor: '#e0e0e0', // Set the color of the grid lines
              strokeDashArray: 0, // Set the dash array for dashed grid lines
              position: 'back', // Set the position of the grid lines ('front' or 'back')
              yaxis: {
                lines: {
                  show: true, // Set to false to hide vertical grid lines
                },
              },
            },
      
            yaxis: {
              labels:{
                  show:false
              },
              categories: [4,2,1,2,4],
            
            }
          };


    return (
        <>
            <Box sx={{ mb: '1rem' }}>
                <HeaderInformationPage />
            </Box>

            <Box sx={{ ml: '4.5rem', mb: '2rem' }}>
                <Grid container spacing={1}>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <Paper>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2B5690', padding: '6px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', }}>
                                <Typography variant='h6' sx={{ my: 'auto', color: 'white', }}>
                                    Patients
                                </Typography>
                                <Button variant="outlined" sx={{ textTransform: 'capitalize', color: 'white', padding: '0px 5px', backgroundColor: 'black', fontWeight: 'bold' }}><Box sx={{ marginRight: '5px', mt: '3px' }}><PersonAddIcon fontSize='small' /></Box>Add Patient</Button>
                            </Box>

                            <Search>

                                <StyledInputBase
                                    placeholder="Search Here"
                                    inputProps={{ 'aria-label': 'search' }}
                                />

                                <SearchIconWrapper>
                                    <SearchIcon sx={{ color: 'gray' }} />
                                </SearchIconWrapper>
                            </Search>
                            <Divider />
                            <Box sx={{ width: '95%', mx: 'auto', my: '5px', pb: '0.5rem' }}>

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
                        </Paper>
                    </Grid>


                    <Grid item lg={3} md={6} sm={12} xs={12}>

                        <Paper sx={{ pb: '3rem' }}>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2B5690', padding: '6px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', }}>
                                <Typography variant='h6' sx={{ my: 'auto', color: 'white', }}>
                                    Patients Information
                                </Typography>
                            </Box>

                            <Box sx={{ my: '5px', mx: '8px' }}>
                                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Profile
                                    <Divider sx={{ backgroundColor: '#ADC1CB', }} />
                                </Typography>

                                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                    Name
                                </Typography>

                                <Typography variant='h6' sx={{ color: 'gray', textTransform: 'uppercase', fontSize: '16px' }}>
                                    johnnyy robinsonn
                                </Typography>

                                <Box sx={{ display: 'flex', gap: '4rem', mt: '2px' }}>
                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                            Date Of Birth
                                        </Typography>
                                        <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                            05-02-2000
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                            Age
                                        </Typography>

                                        <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                            23 Years
                                        </Typography>
                                    </Box>
                                </Box>


                                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796', mt: '4px' }}>
                                    Addres
                                </Typography>

                                <Typography variant='h6' sx={{ color: 'gray', textTransform: 'uppercase', fontSize: '14px' }}>
                                    <span style={{ display: 'flex', gap: '6px' }}>
                                        <span style={{ textTransform: 'lowercase' }}>test</span>
                                        <span>
                                            address for testing purpose
                                        </span>
                                    </span>
                                </Typography>

                                <Box sx={{ display: 'flex', gap: '2.5rem' }}>
                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                            City
                                        </Typography>
                                        <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                            Swabi
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                            State
                                        </Typography>

                                        <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                            TX
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                            Zip
                                        </Typography>

                                        <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                            19131913
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', gap: '2.5rem' }}>
                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                            Gender
                                        </Typography>
                                        <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                            Male
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                            Phone
                                        </Typography>

                                        <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                            +92-321-233222
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ my: '5px', mx: '8px', mt: '10px' }}>
                                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Device Details
                                    <Divider sx={{ backgroundColor: '#ADC1CB', }} />
                                </Typography>

                                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                    Device ID
                                </Typography>

                                <Typography variant='h6' sx={{ color: 'gray', textTransform: 'uppercase', fontSize: '14px' }}>
                                    320099118877
                                </Typography>

                                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                    Serial Number
                                </Typography>
                                <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                    2323223
                                </Typography>

                                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                    Health Indicator
                                </Typography>

                                <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px' }}>
                                    Blood Pressure
                                </Typography>
                            </Box>

                            <Box sx={{ my: '5px', mx: '8px', mt: '10px' }}>
                                <Typography variant='h6' sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Insurances.
                                    <Divider sx={{ backgroundColor: '#ADC1CB', }} />
                                </Typography>

                                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                    Primary Insurance
                                </Typography>

                                <Typography variant='h6' sx={{ color: 'gray', textTransform: 'uppercase', fontSize: '14px', }}>
                                    medicare
                                </Typography>

                                <Typography variant='h6' sx={{ fontSize: '15px', fontWeight: 'bold', color: '#536796' }}>
                                    Secondary Insurance
                                </Typography>
                                <Typography variant='h6' sx={{ color: 'gray', fontSize: '14px', textTransform: 'uppercase' }}>
                                    bcbs
                                </Typography>

                            </Box>

                        </Paper>
                    </Grid>

                    <Grid item lg={6} md={12} sm={12} xs={12}>

                        <Box sx={{ backgroundColor: '#2B5690', padding: '6px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', }}>
                            <Typography variant='h6' sx={{ color: 'white', }}>
                                Readings
                            </Typography>
                        </Box>

                        <Box>
                            <Paper sx={{ mb: '0.5rem', padding: '6px' }}>

                                <Grid container spacing={1} sx={{}}>
                                    <Grid item lg={5} md={6} sm={6} xs={12}>
                                        <Card variant="outlined" sx={{ backgroundColor: 'black', color: 'white', borderRadius: '1rem', padding: 'none' }}>
                                            <CardContent>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mr: '2rem', ml: '5px' }}>
                                                    <Box sx={{ display: 'flex', mr: '5px' }}>
                                                        <IconButton sx={{ my: 'auto' }}>
                                                            <FavoriteBorderIcon sx={{ color: 'red', fontSize: '23px' }} />
                                                        </IconButton>

                                                        <Box sx={{ my: 'auto' }}>
                                                            <Typography sx={{ fontSize: '14px' }}>
                                                                SYS
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <IconButton sx={{ color: 'white', fontSize: '18px' }}>
                                                            <StyledBadgeHg1 badgeContent={'mmHg'}>
                                                                175

                                                            </StyledBadgeHg1>
                                                        </IconButton>
                                                    </Box>

                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <ReactApexChart
                                                        options={chartOption}
                                                        series={chartsData}
                                                        type={chartOption.chart.type}
                                                        height={141}
                                                        width={240}
                                                    />

                                                </Box>
                                            </CardContent>

                                        </Card>
                                    </Grid>

                                    <Grid item lg={5} md={6} sm={6} xs={12}>
                                        <Card variant="outlined" sx={{ backgroundColor: 'white', borderRadius: '1rem' }}>
                                            <CardContent>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mr: '2rem', ml: '5px' }}>
                                                    <Box sx={{ display: 'flex', mr: '10px' }}>
                                                        <IconButton sx={{ my: 'auto' }}>
                                                            <FavoriteBorderIcon sx={{ color: 'red', fontSize: '23px' }} />
                                                        </IconButton>

                                                        <Box sx={{ my: 'auto' }}>
                                                            <Typography sx={{ fontSize: '14px' }}>
                                                                DIA
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <IconButton sx={{ fontSize: '18px' }}>
                                                            <StyledBadgeHg2 badgeContent={'mmHg'}>
                                                                6
                                                            </StyledBadgeHg2>
                                                        </IconButton>
                                                    </Box>
                                                </Box>

                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <ReactApexChart
                                                        options={chartOptions}
                                                        series={chartData}
                                                        type={chartOptions.chart.type}
                                                        height={141}
                                                        width={240}
                                                    />
                                                </Box>

                                            </CardContent>

                                        </Card>
                                    </Grid>

                                    <Grid item lg={2} md={6} sm={6} xs={6}>

                                        <Grid container spacing={1}>
                                            <Grid item lg={12} md={6} sm={6} xs={6}>
                                                <Card variant="outlined" sx={{ borderRadius: '1rem' }}>
                                                    <CardContent>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>

                                                            <Box sx={{ display: 'flex', }}>

                                                                <Box sx={{ my: 'auto' }}>
                                                                    <Typography sx={{ fontSize: '11px' }}>
                                                                        PUL
                                                                    </Typography>
                                                                </Box>
                                                                <IconButton>

                                                                    <MonitorHeartOutlinedIcon sx={{ color: 'red', fontSize: '21px' }} />
                                                                </IconButton>
                                                            </Box>
                                                            <Box>
                                                                <IconButton sx={{ fontSize: '16px' }}>
                                                                    <StyledBadgeHg3 badgeContent={'mmHg'}>
                                                                        82

                                                                    </StyledBadgeHg3>
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>

                                            <Grid item lg={12} md={6} sm={6} xs={6}>
                                                <Card variant="outlined" sx={{ borderRadius: '1rem' }}>
                                                    <CardContent>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>

                                                            <Box sx={{ display: 'flex', }}>

                                                                <Box sx={{ my: 'auto' }}>
                                                                    <Typography sx={{ fontSize: '11px' }}>
                                                                        WT
                                                                    </Typography>
                                                                </Box>
                                                                <IconButton>
                                                                    <AvTimerIcon sx={{ color: 'red', fontSize: '22px' }} />
                                                                </IconButton>
                                                            </Box>
                                                            <Box>
                                                                <IconButton sx={{ fontSize: '16px' }}>
                                                                    <StyledBadgeHg4 badgeContent={'Lbs'}>
                                                                        0

                                                                    </StyledBadgeHg4>
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>

                        <Paper>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2B5690', padding: '6px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', }}>
                                <Typography variant='h6' sx={{ my: 'auto', color: 'white', }}>
                                    Notes
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    displayEmpty
                                    sx={{
                                        border: 'none', outline: 'none',
                                        textTransform: 'capitalize',

                                        padding: '0px',
                                        height: '40px',
                                        margin: 0,
                                        padding: 0,
                                        boxShadow: '1px 1px 3px 0 white',
                                        '& .MuiSelect-icon': {

                                        },
                                        '&:hover': {

                                        },
                                    }}  >
                                    <MenuItem sx={{ backgroundColor: 'black', paddingLeft: '2px', marginRight: '2px', color: 'white' }} value="">
                                        Select Te
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
                                <IconButton>
                                    <AddCircleIcon sx={{ color: '#2B5690' }} />
                                </IconButton>
                                <IconButton>
                                    <CloudDownloadIcon sx={{ color: '#2B5690' }} />
                                </IconButton>
                            </Box>

                            <Box sx={{ backgroundColor: '#FAEFDE', padding: '0.5rem', borderRadius: '1rem', mt: '0.4rem' }}>
                                <Grid container spacing={1}>
                                    <Grid item lg={10}>

                                        <Box sx={{ display: 'flex', gap: '3rem' }}>
                                            <IconButton>
                                                <AccountCircleIcon sx={{ color: '#2B5690', fontSize: 60 }} />
                                            </IconButton>
                                            <Box>
                                                <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 'bold', color: '#536796', mt: '15px' }}>
                                                    User Demo
                                                </Typography>
                                                <Typography variant='h6' sx={{ color: 'rgb(77, 77, 77)', fontSize: '15px', }}>
                                                    12-22-2023,5:55 am
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ ml: '5px' }}>
                                            <Typography variant='h6' sx={{ color: 'rgb(77, 77, 77)', fontSize: '15px', }}>
                                                Start Time: 12/22/2023,5:55 End: 12/29/2023 New Template Testing
                                            </Typography>
                                        </Box>

                                        <Box sx={{ margin: '8px', display: 'flex', gap: '8rem' }}>

                                            <Typography variant='h6' sx={{ color: 'rgb(77, 77, 77)', fontSize: '17px', display: 'flex', gap: '4px' }}>
                                                <span>Type:</span>
                                                <span style={{ textTransform: 'uppercase', color: '#2B5690', fontWeight: 'bold' }}>rpm</span>

                                            </Typography>

                                            <Typography variant='h6' sx={{ color: 'rgb(77, 77, 77)', fontSize: '17px', display: 'flex', gap: '4px' }}>
                                                <span>Answered:</span>
                                                <span style={{ textTransform: 'uppercase', color: '#2B5690', fontWeight: 'bold' }}>yes</span>

                                            </Typography>

                                        </Box>
                                    </Grid>

                                    <Grid item lg={2} md={4} sm={12} xs={12}>
                                        <Grid container spacing={10
                                        }>
                                           <Grid item lg
                                           ={12} md={12} sm={6} xs={6} >
                                                <StyledBadge badgeContent={'0s'}>
                                                    <AccessAlarmIcon sx={{ fontSize: '26px', color:'gray' }} />
                                                </StyledBadge>
                                                </Grid>

                                                <Grid item lg
                                           ={12} md={12} sm={6} xs={6}>
                                                <DeleteSweepIcon sx={{ fontSize: '28px', color:'gray' }} />
                                                <EditIcon sx={{ fontSize: '28px', color:'gray' }} />
                                                </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{ backgroundColor: '#FAEFDE', padding: '0.6rem', borderRadius: '1rem', mt: '0.4rem' }}>
                                <Grid container spacing={1}>
                                    <Grid item lg={10}>

                                        <Box sx={{ display: 'flex', gap: '3rem' }}>
                                            <IconButton>
                                                <AccountCircleIcon sx={{ color: '#2B5690', fontSize: 60 }} />
                                            </IconButton>
                                            <Box>
                                                <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 'bold', color: '#536796', mt: '15px' }}>
                                                    User Demo
                                                </Typography>
                                                <Typography variant='h6' sx={{ color: 'rgb(77, 77, 77)', fontSize: '15px', }}>
                                                    12-22-2023,5:55 am
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ ml: '5px' }}>
                                            <Typography variant='h6' sx={{ color: 'rgb(77, 77, 77)', fontSize: '15px', }}>
                                                Start Time: 12/22/2023,5:55 End: 12/29/2023 New Template Testing
                                            </Typography>
                                        </Box>


                                    </Grid>

                                    <Grid item lg={2}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                            <IconButton>
                                                <StyledBadge badgeContent={'0s'}>
                                                    <AccessAlarmIcon sx={{ fontSize: '26px' }} />
                                                </StyledBadge>
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
