//import component
import Facility from './pages/facilities/Facility';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

//mui section
import {Box} from '@mui/material'

// react router
import { Route , Routes } from "react-router-dom";







const Router = () =>{
    return(
        <Box sx={{padding: "40px 20px 10px 20px"}}>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/visitors' element={<Dashboard/>}/>
                <Route path='/facilities' element={<Facility/>}/>
                
            </Routes>
        </Box>
    )
}

export default Router