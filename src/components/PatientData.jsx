import React, { useEffect, useState } from 'react'
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, AppBar, Toolbar, Typography, IconButton, TablePagination, Tooltip } from '@mui/material'
import axios from 'axios';
import { jsPDF } from 'jspdf'
import "jspdf-autotable"
import GetAppIcon from '@mui/icons-material/GetApp';
import logo from './image/logo.png'
import CloseIcon from '@mui/icons-material/Close';


export const PatientData = () => {

    const [data, setData] = useState([])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [pdfContent, setPdfContent] = useState(null);
    const [showButton, setShowButton] = useState(false)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const getData = async () => {
        const response = await axios.get('http://192.168.10.39/api/Appoinment_Schedule/GetUserByID?user_ID=10371')
        setData(response.data.result)
        // console.log(response.data.result.Patient)
    }


    useEffect(() => {
        getData()

    }, [])


    const downloadePdfFile = async () => {

        const headers = [
            'PatientID',
            'PracticeName',
            'PatientName',
            'Gender',
            'DateOfBirth',
            'ProviderName',
            'InsuranceName',
            'NoOfReadingDays',
            'FirstReadingDate',
            'cpt_99453',
            'cpt_99454',
            'cpt_99457',
            'cpt_99458',
            'CommTime',
            'Answered',
            'PhoneNo',
        ]

        const nestedHeaders = ['Patient_ID', 'Serial_No', 'Patient_Name', 'Patient_Contact', 'Doctor_Name', 'Appointment_Status', 'Appoinment_Date_Time'];


        const doc = new jsPDF({ orientation: 'landscape' })

        var styles = {
            fillColor: [200, 200, 200],
            textColor: ['rgb(37, 37, 37)'],
            fontSize: 9,
            fontStyle: 'bold',
            halign: 'center',
            valign: 'middle',
            lineWidth: 0.1,
            lineColor: ['rgb(54, 54, 54)'],

        };

        var bodyStyles = {
            textColor: ['rgb(37, 37, 37)'],
            fontStyle: 'normal',
            lineWidth: 0.1,
            lineColor: ['rgb(54, 54, 54)'],
        };

        var tableConfig = {
            startY: 16,
            margin: { top: 10, right: 0, bottom: 4, left: 8 },
            styles: styles,
            bodyStyles: bodyStyles,
            tableWidth: 280,
            tableHeight: 30,
        };

        var nestedTableConfig = {
            startY: 41,
            margin: { top: 0, right: 0, bottom: 4, left: 8 },
            styles: styles,
            bodyStyles: bodyStyles,
            tableWidth: 280,
            tableHeight: 30,
        };

        doc.autoTable({
            head: [headers],
            html: '#user_ID',
            margin: { top: 10 },
            styles: styles,
            bodyStyles: bodyStyles,
            ...tableConfig,
        });

        data?.Schedule?.map((item) => {
            doc.autoTable({
                head: [nestedHeaders],
                body: [
                    [item.user_ID, item.serial_No, item.patient_Name, item.doctor_Name, item.appointment_Status, item.appoinment_Date_Time, item.patient_Contact,
                    ]
                ],
                styles: styles,
                bodyStyles: bodyStyles,
                ...nestedTableConfig,
            });
        })

        doc.addImage(logo, 'PNG', 8, 3, 35, 8);
        doc.setFont("helvetica");
        doc.setFontSize(15);
        doc.text("RPM_MEDIREMOTE REPORT", 46, 9);

        const pdf = doc.output('blob')
        setPdfContent(URL.createObjectURL(pdf))
    }

    const handleDownloadPdf = () => {
        downloadePdfFile()
        setShowButton(true)
    };

    const handleClose = () => {
        setPdfContent(null)
        setShowButton(false)
    }


    return (
        <>
            <Box sx={{ ml: '4.5rem', mr: '3px' }}>
                <Box sx={{ flexGrow: 1, }}>
                    <AppBar position="static" sx={{ backgroundColor: 'white', padding: '7px 0px' }}>
                        <Toolbar>
                            <Box sx={{ flexGrow: 1, display: 'flex', gap: '12px' }}>
                                <Box component='img' src={logo} sx={{ width: '135px', height: '30px', mt: '5px' }} />
                                <Box>
                                    <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1, textTransform: 'uppercase', color: 'black', fontSize: '15px', fontWeight: 'bold' }}>
                                        rpm-mediremote report
                                    </Typography>

                                    <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1, color: 'black', fontSize: '13px', fontWeight: 'bold' }}>
                                        BillingReadinesReport
                                    </Typography>

                                </Box>
                            </Box>

                            <Box>
                                {showButton === false ? <Button variant="contained" onClick={handleDownloadPdf}>
                                    <Tooltip title="Download PDF">
                                        <GetAppIcon />
                                    </Tooltip>
                                </Button> : <Button variant="contained" onClick={handleClose}>
                                    <Tooltip title="Close PDF Viewer">
                                        <CloseIcon />
                                    </Tooltip>
                                </Button>}

                            </Box>
                        </Toolbar>
                    </AppBar>

                </Box>

                {pdfContent && (
                    <iframe 
                        title="PDF Viewer"
                        src={pdfContent}
                        style={{ width: '100%', height: '400px', border: 'none' }}
                       
                    />
                 )} 

                <TableContainer component={Paper}>
                    <Table id='user_ID' sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead sx={{ bgcolor: '#4576AD', color: 'white' }}>
                            <TableRow sx={{ color: 'white' }}>
                                <TableCell sx={{ color: 'white' }}>PatientID</TableCell>
                                <TableCell sx={{ color: 'white' }}>PracticeName</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">PatientName</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">Gender</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">DateOfBirth</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">ProviderName</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">InsuranceName</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">NoOfReadingDays</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">FirstReadingDate</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">cpt_99453</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">cpt_99454</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">cpt_99457</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">cpt_99458</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">CommTime</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">Answered</TableCell>
                                <TableCell sx={{ color: 'white' }} align="right">PhoneNo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {data?.Patient?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow
                                    key={row.user_ID}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell component="th" scope="row">
                                        {row.user_ID}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.practice_Name}
                                    </TableCell>
                                    <TableCell >{row.last_Name}</TableCell>
                                    <TableCell >{row.gender}</TableCell>
                                    <TableCell >{row.date_of_Birth}</TableCell>
                                    <TableCell >{row.provider_Name}</TableCell>
                                    <TableCell >{row.insurrance_Name}</TableCell>
                                    <TableCell >{row.noOfReadingDays}</TableCell>
                                    <TableCell >{row.firstReadingDate}</TableCell>
                                    <TableCell >{row.cpt_99453}</TableCell>
                                    <TableCell >{row.cpt_99454}</TableCell>
                                    <TableCell >{row.cpt_99457}</TableCell>
                                    <TableCell >{row.cpt_99458}</TableCell>
                                    <TableCell >{row.comeTime}</TableCell>
                                    <TableCell >{row.answerd}</TableCell>
                                    <TableCell >{row.user_Contact}</TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data?.Patient?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </>
    )
}

