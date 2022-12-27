import { Button, Modal } from '@mui/material'
import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import QRCode from 'react-qr-code'

export default function CardModel({ modelOpen, setModelOpen, cardholders }: { modelOpen: boolean, setModelOpen: (value: boolean) => void, cardholders: any }) {
  const Close = () => {
    console.log("cliclk")
    setModelOpen(false)
  }

  return (
    <Modal open={modelOpen} onClose={Close} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex", flexDirection: "column", background: "white", paddingX: "350px", borderRadius: "8px", gap: "10px  " }}>
        <Box display={"flex"} justifyContent={"center"} padding="20px">
          <Box sx={{ display: "flex", flexDirection: "column" }} color="#AD1DEB">
            <Typography variant='h3' fontWeight={"700"}>Rotaract</Typography>
            <Typography variant='h5' fontWeight={"700"}>District 3292</Typography>
          </Box>
          <Box >
            <img height={"50px"} width={"50px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>
          </Box>
        </Box>
        <Box sx={{ background: "#AD1DEB" }} padding="20px">
          <Typography align='center' variant="h4" component="h4" color={"white"} fontWeight={"700"}>Participant</Typography>
        </Box>
        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
          <QRCode style={{ height: "200px", width: "200px", padding: "20px" }} value={cardholders.code} />
          <Typography variant="h6" fontWeight={"700"}>{cardholders.code}</Typography>
          <Box color="#AD1DEB" textAlign={"center"}>
            <Typography variant="h4" fontWeight={"700"}>{cardholders.name}</Typography>
            <Typography variant="h6" fontWeight={"700"} >{cardholders.designation}</Typography>
            <Typography variant="h6">{cardholders.email}</Typography>
          </Box>
        </Box>
        <Box display="flex" width="100%" justifyContent={"space-evenly"} color="#AD1DEB">
          <Box display="flex" alignItems={"center"} >
            <Box>
              <Typography fontWeight={"700"}>Rotaract</Typography>
              <Typography>District 3292</Typography>
            </Box>
            <img height={"30px"} width={"30px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>

          </Box>
          <Box display="flex" alignItems={"center"}>

            <Box >
              <Typography fontWeight={"700"}>IMAGINE </Typography>
              <Typography>Rotary </Typography>
            </Box>
            <img height={"30px"} width={"30px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>

          </Box>

        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Button sx={{ background: "#AD1DEB", color: "white" }}>Print</Button>
          <Button onClick={Close}>close</Button>
        </Box>

      </Box >


    </Modal>


  )
}
