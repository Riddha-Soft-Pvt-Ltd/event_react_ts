import { Button, Typography, Box, Grid, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import { textAlign } from '@mui/system';
import React, { useState } from 'react'
import styled from 'styled-components';


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
              <ListItem>
                <ListItemText secondary='Breakfast' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Lunch' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Tea' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Coffee' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Dinner' />
              </ListItem>
              <ListItem>
                <ListItemText secondary='Snacks' />
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