import styled from 'styled-components';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import Router from '../../router';


// Styled Component
const ContainerBox = styled(Box)`
    height: 100%;
    width:100%;
    min-width: 1400px;
    min-height: 100vh; margin: 0px;
    position: relative;
    background: #F4F4F5;
`;
const SideBarContainer = styled(Box)`
    position: fixed;
    top: 0px;
    left: 0px;
    background: white;
    min-width: 350px;
    width: 350px;
    max-width: 350px;
    min-height: 100vh;
    z-index: 3;
`;
// Styled Component

/**
 * Returns UI (after the user logs in)
 * 
 * @params - none
 * @returns JSX.Element the Layout structure of the App ( UI after the user Logs in )
 */
const Layout = () => {
    return(
        <ContainerBox>
            <SideBarContainer>
                <Sidebar/>
            </SideBarContainer>
            <Box sx={{marginLeft: "355px", minHeight: "100vh", overflowX: "auto", marginRight: "5px"}}>
                <Router/>
            </Box>
        </ContainerBox>
    )
}

export default Layout;