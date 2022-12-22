//import component
import Layout from './components/layout/Layout';

//mui section
import {Box} from '@mui/material'

// react router
import { Route , Routes } from "react-router-dom";
import { Dashboard } from '@mui/icons-material';




const Router = () =>{
    return(
        <Box sx={{padding: "40px 20px 10px 20px"}}>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
        </Box>
    )
}

export default Router