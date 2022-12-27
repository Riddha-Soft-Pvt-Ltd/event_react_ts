import { Modal } from '@mui/material'
import React from 'react'
import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import QRCode from 'react-qr-code'

export default function CardModel({ modelOpen, setmodelOpen, cardholders }: any) {
  console.log(cardholders)
  const handleClose = () => {
    setmodelOpen(false);
  }
  return (
    <Modal open={modelOpen} onClose={handleClose} >
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
          <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
            <QRCode style={{ height: "300px", width: "300px",padding:"20px" }} value={cardholders.code} />
            <Box color="#AD1DEB" textAlign={"center"}>
              <Typography variant="h4" fontWeight={"700"}>{cardholders.name}</Typography>
              <Typography variant="h6" fontWeight={"700"} >{cardholders.designation}</Typography>
              <Typography variant="h6">{cardholders.email}</Typography>
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
    </Modal>


  )
}
