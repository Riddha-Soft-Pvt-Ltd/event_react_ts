import { Button, Typography, Box, Grid, List, ListItem, ListItemText, Stack, TextField, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

//mui icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { httpDeleteFacilities, httpGetFacilities, httpSaveFacilities, httpEditFacilities } from '../../http/facilities';
import { editFacilities, getFacilities } from '../../http/endpoints/endpoints';
import Container from '@mui/material/Container';

const BoxStyle = styled(Box)`
      display:flex;
      flex-direction:column;
      gap:10px;
      background:white;
      width:100%;
      height:100%;
      margin:32px 0;
`;

const Facility = () => {
  const [loading, setLoading] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [facilities, setFacilities] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState({});
  // const [content , setContent] = useState('');

  const saveFacility = async () => {
    setLoading(true);
    const success = await httpSaveFacilities({ name: textValue });
    if (success) {
      await getFacilities();
    }
    setLoading(false);
    setTextValue('');
  }

  const deleteFacility = async (id: string) => {
    const success = await httpDeleteFacilities(id);
    console.log(success)
    if (success) {
      await getFacilities();
    }
  }
  const editFacilities = async (id: string, toUpdateData: string) => {
    const success = await httpEditFacilities(id, { name: toUpdateData });
    console.log(success)
    if (success) {
      await getFacilities();
    }
  }

  const getFacilities = async () => {
    const data = await httpGetFacilities();
    setFacilities(data);
  }
  const updateHandle = (facility: any) => {
    setIsUpdate(true);
    setSelectedFacility(facility)
  }

  useEffect(() => {
    getFacilities();
    return () => {
    }
  }, [])


  return (
    <>
      <Typography sx={{ fontWeight: 700, fontSize: '30px', lineHeight: '32px' }}>Facilities</Typography>
      <BoxStyle>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ margin: '10px 0 0 15px', fontSize: '20px' }}>Available Facilites</Typography>
            <List>
              {facilities && facilities.map((facility: any, index) => {
                return <ListItem key={index}
                  secondaryAction={
                    <>
                      <IconButton edge="start" aria-label="delete">
                        <EditIcon onClick={() => updateHandle(facility)} />
                      </IconButton>
                      <IconButton onClick={() => { deleteFacility(facility._id) }} edge="end" aria-label="edit">
                        <DeleteIcon color='error' />
                      </IconButton>
                    </>
                  }>
                  <ListItemText primary={(index + 1) + ". " + facility.name} />
                </ListItem>
              })}
            </List>
          </Grid>
          <Grid item xs={6}>
            {isUpdate ?
              (<UpdateFacility isUpdate={isUpdate} setIsUpdate={setIsUpdate} toUpdateData={selectedFacility} editFacilities={editFacilities} />) :
              <Box sx={{ paddingBottom: "1rem" }}>
                <Typography sx={{ margin: '10px 0 20px 15px', fontSize: '24px', textAlign: 'center' }}>Add Facility</Typography>
                <Stack gap={5} justifyContent={'center'} alignItems={'center'}>
                  <TextField label='Enter new facility..' sx={{ width: '80%' }} value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                  {loading ? <>loading</> : <Button variant='contained' color='secondary' sx={{ width: '40%' }} onClick={saveFacility} >Add Facility</Button>}
                </Stack>
              </Box>
            }
          </Grid>
        </Grid>
      </BoxStyle >
    </>
  )
}

export default Facility


const UpdateFacility = ({ isUpdate, setIsUpdate, toUpdateData, editFacilities }: { isUpdate: any, setIsUpdate: any, toUpdateData: any, editFacilities: any, }) => {
  const [updatedData, setToUpdatedData] = useState(toUpdateData.name);

  const handleClick = () => {
    setIsUpdate(false);
  }

  useEffect(() => {
    setToUpdatedData(toUpdateData.name);
  }, [toUpdateData])

  return (
    <>
      <Typography sx={{ margin: '10px 0 20px 15px', fontSize: '24px', textAlign: 'center' }}>Update Facility</Typography>
      <Stack gap={5} justifyContent={'center'} alignItems={'center'}>
        <TextField multiline={true} label='Enter new facility..' sx={{ width: '80%' }} value={updatedData} onChange={(e) => {
          setToUpdatedData(e.target.value);
        }} />
        <Stack direction='row' spacing={2} justifyContent='space-between' sx={{ width: '79%' }}>
          <Button variant='contained' color='secondary' sx={{ width: "50%" }} onClick={() => {
            editFacilities(toUpdateData._id, updatedData);
            setIsUpdate(false);
          }} >Update</Button>
          <Button variant='outlined' color='error' sx={{ width: '50%' }} onClick={handleClick} >Cancel</Button>
        </Stack>
      </Stack>
    </>

  )
}