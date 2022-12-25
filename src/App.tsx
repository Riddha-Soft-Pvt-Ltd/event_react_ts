// mui imports
import { Box, Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';


import styled from 'styled-components'
import Layout from './components/layout/Layout';
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
        <Route path='/*' element={<Layout />} />
      </Routes>
     </AppContainer>
  );
}

export default App;
