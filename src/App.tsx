// mui imports
import { Box, Container, Typography } from '@mui/material';

//styled component 
import styled from 'styled-components'


const AppContainer = styled(Box)`
width:100%;
`

function App() {
  return (
    <AppContainer>
      <Typography>Hello</Typography>
    </AppContainer>
  );
}

export default App;
