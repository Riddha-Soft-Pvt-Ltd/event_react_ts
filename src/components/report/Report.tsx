import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { singleVisitorReport } from '../../http/endpoints/endpoints';
import { httpgetReport } from '../../http/visitors';
import { customHeader } from '../../utils/token.utils';
import moment from 'moment';

export default function Report() {

    const [report, setreport] = useState([])
    const [visitor, setvisitor] = useState('')
    const [singleReport, setsingleReport] = useState([])
    const [skipTake, setSkipTake] = useState({ skip: 0, take: 10 });


    const getReport = async () => {
        const dataCont: any = await httpgetReport(skipTake.skip, skipTake.take);
        setreport(dataCont.data ?? []);
    }

    useEffect(() => {
        getReport();
    }, [skipTake])


    useEffect(() => {
        getReport();
        getVisitorDetails()
        return () => {
        }
    }, [])

    const getVisitorDetails = async () => {
        await axios.get(singleVisitorReport + visitor, { headers: customHeader() }).then((res) => {
            setsingleReport(res.data?.data ?? [])
        }).catch((err) => {
            console.log(err);
        })

    }

    const handleLoadMore = () => {
        setSkipTake({ skip: 0, take: skipTake.take + 10 })
    }

    return (
        <Box>
            <Typography variant="h5" >Report</Typography>
            <Box sx={{ display: "flex", marginY: "3vh" }} >
                <TextField sx={{ background: "white" }} onChange={(e) => setvisitor(e.target.value)} placeholder={"Search using code"}>sad</TextField>
                <Button variant="contained" onClick={getVisitorDetails}>Search</Button>
            </Box>
            <Tablee report={report} singleReport={singleReport} />
            <Button onClick={handleLoadMore}>Load More</Button>
        </Box>
    )
}


export const Tablee = ({ report, singleReport }: any) => {

    const Data = (singleReport && singleReport.length) ? singleReport : report;

    const getAllFacilitiesUsed = (facilityList: any) => {
        const used = facilityList.map((facility: any) => <p><b>
            {facility.facilityId.name.toUpperCase()} : {facility.checkInTime}
        </b></p>);
        return used;
    }

    return (
        <TableContainer sx={{ padding: "10px", background: "white" }}>
            <Table sx={{ minWidth: 650, background: "white" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>S.N</TableCell>
                        <TableCell>CheckIn Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>CheckIn Time</TableCell>
                        <TableCell>CheckOut Date</TableCell>
                        <TableCell>CheckOut Time</TableCell>
                        <TableCell align='right'>Facilites Used </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Data.map((datas: any, index: any) => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>{ moment(datas?.checkInDate).format("MMM Do YYYY")}</TableCell>
                                    <TableCell>{datas?.name}</TableCell>
                                    <TableCell>{datas?.code}</TableCell>
                                    <TableCell>{datas?.checkInTime}</TableCell>
                                    <TableCell>{moment(datas?.checkOutDate).format("MMM Do YYYY")}</TableCell>
                                    <TableCell>{datas?.checkOutTime}</TableCell>
                                    <TableCell align='right'>{getAllFacilitiesUsed(datas?.facilities_used)}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}