import { Button, Typography, Box, Grid, List, ListItem, ListItemText, Stack, TextField, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

//mui icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { httpDeleteFacilities, httpGetFacilities, httpSaveFacilities } from '../../http/facilities';

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
                        <EditIcon />
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
            <Typography sx={{ margin: '10px 0 20px 15px', fontSize: '24px', textAlign: 'center' }}>Add Facility</Typography>
            <Stack gap={5} justifyContent={'center'} alignItems={'center'}>
              <TextField label='Enter new facility..' sx={{ width: '80%' }} value={textValue} onChange={(e) => setTextValue(e.target.value)} />
              {loading ? <>loading</> : <Button variant='contained' color='secondary' sx={{ width: '40%' }} onClick={saveFacility} >Add Facility</Button>}
            </Stack>
          </Grid>
        </Grid>
      </BoxStyle>
    </>
  )
}

export default Facility
