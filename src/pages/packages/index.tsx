import axios from 'axios';
import { useEffect, useState } from 'react'
import { allPackages, deletePackage, savePackage, updatePackage } from '../../http/endpoints/endpoints';
import { Button, Typography, Box, Grid, List, ListItem, ListItemText, Stack, TextField, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

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
    const [name, setName] = useState("");
    const [updateData, setUpdateData] = useState<any>();
    const [isUpdate, setIsUpdate] = useState(false);

    const getPackages = async () => {
        try {
            const { data, error }: any = await axios.get(allPackages);
            if (data && data.success) { setPackages(data.data); return; }
            return;
        } catch (error) { console.log(error) }
    }

    const addPackage = async () => {
        try {
            const { data, error }: any = await axios.post(savePackage, { name: name });
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

    useEffect(() => {
        getPackages()
    }, [])

    return (
        <div>  <BoxStyle>
            <Grid container>
                <Grid item xs={6}>
                    <Typography sx={{ margin: '10px 0 0 15px', fontSize: '20px' }}>Packages</Typography>
                    <List>
                        {packages && packages.map((data: any, index) => {
                            return <ListItem key={index}
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
                        })}
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <>
                        <Typography sx={{ margin: '10px 0 20px 15px', fontSize: '24px', textAlign: 'center' }}>
                            {isUpdate ? "Update" : "Add"} Package
                        </Typography>
                        <Stack gap={5} justifyContent={'center'} alignItems={'center'}>
                            <TextField label='Package name' sx={{ width: '80%' }} value={name} onChange={(e) => { setName(e.target.value) }} />
                            {<Button variant='contained' color='secondary' sx={{ width: '40%' }} onClick={() => isUpdate ? updatePackageData() : addPackage()} >{isUpdate ? "Update" : "Add"}</Button>}
                        </Stack>
                    </>
                </Grid>
            </Grid>
        </BoxStyle >
        </div>
    )
}
