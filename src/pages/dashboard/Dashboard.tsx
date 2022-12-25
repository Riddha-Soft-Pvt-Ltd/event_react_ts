import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import CardholderTable from './CardholderTable';
import NewCardholderModal from './NewCardholderModal';



const BoxStyle = styled(Box)`

display:flex;
flex-direction:column;
gap:10px;
background:white;
max-width:1200px;
margin:32px 0;
`;
const AddCustomerBtn = styled(Button)`
    display: flex !important;
    padding: 10px 20px !important;
    color: white !important;
    background: #3150A1 !important;
    justify-content: space-between !important;
    align-items: center !important;
    gap: 20px !important;
    text-transform: uppercase !important;
    margin-right:10px !important;
`;
const Dashboard = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
    <Typography sx={{fontWeight:700,fontSize:'40px',lineHeight:'32px'}}>Dashboard</Typography>
    <BoxStyle>
        <Typography sx={{margin:'10px 0 0 15px' , fontSize:'24px'}}>Registered User</Typography>
        <Stack direction="row" mb={3} spacing={2} sx={{justifyContent: "flex-end", alignItems: "center"}}>
        <AddCustomerBtn onClick={() => setOpen(true)}>
                    <AddIcon/>
                    <Typography>NEW USER</Typography>
                </AddCustomerBtn>
        </Stack>
        <NewCardholderModal open={open} setOpen={setOpen}/>
        <CardholderTable/>
        
    </BoxStyle>
   
    </>
  )
}

export default Dashboard