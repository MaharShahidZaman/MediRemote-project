import React, { useEffect } from 'react'
import { Box, Typography, Button, Grid, Input, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import '../style/login.css'
import axios from 'axios'
import { styled } from '@mui/system'
import '../style/login.css'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import UpdateIcon from '@mui/icons-material/Update';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PendingIcon from '@mui/icons-material/Pending';
import Modal from '@mui/material/Modal';
import logo from './image/logo.png.webp'
import SideBar from './SideBar'


const StyledBoxYellow = styled(Input)({
    border: '1px solid #ccc',
    outline: 'none',
    borderRadius: '50px',
    padding: '10px 3px',
    width: '90%',
    height: '60%',
    zIndex: '-1',
    background: 'rgb(239, 239, 12)',
    variant: 'contained',
    color: 'black'
});
const StyledBoxRed = styled(Input)({
    border: '1px solid #ccc',
    outline: 'none',
    borderRadius: '50px',
    padding: '10px 3px',
    width: '90%',
    height: '60%',
    zIndex: '-1',
    background: 'rgb(222, 18, 18)',
    variant: 'contained',
    color: 'white'
});
const StyledBoxGreen = styled(Input)({
    border: '1px solid #ccc',
    outline: 'none',
    borderRadius: '50px',
    padding: '10px 3px',
    width: '90%',
    height: '60%',
    background: 'green',
    variant: 'contained',
    color: 'white'
});

//   Modal

const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    width: '52%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    alignItems: 'center',
    p: 4,
};

export const UserScreen = () => {

    const { id } = useParams()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [patient, setPatient] = useState([])
    const [appoinment, setAppointment] = useState([])

    const [value, setValue] = useState(dayjs('2090-04-17T15:30'));
    const [updateValue, setUpdateValue] = useState(dayjs('2090-04-17T15:30'));
    const [serialNo, setSerialNo] = useState('');
    const [showData, setShowData] = useState(false)

    const handleForm = (e) => {
        e.preventDefault()
        appointment()
    }
    const updateModal = (par) => {
        setUpdateValue(
            dayjs(par.appoinment_Date_Time))
            setSerialNo(par.serial_No)
        handleOpen()
    }

    const handleModalForm = (e) => {
        e.preventDefault()
        updateAppointment()
        handleClose()
    }

    // Update Appointment Time

    const updateAppointment = async () => {

        try {
            await axios.put(`http://192.168.0.145/tasks/api/Appoinment_Schedule/UpdateUser?serial_No=${serialNo}`, {
                doctor_Name: "Dr.Kamran",
                appointment_Status: "pending",
                appoinment_Date_Time: (new Date(updateValue).toISOString()),
                patient_Contact: patient[0].user_Contact,
                patient_Name: patient[0].first_Name + patient[0].last_Name,
                user_ID: id,
              
            })
            // console.log(resp);
            alert('Success')
        } catch (error) {
            alert('Error')
        }

    }

    // fetch singal Data

    useEffect(() => {
        showPatient()
        addAppointment()
    },[updateAppointment])

    const addAppointment = async () => {
        const response = await axios.get(`http://192.168.0.145/tasks/api/Appoinment_Schedule/GetUserByID?user_ID=${id}`)

        const dataWithId = response.data.result.Patient.map((row, id) => ({
            ...row,
            id: id
        }));

        setPatient(dataWithId)
    }

    const showPatient = async () => {
        const response = await axios.get(`http://192.168.0.145/tasks/api/Appoinment_Schedule/GetUserByID?user_ID=${id}`)
// console.log(response.data.result.Schedule[0])
      if(response.data.result.Schedule[0]===null){
        setShowData(false)
      }else{
        setShowData(true)
      }
        const dataWithId = response.data.result.Schedule.map((row, id) => ({
            ...row,
            id: id
        }));
        
        setAppointment(dataWithId)

    }

    // Appointment

    const appointment = async () => {
        try {

            await axios.post('http://192.168.0.145/tasks/api/Appoinment_Schedule/AddAppoinment', {
                appoinment_Date_Time: (new Date(value).toISOString()),
                serial_No: appoinment.serial_No, 
                appointment_Status: 'pending',
                patient_Contact: patient[0].user_Contact,
                doctor_Name: 'Dr.Kamran',
                patient_Name: patient[0].first_Name + patient[0].last_Name
                ,
                user_ID: id,
            });


        } catch (error) {
            console.log('Api Error', error)
        }
    }

    const columns = [

        {
            field: 'serial_No',
            headerName: 'Sr.',
            width: 160,
        }, 
        {
            field: 'patient_Name',
            headerName: 'Patient-Name',
            width: 160,
        },

        {
            field: 'doctor_Name',
            headerName: 'Doctor-Name',
            width: 160,
        },
        {
            field: 'patient_Contact',
            headerName: 'Phone#',
            width: 160,
        },
        {
            field: 'appoinment_Date_Time',
            headerName: 'Appointment-Time',
            width: 260,
        },

        {
            field: 'change-Time',
            headerName: 'Change-Time',
            width: 140,
            renderCell: (params) => (
                <>
                    <IconButton onClick={() => updateModal(params.row)}>
                        <UpdateIcon sx={{ color: 'green' }} />
                    </IconButton>
                </>
            )
        },

        {
            field: 'appointment_Status',
            headerName: 'Appointment-Status',
            width: 160,
            renderCell: (params) => {

                const isPending = params.row.appointment_Status === 'pending';
                const isApproved = params.row.appointment_Status === 'approved';
                const StyledBox = isPending ? StyledBoxYellow : isApproved ? StyledBoxGreen : StyledBoxRed;
                return (
                    <>
                        <StyledBox
                            type="text"
                            value={params.value}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PendingIcon sx={{ color: 'white', boxShadow: 'none' }} />
                                </InputAdornment>
                            }

                        />
                    </>
                )
            }

        },
    ];

    return (
        <>
        
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '13px 0' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    Screen For Common User
                </Typography>
            </Box>

            <Box sx={{ margin: '10px', width: '300px', }}>
                <form>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker value={value}
                            onChange={(newValue) => setValue(newValue)}
                            label="Set Appointment"
                        />
                    </LocalizationProvider>
                </form>
                <Button onClick={handleForm} variant='contained'>SET APPOINTMENT</Button>
            </Box>

{
    
}
            <Box display={showData===false?'none':true} sx={{ height: 400, width: '98%', m: '10px auto' }}>
                <DataGrid
                    rows={appoinment}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5
                            },
                        },
                    }}
                />

            </Box>

            {/* Modal */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '5px, 0px' }}>
                        <Box component='img' src={logo} sx={{ width: '150px', height: '30px', }} />
                        <h2 align="center">Update Time and Date Here!</h2>
                        <Box sx={{ margin: '10px', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                        <form className='formStyles'>
                            {/* <TextField value={serialNo} /> */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker value={updateValue}
                                    onChange={(newValue) => setUpdateValue(newValue)}
                                    label="Set Appointment"
                                />
                            </LocalizationProvider>
                        </form>
                        <Button onClick={handleModalForm} variant='contained'>GET APPOINTMENT</Button>
                    </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
