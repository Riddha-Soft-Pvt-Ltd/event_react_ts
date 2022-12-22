// mui imports
import { Box, Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

//styled component 
import styled from 'styled-components'
import Layout from './components/layout/Layout';



const AppContainer = styled(Box)`
width:100%;
`

function App() {
  return (
    <AppContainer>
     
        <Layout />
      
    </AppContainer>
  );
}

export default App;
