import { Button, FormLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom';
import { singleVisitorReport, visitorsReport } from '../../http/endpoints/endpoints';
import { httpgetReport } from '../../http/visitors';

export default function Report() {

    const [report, setreport] = useState([])
    const [visitor, setvisitor] = useState('')
    const [singleReport, setsingleReport] = useState([])
    console.log(singleReport, "single reprot")
    const getReport = async () => {
        const data = await httpgetReport();
        setreport(data);
    }

    useEffect(() => {
        getReport();
        getVisitorDetails()
        return () => {
        }
    }, [])

    const getVisitorDetails = () => {

        axios.get(singleVisitorReport + visitor, { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhamVzaEBnbWFpbC5jb20iLCJpYXQiOjE2NzIzMDY5MzB9.xIx-2hh6vFXVj1yepWPtbYEWKneV0DnYkrmeC1dgge8" } }).then((res) => {
            setsingleReport(res.data?.data ?? [])
        }).catch((err) => {

        })

    }

    return (
        <Box>
            <Typography variant="h5" >Report</Typography>

            <Box sx={{ display: "flex", marginY: "3vh" }} >
                <TextField sx={{ background: "white" }} onChange={(e) => { setvisitor(e.target.value) }}>sad</TextField>
                <Button variant="contained" onClick={getVisitorDetails}>Search</Button>
            </Box>
            <Tablee report={report} singleReport={singleReport} />
        </Box>
    )
}


export const Tablee = ({ report, singleReport }: any) => {

    const Data = (singleReport && singleReport.length) ? singleReport : report;

    console.log(Data, "data")
    const getAllFacilitiesUsed = (facilityList: any) => {
        const used = facilityList.map((facility: any) => facility.name);
        return used.join(", ");
    }

    return (
        <TableContainer sx={{ padding: "10px", background: "white" }}>
            <Table sx={{ minWidth: 650, background: "white", }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>S.N</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Code</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Facilites Used </TableCell>
                    </TableRow>
                </TableHead>
                {
                    Data.map((datas: any, index: any) => {
                        return (
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="right">{datas?.name}</TableCell>
                                    <TableCell align="right">{datas?.code}</TableCell>
                                    <TableCell align="right">{datas?.date}</TableCell>
                                    <TableCell align="right">{getAllFacilitiesUsed(datas?.facilities_used)}</TableCell>
                                </TableRow>
                            </TableBody>
                        )
                    })
                }


            </Table>
        </TableContainer>
    )
}