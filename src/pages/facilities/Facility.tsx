import { Button, Typography, Box, Grid, List, ListItem, ListItemText, Stack, TextField, IconButton } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components';

//mui icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BoxStyle = styled(Box)`

display:flex;
flex-direction:column;
gap:10px;
background:white;
max-width:700px;
height:500px;
margin:32px 0;
`;

const Facility = () => {
  const [textValue,setTextValue] = useState('');
  const handleClick = () =>{
    console.log(textValue);
  }
   return (
    <>
      <Typography sx={{ fontWeight: 700, fontSize: '40px', lineHeight: '32px' }}>Facilities</Typography>
      <BoxStyle>
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ margin: '10px 0 0 15px', fontSize: '24px' }}>Available Facilites</Typography>
            <List>
              <ListItem
               secondaryAction={
                <>
                <IconButton edge="start" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon/>
                </IconButton>
                </>
              }>
                <ListItemText primary='Breakfast' />
              </ListItem>
              

            </List>
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{ margin: '10px 0 20px 15px', fontSize: '24px', textAlign:'center' }}>Add Facility</Typography>
            <Stack gap={5} justifyContent={'center'} alignItems={'center'}>
              <TextField label='Enter new facility..' sx={{width:'80%'}} onChange={(e) => setTextValue(e.target.value)}/>
              <Button variant='contained' color='secondary' sx={{width:'40%'}} onClick={handleClick} >Add Facility</Button>
            </Stack>
          </Grid>
        </Grid>
      </BoxStyle>
    </>
  )
}

export default Facility
