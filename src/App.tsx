// mui imports
import { Box, Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';


import styled from 'styled-components'
import Layout from './components/layout/Layout';
import Check_In_Out from './pages/ClientSide/Check_In_Out';
import Facilities from './pages/ClientSide/Facilities';
import Login from './pages/login/Login';


//styled component 
const AppContainer = styled(Box)`
width:100%;
`

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/vistor/checkin' element={<Check_In_Out/>}/>
        <Route path='vistor/facility' element={<Facilities/>}/>
        <Route path='/*' element={<Layout />} />
        
      </Routes>
     </AppContainer>
  );
}

export default App;
