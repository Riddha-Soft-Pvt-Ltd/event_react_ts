import { Box, FormControl, Grid, Input, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import Lottie from "lottie-react";
import Scanner from '../../assets/scanner.json'
import { Link } from 'react-router-dom';
import MessageModal from '../../components/Modal/MessageModal';

//mui icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { httpVisitorFacilitiesCheckIn, httpVisitorFacilitiesCheckOut } from '../../http/checkInCheckOut';

const Check_In_Out = () => {
    const [value, setValue] = useState("1");
    const [focus, setFocus] = useState(true);
    const [data, setdata] = useState<any>('');
    const [responseData, setresponse] = useState('')
    const [modelOpen, setmodelOpen] = useState(false)
    console.log(responseData)
    const handleChange = (event: any) => {
        setFocus(false);
        setValue(event.target.value as string);
        setFocus(true);
    };

    if (modelOpen) {
        return (
            <MessageModal modelOpen={modelOpen} setmodelOpen={setmodelOpen} responseData={responseData} />
        )
    }

    const visitorsGateCheckIn = async () => {
        const response = await httpVisitorFacilitiesCheckIn({ visitorId: data });
        setresponse(response)
        if (response) {
            setmodelOpen(true)
        }
    }

    const visitorsGateCheckOut = async () => {
        const response = await httpVisitorFacilitiesCheckOut({ visitorId: data });
        setresponse(response)

        if (response) {
            setmodelOpen(true)
        }
    }

    return (
        <>
            <Grid container>
                <GoBack />
                <Grid item xs={12} sx={{ background: '#F4FAFF' }}>
                    <Stack sx={{ height: '100vh' }} justifyContent='center' alignItems={'center'} spacing={4}>
                        <Typography variant='body2' sx={{ fontWeight: 400, fontSize: '32px' }}> Visitiors Check In/Out</Typography>
                        <Lottie style={{ width: '200px', height: '200px' }} animationData={Scanner} loop={true} />
                        {/* Dropdown component  */}
                        <Typography variant={'h5'} textAlign={'center'}>Scan your Card</Typography>
                        <FormControl sx={{ width: '30%' }}>
                            <InputLabel id="check">Check In/Out</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="check"
                                value={value}
                                onChange={handleChange}
                                label='Check In/Out'
                            >
                                <MenuItem value={1}>In</MenuItem>
                                <MenuItem value={2}>Out</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField sx={{ width: '30%' }} autoFocus onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                (value === "1") ? visitorsGateCheckIn() : visitorsGateCheckOut()
                            }
                        }} onChange={(e) => setdata(e.target.value)} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Check_In_Out

export const GoBack = () => {
    return <Link to={'/dashboard'} style={{ textDecoration: 'none', position: "absolute", top: "0", left: "1rem" }} >
        <Stack direction={'row'} alignItems='center'>
            <KeyboardBackspaceIcon color={'primary'} />
            <Typography variant='h5' color={'primary'} sx={{ padding: '10px' }}>Back</Typography>
        </Stack>
    </Link>
}