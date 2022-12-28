import { FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import Scanner from '../../assets/scanner.json'
//mui icons
import { GoBack } from './Check_In_Out';
import { httpGetFacilities } from '../../http/facilities';
import axios from 'axios';
import { visitorsFacilityCheckInCheckOut } from '../../http/endpoints/endpoints';
import { customHeader } from '../../utils/token.utils';
import MessageModal from '../../components/Modal/MessageModal';

const Facilities = () => {
    const [value, setValue] = useState('');
    const [content, setContent] = useState<any>('');
    const [facilities, setFacilities] = useState<any[]>([]);
    const [modelOpen, setmodelOpen] = useState(false);
    const [responseData, setresponseData] = useState<any>("")
    const [loading, setLoading] = useState(false);

    const handleChange = (event: any) => {
        setValue(event.target.value as string);
    };

    const getFacilities = async () => {
        setLoading(true);
        const data: any[] = await httpGetFacilities();
        setFacilities(data);
        setValue(data[0]?._id)
        setLoading(false);
    }

    const facilityCheckIn = () => {
        axios.post(visitorsFacilityCheckInCheckOut, {
            code: content,
            facilityId: value
        }, { headers: customHeader })
            .then((resp) => {
                setresponseData(resp.data)
                if (responseData) {
                    setmodelOpen(true)
                    setTimeout(() => {
                        setmodelOpen(false);
                        setContent("")
                    }, 4000);
                }
            })
            .catch((error) => { setresponseData(error) })
    }

    useEffect(() => {
        getFacilities();
        return () => {
        }
    }, [])

    return (
        <div onClick={() => { }}>
            <MessageModal modelOpen={modelOpen} setmodelOpen={setmodelOpen} responseData={responseData} />
            <Grid container>
                <GoBack />
                <Grid item xs={12} sx={{ background: '#F4FAFF' }}>
                    <Stack sx={{ height: '100vh' }} justifyContent='center' alignItems={'center'} spacing={4}>
                        <Typography variant='body2' sx={{ fontWeight: 400, fontSize: '32px' }}>Check Facility</Typography>
                        <Lottie style={{ width: '250px', height: '250px' }} animationData={Scanner} loop={true} />
                        {/* Dropdown component  */}
                        <Typography variant={'h3'} textAlign={'center'}>Scan your Card </Typography>
                        {loading ? <>loading</> : <Stack sx={{ width: '100%' }} spacing={2} justifyContent='center' alignItems={'center'}>
                            <FormControl sx={{ width: '20%' }}>
                                <InputLabel id="check">Choose Facility</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="check"
                                    value={value}
                                    onChange={handleChange}
                                    label='Choose Facility'
                                    defaultValue={facilities[0]?._id}
                                    fullWidth
                                >
                                    {facilities.map((facility: any, index) => {
                                        return <MenuItem key={index} value={facility._id}>{facility.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <TextField
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') { facilityCheckIn(); }
                                }}
                                sx={{ width: '20%' }}
                                value={content}
                                label='Scan your Card'
                                autoFocus
                                onChange={(e) => {
                                    setContent(e.target.value);
                                }} />
                        </Stack>}
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default Facilities