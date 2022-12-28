//mui section
import { Box } from '@mui/material';

//import component
import Facility from './pages/facilities/Facility';
import Dashboard from './pages/dashboard/Dashboard';

// react router
import { Route, Routes } from "react-router-dom";
import VisitorContextContainer from './contexts/VisitorContext';

const Router = () => {
    return (
        <VisitorContextContainer>
            <Box sx={{ padding: "40px 20px 10px 20px" }}>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/visitors' element={<Dashboard />} />
                    <Route path='/facilities' element={<Facility />} />
                </Routes>
            </Box>
        </VisitorContextContainer>
    )
}

export default Router