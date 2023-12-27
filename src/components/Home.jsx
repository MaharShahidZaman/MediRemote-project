import React, { useCallback, useEffect, useState } from 'react';
import { Box, Grid, Paper, TextField, Typography, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import logo from './image/logo.png.webp'
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import { useParams, useHistory } from 'react-router-dom'
import SideBar from './SideBar';
 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius:'10px',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Home = () => {

    const [fetchData, setFetchData] = useState([])
    const [error, setError] = useState('')
    const [open, setOpen] = useState(false);

    const handleOpen = ()=> setOpen(true);
    const handleClose = ()=> setOpen(false);

    // Delete Api

    const handleDelete = async (id) => {

        await axios.delete(`http://192.168.0.145/tasks/api/Patient_L/DeleteUser?user_ID=${id}`)

        const deleteUser = fetchData.filter((item) => {
            return item.user_ID !== id
        })

        setFetchData(deleteUser)
    }

    const[updateUserData,setUpdateUserData]=useState({
        user_ID:"",
        first_Name: '',
        last_Name: '',
        user_Email: '',
        user_Password: '',
        user_Contact: '',
    })
// console.log(updateUserData.first_Name)
    const targetUpdateField = (e) => {
        setUpdateUserData({
            ...updateUserData,
            [e.target.name]: e.target.value,
        });
        // console.log(updateUserData)
    }

    const onUpdateSubmit = useCallback(
        async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://192.168.0.145/tasks/api/Patient_L/UpdateUser?user_ID=${updateUserData.user_ID}`, updateUserData)
        }catch(error){
            console.log('Error')
        }
        handleClose()
    },[updateUserData, handleClose])

    // creating function for opening update detail modal
    const updateModal=(par)=>{
    //    console.log(par)
       setUpdateUserData({
        user_ID:par.user_ID,
        first_Name: par.first_Name,
        last_Name: par.last_Name,
        user_Email: par.user_Email,
        user_Password: par.user_Password,
        user_Contact: par.user_Contact,
    })
        handleOpen()
    }

    const columns = [
        {
            field: 'user_ID',
            headerName: 'User_ID',
            width: 120
        },
        {
            field: 'first_Name',
            headerName: 'First Name',
            width: 150,
        },
        {
            field: 'last_Name',
            headerName: 'Last Name',
            width: 150,
        },
        {
            field: 'user_Email',
            headerName: 'User_Email',
            width: 250,
        },
        {
            field: 'user_Contact',
            headerName: 'User_Contact',
            width: 150,
        },
        {
            field: 'user_Password',
            headerName: 'User_Password',
            
            width: 150,
        },

        {
            field: 'Action',
            headerName: 'Action',
            width: 170,
            sortable: false,
            disableColumnMenu: true,
            
            renderCell: (params) => (
                <>
                    <IconButton>
                        <VisibilityIcon sx={{color:'#1E4D2B'}}/>
                    </IconButton>
                    <IconButton onClick={()=>{updateModal(params.row)}} >
                            <EditIcon sx={{color:'rgb(102, 12, 154)'}} />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(params.row.user_ID)} >
                        <DeleteIcon sx={{color:'rgb(212, 24, 14)'}} />
                    </IconButton>
                </>
            )

        },
    ];

    const getApiData = async () => {
        try {
            const response = await axios.get("http://192.168.0.145/tasks/api/Patient_L/GetUser")
            const dataWithId = response.data.result.map((row, id) => ({
                ...row,
                id: id
            }));
            setFetchData(dataWithId)
        }
        catch (error) {
            setError(error.message)
        }

    }

    useEffect(() => {
        getApiData()
        
    }, [onUpdateSubmit])


    return (
        <>
            <Box align="center">
                <h1>{error}</h1>
            </Box>

            <Box sx={{ height: 400, width: '95%', m: '10px auto' }}>
                <DataGrid
                    rows={fetchData}
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
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', margin:'5px, 0px'}}>
            <Box component='img' src={logo} sx={{ width: '150px', height: '30px', }} />
            <h3 align="center">Update Details Here!</h3>
            </Box>
                        
                <Grid container justifyContent={'space-evenly'} sx={{ mt: '10px', mb: '10px', }}>
                    <Grid item lg={5}>
                     
                        <form className='signForm'>
                        <TextField disabled  name='user_id' value={updateUserData.user_ID} id="outlined-basic" label="Serial Number*" variant="outlined" />
                            <TextField value={updateUserData.first_Name} onChange={targetUpdateField} name='first_Name' id="outlined-basic" label="First Name*" variant="outlined" />
                            <TextField onChange={targetUpdateField} value={updateUserData.last_Name} name='last_Name' id="outlined-basic" label="Last Name*" variant="outlined" />
                           
                        </form>
                
                    </Grid>

                    <Grid item lg={5}>
                    
                        <form className='signForm'>
                        <TextField onChange={targetUpdateField} name='user_Contact' value={updateUserData.user_Contact} id="outlined-basic" label="Phone Number*" variant="outlined" />
                            <TextField onChange={targetUpdateField} name='user_Email' value={updateUserData.user_Email}  type='email' id="outlined-basic" label="User Email*" variant="outlined" />
                            <TextField onChange={targetUpdateField} name='user_Password' value={updateUserData.user_Password}
                               
                                id="outlined-basic" label="Password*" variant="outlined" />
                           
                        </form>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', mt: '8px' }}>

                            <Button onClick={handleClose} variant="contained" sx={{ padding: '7px 12px', color: 'white', borderRadius: '20px', background: 'black' }}>Cancel</Button>

                            <Button onClick={onUpdateSubmit}
                             variant="contained" sx={{ padding: '7px 12px', color: 'white', borderRadius: '20px', backgroundColor: 'black' }}
                            >Update
                            </Button>
                        </Box>
                    </Grid>
                    </Grid>
                    
        </Box>
      </Modal>


        </>
    )
}
