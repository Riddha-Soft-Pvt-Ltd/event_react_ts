//mui section
import { Box } from '@mui/material';

//import component
import Facility from './pages/facilities/Facility';
import Dashboard from './pages/dashboard/Dashboard';

// react router
import { Navigate, Route, Routes } from "react-router-dom";
import VisitorContextContainer from './contexts/VisitorContext';
import Report from './components/report/Report';
import CustomerReport from './components/report/CustomerReport';
import Packages from './pages/packages';
import Check_In_Out from './pages/ClientSide/Check_In_Out';
import Facilities from './pages/ClientSide/Facilities';

const Router = () => {
    return (
        <VisitorContextContainer>
            <Box sx={{ padding: "40px 20px 10px 20px" }}>
                <Routes>
                    <Route path='/' element={<Navigate to={"/visitors"} />} />
                    <Route path='/visitors' element={<Dashboard />} />
                    <Route path='/vistor/checkin' element={<Check_In_Out />} />
                    <Route path='/vistor/facility' element={<Facilities />} />
                    <Route path='/facilities' element={<Facility />} />
                    <Route path='/report' element={<Report />} />
                    <Route path='/singlereport' element={<CustomerReport />} />
                    <Route path='/packages' element={<Packages />} />
                </Routes>
            </Box>
        </VisitorContextContainer>
    )
}

export default Router