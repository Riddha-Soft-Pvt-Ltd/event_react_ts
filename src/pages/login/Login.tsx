import { Box } from '@mui/material'
import styled from 'styled-components'
import FoodImage1 from '../../assets/images/background.jpg';
import FormSection from './FormSection';



const BoxContainer = styled(Box)`
height:100vh;
width:100vw;
background-image: url(${FoodImage1});
background-size:cover;
position:absolute;

`

const Login = () => {
  return (
    <BoxContainer>
      <FormSection/>
    </BoxContainer>
  )
}

export default Login
