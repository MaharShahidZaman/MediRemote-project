import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import SideBar from './SideBar';

export const TableData = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [fetchData, setFetchData] = useState([])
    const [error, setError] = useState('')

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Feth Api

    const getApiData = async () => {
        try {
            const response = await axios.get("http://192.168.0.145/tasks/api/Patient_L/GetUser")
            setFetchData(response.data.result)
        }
        catch (error) {
            setError(error.message)
        }

    }

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <>
        <Box> 
       
        <Typography variant='h4' align='center' mt={'10px'} >{error}</Typography>
        </Box>
            
            <Paper elevation={4} sx={{ width: '90%', m: '30px auto' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">User_ID</TableCell>
                                <TableCell align="center">First_Name</TableCell>
                                <TableCell align="center">Last_Name</TableCell>
                                <TableCell align="center">Use_Email</TableCell>
                                <TableCell align="center">User_Contact</TableCell>
                                <TableCell align="center">User_Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fetchData?.map((item) => {
                                return (
                                    <TableRow key={'user-Id'}>
                                        <TableCell align="center" >
                                            {item.user_ID}
                                        </TableCell>
                                        <TableCell align="center" >
                                            {item.first_Name}
                                        </TableCell>
                                        <TableCell align="center" >
                                            {item.last_Name}
                                        </TableCell>
                                        <TableCell align="center" >
                                            {item.user_Email}
                                        </TableCell>
                                        <TableCell align="center" >
                                            {item.user_Contact}
                                        </TableCell>
                                        <TableCell align="center" >
                                            {item.user_Password}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={fetchData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );

}
