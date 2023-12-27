import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { HeaderContainer } from './HeaderContainer';
import InfoIcon from '@mui/icons-material/Info';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import SideBar from './SideBar';

export const DataGridTable = () => {

    const columns = [
        {
            field: 'Action',
            headerName: 'Action',
            pinnable: false,
            sortable: false ,
            width: 170,
            disableColumnMenu:true,

            renderCell: (params) => (
                <>
                    <PhonelinkSetupIcon sx={{ color: 'gray', }} fontSize="small" />
                    <VisibilityIcon sx={{ color: 'gray' }} fontSize="small" />
                    <BorderColorIcon sx={{ color: 'gray', }} fontSize="small" />
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

    const rows = [
        { id: 1, patId: 19, phone: '1234', rpm: '0s', reading: '0', firstName: 'Jon', medicalAssistant: 'Shahid', provider: 'Jon', deviceAction: '12-11-2023', firstReaction: '23-44-1933', age: 14 },
        { id: 2, patId: 13, phone: '55456', rpm: '0s', reading: '0', firstName: 'Cersei', medicalAssistant: 'Zaman', provider: 'Cersei', deviceAction: '22-08-2012', firstReaction: '12-11-2023', age: 31 },
        { id: 3, patId: 15, phone: '55452', rpm: '0s', reading: '0', firstName: 'Jaime', medicalAssistant: null, provider: 'Jaime', deviceAction: '01-02-1913', firstReaction: '02-02-2029', age: 31 },
        { id: 4, patId: 12, phone: '1913', rpm: '0s', reading: '0', firstName: 'Arya', medicalAssistant: null, provider: 'Arya', firstReaction: '22-01-2014', deviceAction: '44-11-2020', age: 11 },
        { id: 5, patId: 56, phone: '3535', rpm: '0s', reading: '0', firstName: 'Daenerys', medicalAssistant: null, firstReaction: '22-01-2016', deviceAction: '03-04-2022', provider: 'Daenerys', age: null },
        { id: 6, patId: 35, phone: '64734', rpm: '0s', reading: '0', firstName: 'Mehar', medicalAssistant: null, provider: 'Shahid', firstReaction: '22-01-2018', deviceAction: '03-05-2022', age: 150 },
        { id: 7, patId: 23, phone: '787', rpm: '0s', reading: '0', firstName: 'Ferrara', medicalAssistant: null, provider: 'Ferrara', firstReaction: '22-01-2020', deviceAction: '23-03-1914', age: 44 },
        { id: 8, patId: 11, phone: '777', npm: '0s', reading: '0', firstName: 'Rossini', medicalAssistant: null, provider: 'Rossini', deviceAction: '23-03-1914', firstReaction: '23-04-1913', age: 36 },
        { id: 9, patId: 66, phone: '9987', rpm: '0s', reading: '0', firstName: 'Harvey', medicalAssistant: null, provider: 'Harvey', firstReaction: '22-01-2024', deviceAction: '22-05-2023', age: 65 },
    ];


    return (
        <>
        <Box>
            <HeaderContainer />
            <Box sx={{ height: 500, width: '94%', ml:'6%' }}>
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
        </>
    )
}
