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
    const [skipTake, setSkipTake] = useState({ skip: 0, take: 50 });


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
            <Typography variant="h5" >Visitors Checkin Report</Typography>
            <Box sx={{ display: "flex", marginY: "3vh" }} >
                <TextField sx={{ background: "white" }} onChange={(e) => setvisitor(e.target.value)} placeholder={"Search by user code"}>sad</TextField>
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
        const used: any[] = facilityList.map((facility: any) => facility.facilityId.map((item: any, index: number) =>
            <p key={index}>
                {item.name}
            </p>));
        let facilities = [...new Set(used)];
        return facilities;
    }

    const groupedByDate = Data.reduce((accumulator: any, currentValue: any) => {
        const { checkInDate, ...rest } = currentValue;

        if (!accumulator[moment(checkInDate).format("MMM Do YYYY")]) {
            accumulator[moment(checkInDate).format("MMM Do YYYY")] = [];
        }

        accumulator[moment(checkInDate).format("MMM Do YYYY")].push(rest);
        return accumulator;
    }, {});

    const groupedByDateWithKeys = Object.entries(groupedByDate).map(([key, value]) => ({ key, value }));

    return (
        <TableContainer sx={{ padding: "10px", background: "white" }}>
            {groupedByDateWithKeys.map((data: any, index: any) => {
                return <>
                    <Typography variant='h5' sx={{ paddingY: "15px" }}>Date: {data.key}</Typography>
                    <Table>
                        <TableHead >
                            <TableRow sx={{ background: "#afafaf9c", color: "white" }}>
                                <TableCell>S.N</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Code</TableCell>
                                <TableCell>CheckIn Time</TableCell>
                                <TableCell>CheckOut Time</TableCell>
                                <TableCell align='left'>Facilites Used </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.value.map((datas: any, index: any) => {
                                    console.log(datas.facilities_used)
                                    return (
                                        <TableRow sx={{ border: 0, }} >
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell sx={{ color: "gray", fontWeight: "bold" }}>{datas?.name}</TableCell>
                                            <TableCell>{datas?.code}</TableCell>
                                            <TableCell>{datas?.checkInTime}</TableCell>
                                            <TableCell>{datas?.checkOutTime && moment(datas?.checkOutTime, 'HH:mm:ss').format('h:mm:ss a')}</TableCell>
                                            <TableCell align='left'>{getAllFacilitiesUsed(datas?.facilities_used)}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </>
            })}
        </TableContainer >
    )
}