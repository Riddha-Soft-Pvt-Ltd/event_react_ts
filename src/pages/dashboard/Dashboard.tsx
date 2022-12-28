import { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Stack, Typography, TextField, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import CardholderTable from './CardholderTable';
import NewCardholderModal from './NewCardholderModal';
import { httpGetVisitors, httpSearchVisitors } from '../../http/visitors';
import TableSeamer from '../../components/loader/TableSeamer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataGridDemo from '../../Test';

const BoxStyle = styled(Box)`
      display:flex;
      flex-direction:column;
      gap:10px;
      width:100%;
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

const Dashboard = () => {
  const [visitors, setVisitors] = useState<[]>([])
  const [skipTake, setSkipTake] = useState({ skip: 0, take: 10 });
  const [open, setOpen] = useState(false)
  const [modelOpen, setModelOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [searchText, setSearchText] = useState("");



  //search visitors
  const searchVisitors = async (search: string) => {
    setIsSearching(true);
    const searchedVisitors = await httpSearchVisitors(search);
    setVisitors(searchedVisitors);
  }

  const getAllVisitors = async (skip: number, take: number) => {
    const visitorsData = await httpGetVisitors(skip, take);
    setVisitors([...visitors, ...visitorsData]);
    setLoading(false);
    setLoadMore(false);
  }

  useEffect(() => {
    setLoading(true);
    getAllVisitors(skipTake.skip, skipTake.take);
    return () => {
    }
  }, [])

  return (
    <>
      <Typography sx={{ fontWeight: 700, fontSize: '30px', lineHeight: '32px' }}>Visitors</Typography>
      <BoxStyle>
        <Grid container>
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
        <NewCardholderModal open={open} setOpen={setOpen} getAllVisitors={() => getAllVisitors(0, 10)} />
        <Grid container>
          <Grid item xs={4}>
            <TextField label="search" onChange={(e) => setSearchText(e.target.value)}
              variant="outlined" sx={{ marginLeft: '20px' }} onKeyDown={(event) => {
                if (event.key === "Enter") {
                  searchVisitors(searchText)
                }
              }} />
          </Grid>
          <Grid item xs={8}>
            <div onClick={async () => {
              setIsSearching(false);
              setVisitors([]);
              setSkipTake({ skip: 0, take: 10 });
              await getAllVisitors(0, 10)
            }}> close</div>
          </Grid>
        </Grid>
        {loading ?
          <TableSeamer /> :
          <CardholderTable
            searchVisitors={searchVisitors}
            visitors={visitors}
            modelOpen={modelOpen}
            setModelOpen={setModelOpen} />}
        {!isSearching && (loadMore ?
          (<Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>) :
          <button style={{
            border: 0,
            margin: "5px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }} onClick={() => {
            setLoadMore(true);
            const skip = (skipTake.skip + 10); const take = 10;
            setSkipTake({ skip: skip, take: take });
            getAllVisitors(skip, take);
          }}>
            Load more <ExpandMoreIcon />
          </button>)}
          
      </BoxStyle>
    </>
  )
}

export default Dashboard