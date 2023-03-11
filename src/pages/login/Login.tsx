import { Box } from '@mui/material'
import styled from 'styled-components'
import FormSection from './FormSection';



const BoxContainer = styled(Box)`
height:100vh;
width:100vw;
background:indigo;
background-size:cover;
position:absolute;

`

const Login = () => {
  return (
    <BoxContainer>
      <FormSection />
    </BoxContainer>
  )
}

export default Login
