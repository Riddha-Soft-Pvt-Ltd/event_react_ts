import axios from 'axios';
import { useEffect, useState } from 'react'
import { allPackages, deletePackage, savePackage, updatePackage } from '../../http/endpoints/endpoints';
import { Button, Typography, Box, Grid, List, ListItem, ListItemText, Stack, TextField, IconButton, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import { httpGetFacilities } from '../../http/facilities';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from "lottie-react";
import empty from "../../assets/empty.json";

const BoxStyle = styled(Box)`
      display:flex;
      flex-direction:column;
      gap:10px;
      background:white;
      width:100%;
      height:100%;
      margin:32px 0;
`;

export default function Packages() {
    const [packages, setPackages] = useState([]);
    const [facilities, setFacilities] = useState<any[]>([]);

    const [name, setName] = useState("");
    const [selectedFacilities, setSelectedFacilites] = useState<any[]>([]);

    const [isUpdate, setIsUpdate] = useState(false);
    const [updateData, setUpdateData] = useState<any>();


    const getPackages = async () => {
        try {
            const { data, error }: any = await axios.get(allPackages);
            if (data && data.success) { setPackages(data.data); return; }
            return;
        } catch (error) { console.log(error) }
    }

    const addPackage = async () => {
        try {
            const { data, error }: any = await axios.post(savePackage, { name: name, facilities: selectedFacilities });
            if (data && data.success) { getPackages(); setName("") }
            else { console.log(error) }
        } catch (error) { console.log(error) }
    }

    const deletePackageData = async (id: string) => {
        try {
            const { data, error }: any = await axios.get(deletePackage + id);
            if (data && data.success) { getPackages() }
            else { console.log(error) }
        } catch (error) {

        }
    }

    const updatePackageData = async () => {
        try {
            const { data, error }: any = await axios.post(updatePackage + updateData?._id, { name: name });
            if (data && data.success) {
                getPackages();
                setName("");
                setIsUpdate(false);
            }
            else { console.log(error) }
        } catch (error) {

        }
    }

    const getFacilities = async () => {
        const data: never[] = await httpGetFacilities();
        setFacilities(data);
    }

    useEffect(() => {
        getPackages()
        getFacilities();
    }, [])


    return (
        <div>
            <Typography sx={{ fontWeight: 700, fontSize: '30px', lineHeight: '32px' }}>Packages</Typography>
            <BoxStyle>
                <Grid container>
                    <Grid item xs={6}>
                        <List>
                            {packages.length > 0 ? packages.map((data: any, index) => {
                                return <>

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <ListItem key={index}
                                                secondaryAction={
                                                    <>
                                                        <IconButton edge="start" aria-label="delete">
                                                            <EditIcon onClick={() => {
                                                                setIsUpdate(true);
                                                                setUpdateData(data);
                                                                setName(data.name)
                                                            }} />
                                                        </IconButton>
                                                        <IconButton onClick={() => deletePackageData(data._id)} edge="end" aria-label="edit">
                                                            <DeleteIcon color='error' />
                                                        </IconButton>
                                                    </>
                                                }>
                                                <ListItemText primary={(index + 1) + ". " + data.name} />
                                            </ListItem>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ marginLeft: 20 }}>
                                                {data.facilities && data.facilities.length > 0 && data.facilities.map((item: any, index: number) => {
                                                    return <ListItem key={index}>
                                                        <ListItemText primary={(index + 1) + ". " + item.name} />
                                                    </ListItem>
                                                })}
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </>
                            }) : <Lottie style={{ width: '350px', height: '350px' }} animationData={empty} loop={false} width={"200px"} height={"200px"} />}
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <>
                            <Typography sx={{ margin: '10px 0 20px 15px', fontSize: '24px', textAlign: 'center' }}>
                                {isUpdate ? "Update" : "Add"} Package
                            </Typography>
                            <Stack gap={5} justifyContent={'center'} alignItems={'center'}>
                                <TextField label='Package name' sx={{ width: '80%' }} value={name} onChange={(e: any) => { setName(e.target.value) }} />
                                <div style={{ width: '80%' }}>
                                    <InputLabel id="check">Choose Facility</InputLabel>
                                    {facilities.map((facility: any, index) => {
                                        return <MenuItem key={index} value={facility._id}><FormControlLabel control={<Checkbox onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedFacilites([...selectedFacilities, facility._id]);
                                            } else {
                                                let newSelectedFacilities = selectedFacilities;
                                                let ind = newSelectedFacilities.indexOf(facility._id);
                                                if (ind !== -1) {
                                                    newSelectedFacilities.splice(ind, 1);
                                                    setSelectedFacilites(newSelectedFacilities)
                                                }
                                            }
                                        }} />} label={facility.name} /></MenuItem>
                                    })}
                                </div>
                                {<Button variant='contained' color='secondary' sx={{ width: '40%' }} onClick={() => isUpdate ? updatePackageData() : addPackage()} >{isUpdate ? "Update" : "Add"}</Button>}
                            </Stack>
                        </>
                    </Grid>
                </Grid>
            </BoxStyle >
        </div>
    )
}
