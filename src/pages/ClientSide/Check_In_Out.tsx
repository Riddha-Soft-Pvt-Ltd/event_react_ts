import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import SideImage from '../../assets/images/image.png';
import Lottie from "lottie-react";
import Scanner from '../../assets/scanner.json'
import { Link } from 'react-router-dom';

//mui icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';




const BoxContainer = styled(Box)`
height:100%;
width:100%;
background-image:url(${SideImage});
background-size:57vw auto;
background-repeat: no-repeat;
background-position:center;
`

const Check_In_Out = () => {
    const [value, setValue] = useState('');
    const [content, setContent] = useState<any>('');
    const handleChange = (event: any) => {
        setValue(event.target.value as string);
    };

    console.log(content);

    return (
        <>
            <Grid container>
                <Grid item xs={7}>
                    <Link to={'/dashboard'} style={{ textDecoration: 'none' }} >
                        <Stack direction={'row'} alignItems='center'>
                            <KeyboardBackspaceIcon color={'primary'}  />
                            <Typography variant='h5' color={'primary'} sx={{ padding: '10px' }}>Go Back</Typography>
                        </Stack>
                    </Link>
                    <BoxContainer />
                </Grid>
                <Grid item xs={5} sx={{ background: '#F4FAFF' }}>

                    <Stack sx={{ height: '100vh' }} justifyContent='center' alignItems={'center'} spacing={4}>
                        <Typography variant='body2' sx={{ fontWeight: 400, fontSize: '32px' }}>Check In/Out</Typography>
                        <Lottie style={{ width: '250px', height: '250px' }} animationData={Scanner} loop={true} />
                        {/* Dropdown component  */}
                        <Typography variant={'h2'} textAlign={'center'}>Scan your Card </Typography>
                        <FormControl sx={{ width: '50%' }}>
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
                        <TextField value={content} label='Scan your Card' autoFocus onChange={(e) => {
                            setContent(e.target.value);
                        }} />

                    </Stack>
                </Grid>
            </Grid>


        </>
    )
}

export default Check_In_Out