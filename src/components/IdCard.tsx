import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function IdCard() {
    return (
        <Box sx={{ background: "grey", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

            <Card sx={{ width: "500px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", padding: "20px" }} >
                <Box display={"flex"} justifyContent={"center"} padding="20px">
                    <Box sx={{ display: "flex", flexDirection: "column" }} color="#AD1DEB">
                        <Typography variant='h3' fontWeight={"700"}>Rotaract</Typography>
                        <Typography variant='h5' fontWeight={"700"}>District 3292</Typography>
                    </Box>
                    <Box >
                        <img height={"50px"} width={"50px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>
                    </Box>
                </Box>
                <Box sx={{ background: "#AD1DEB", width: "100%" }} padding="20px">
                    <Typography align='center' variant="h4" component="h4" color={"white"} fontWeight={"700"}>Participant</Typography>
                </Box>
                <Box>
                    <img width={"300px"} height={"300px"} alt='profileimg' src='https://media.istockphoto.com/id/1095468748/vector/qr-code-abstract-vector-modern-bar-code-sample-for-smartphone-scanning-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Jnh2TAkAFm7QpaBgCyCuGbCA6nomDfk4-XiTsBhbHFk=' />
                    <Box color="#AD1DEB" textAlign={"center"}>
                        <Typography variant="h4" fontWeight={"700"}>Rtr. Shrisha Dhakal</Typography>
                        <Typography variant="h6" fontWeight={"700"} >Community Project Chair</Typography>
                        <Typography variant="h6">RAC Hetauda</Typography>
                        <Typography variant='body2'>Zone II</Typography>
                    </Box>
                </Box>
                <Box display="flex" width="100%" justifyContent={"space-evenly"} color="#AD1DEB">
                    <Box display="flex" >
                        <Box>
                            <Typography fontWeight={"700"}>Rotaract</Typography>
                            <Typography>District 3292</Typography>
                        </Box>
                        <img height={"50px"} width={"50px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>

                    </Box>
                    <Box></Box>
                    <Box display="flex">
                        <img height={"50px"} width={"50px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>

                        <Box >
                            <Typography fontWeight={"700"}>IMAGINE </Typography>
                            <Typography>Rotary </Typography>
                        </Box>
                    </Box>

                </Box>
            </Card >
        </Box >
    )
}
