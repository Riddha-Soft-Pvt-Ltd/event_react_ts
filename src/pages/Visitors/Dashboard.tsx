import { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Stack, Typography, TextField, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import CardholderTable from './CardholderTable';
import NewCardholderModal from './NewCardholderModal';

import { VisitorContext } from '../../contexts/VisitorContext';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const btnStyle = {
  border: 0,
  margin: "5px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const Visotors = () => {
  const [open, setOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);

  const [loadMore, setLoadMore] = useState(false);

  const visitorContext = useContext(VisitorContext);

  useEffect(() => {
    visitorContext.getVisitorData();
  }, []);

  const header = <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Grid item xs={6}>
      <Typography sx={{ margin: '10px 0 0 15px', fontSize: '20px' }}>All Visitors</Typography>
    </Grid>
    <Grid item xs={6}>
      <Box>
        <Stack direction="row" mb={3} pt={2} spacing={2} sx={{ justifyContent: "flex-end", alignItems: "center" }}>
          <AddCustomerBtn onClick={() => setOpen(true)}>
            <AddIcon />
            <Typography>NEW USER</Typography>
          </AddCustomerBtn>
        </Stack>
      </Box>
    </Grid>
  </Grid>

  return (
    <>
      <Typography sx={{ fontWeight: 700, fontSize: '30px', lineHeight: '32px' }}>Visitors</Typography>
      <BoxStyle>
        {header}
        <NewCardholderModal open={open} setOpen={setOpen} />
        <SearchBar />
        {visitorContext.initialLoader || visitorContext.searchLoader ?
          <CircularLoader />
          :
          <CardholderTable
            visitors={visitorContext.searchMode ? visitorContext.searchData : visitorContext.visitors}
            modelOpen={modelOpen}
            setModelOpen={setModelOpen}
          />}
        {!visitorContext.searchMode &&
          (loadMore ? <CircularLoader /> :
            <button style={btnStyle} onClick={async () => {
              setLoadMore(true);
              await visitorContext.loadMoreVisitors()
              setLoadMore(false);
            }}>
              Load more <ExpandMoreIcon />
            </button>)
        }
      </BoxStyle>
    </>
  )
}

const CircularLoader = () => {
  return <Box sx={{ display: "flex", justifyContent: "center" }}>
    <CircularProgress />
  </Box>
}

const SearchBar = () => {
  const visitorContext = useContext(VisitorContext);
  return (
    <Grid container>
      <Grid item xs={4} style={{ display: 'flex', gap: 15 }}>
        <TextField value={visitorContext.searchText} label="search" onChange={(e) => visitorContext.setSearchText(e.target.value)}
          variant="outlined" sx={{ marginLeft: '10px' }} onKeyDown={(event) => {
            if (event.key === "Enter") {
              visitorContext.searchVisitors()
            }
          }} />
        {visitorContext.searchMode && <p
          onClick={() => {
            visitorContext.closeSearchMode();
            visitorContext.setSearchText('');
          }}>
          <CloseIcon />
        </p>}
      </Grid>
    </Grid>
  )
}


export default Visotors;

const BoxStyle = styled(Box)`
      display:flex;
      flex-direction:column;
      gap:10px;
      width:100%;
      min-height:60%;
      background:white;
      margin:32px 0;
`;

const AddCustomerBtn = styled(Button)`
      display: flex !important;
      padding: 10px 20px !important;
      color: white !important;
      background: #3150A1 !important;
      align-items: center !important;
      gap: 20px !important;
      text-transform: uppercase !important;
      margin-right:10px !important;
      justify-content: space-between !important;
`;
