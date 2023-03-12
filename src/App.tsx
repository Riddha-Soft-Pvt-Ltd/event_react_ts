// mui imports
import { Box, Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'


import styled from 'styled-components'
import Layout from './components/layout/Layout';
import Check_In_Out from './pages/CheckIns/Check_In_Out';
import Facilities from './pages/CheckIns/Facilities';
import Login from './pages/Login/Login';


//styled component 
const AppContainer = styled(Box)`
width:100%;
`

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Layout />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
