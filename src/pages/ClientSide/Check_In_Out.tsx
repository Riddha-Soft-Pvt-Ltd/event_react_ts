import { FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import Lottie from "lottie-react";
import Scanner from '../../assets/scanner.json'
import { Link } from 'react-router-dom';
import MessageModal from '../../components/Modal/MessageModal';

//mui icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { httpVisitorFacilitiesCheckIn, httpVisitorFacilitiesCheckOut } from '../../http/checkInCheckOut';

const Check_In_Out = () => {
    const [value, setValue] = useState("1");
    const [data, setdata] = useState<any>('');
    const [responseData, setresponse] = useState('')
    const [modelOpen, setmodelOpen] = useState(false)

    const scan = useRef<HTMLInputElement | null>(null);

    const handleChange = (event: any) => {
        setValue(event.target.value as string);
    };

    const visitorsGateCheckIn = async () => {
        const response = await httpVisitorFacilitiesCheckIn({ code: data.toUpperCase() });
        setresponse(response)
        if (response) {
            setmodelOpen(true)
            setTimeout(() => {
                setmodelOpen(false);
                setdata("");
            }, 1000);
        }
    }

    const visitorsGateCheckOut = async () => {
        const response = await httpVisitorFacilitiesCheckOut({ code: data.toUpperCase() });
        setresponse(response)
        if (response) {
            setmodelOpen(true)
            setTimeout(() => {
                setmodelOpen(false);
                setdata("");
            }, 1000);
        }
    }

    return (
        <>
            <MessageModal modelOpen={modelOpen} setmodelOpen={setmodelOpen} responseData={responseData} />
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
                                <MenuItem value={"1"}>In</MenuItem>
                                <MenuItem value={"2"}>Out</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            sx={{ width: '30%' }}
                            autoFocus
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    (value === "1") ? visitorsGateCheckIn() : visitorsGateCheckOut()
                                }
                            }}
                            ref={scan}
                            value={data}
                            onChange={(e) => setdata(e.target.value)} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Check_In_Out

export const GoBack = () => {
    return <Link to={'/visitors'} style={{ textDecoration: 'none', position: "absolute", top: "0", left: "1rem" }} >
        <Stack direction={'row'} alignItems='center'>
            <KeyboardBackspaceIcon color={'primary'} />
            <Typography variant='h5' color={'primary'} sx={{ padding: '10px' }}>Back</Typography>
        </Stack>
    </Link>
}