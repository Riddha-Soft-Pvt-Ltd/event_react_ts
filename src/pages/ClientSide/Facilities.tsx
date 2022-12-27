import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideImage2 from '../../assets/images/SideImage2.png';
import Lottie from "lottie-react";
import Scanner from '../../assets/scanner.json'
//mui icons
import { GoBack } from './Check_In_Out';
import { httpGetFacilities } from '../../http/facilities';

const BoxContainer = styled(Box)`
height:100%;
width:100%;
background-image:url(${SideImage2});
background-size:50vw auto;
background-repeat: no-repeat;
background-position:center;
`

const Facilities = () => {
    const [value, setValue] = useState('');
    const [content, setContent] = useState<any>('');
    const [facilities, setFacilities] = useState([]);


    const handleChange = (event: any) => {
        setValue(event.target.value as string);
    };

    const getFacilities = async () => {
        const data = await httpGetFacilities();
        setFacilities(data);
    }

    useEffect(() => {
        getFacilities();
        return () => {
        }
    }, [])


    return (
        <div onClick={() => { }}>
            <Grid container>
                <GoBack />
                <Grid item xs={12} sx={{ background: '#F4FAFF' }}>
                    <Stack sx={{ height: '100vh' }} justifyContent='center' alignItems={'center'} spacing={4}>
                        <Typography variant='body2' sx={{ fontWeight: 400, fontSize: '32px' }}>Check Facility</Typography>
                        <Lottie style={{ width: '250px', height: '250px' }} animationData={Scanner} loop={true} />
                        {/* Dropdown component  */}
                        <Typography variant={'h3'} textAlign={'center'}>Scan your Card </Typography>
                        <FormControl sx={{ width: '20%' }}>
                            <InputLabel id="check">Choose Facility</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="check"
                                value={value}
                                onChange={handleChange}
                                label='Choose Facility'
                            >
                                {facilities.map((facility: any, index) => {
                                    return <MenuItem key={index} value={facility._id}>{facility.name}</MenuItem>
                                })}
                                <MenuItem value={2}>Out</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField value={content} label='Scan your Card' autoFocus onChange={(e) => {
                            setContent(e.target.value);
                        }} />

                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default Facilities