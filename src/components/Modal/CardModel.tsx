import { Button, Modal } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ReactInstance, useRef } from 'react';
import QRCode from 'react-qr-code'

import ReactToPrint from 'react-to-print';

export default function CardModel({ modelOpen, setModelOpen, cardholders }: { modelOpen: boolean, setModelOpen: (value: boolean) => void, cardholders: any }) {

  const componentRef = useRef<ReactInstance | null>(null);

  const Close = () => {
    setModelOpen(false)
  }

  return (
    <Modal open={modelOpen} onClose={Close} sx={{ width: "100%", padding: "2rem", display: "flex", justifyContent: "center" }}>
      <Box sx={{
        flexDirection: "column",
        background: "white",
        paddingX: "5rem",
        display: "flex",
        justifyContent: "center",
        borderRadius: "8px",
        gap: "10px"
      }}>
        <Box
          ref={componentRef}
          sx={{
            border: 1, borderColor: 'primary.main',
            borderRadius: "8px"
          }}>
          <Box display={"flex"} justifyContent={"center"} padding="20px">
            <Box sx={{ display: "flex", flexDirection: "column" }} color="#AD1DEB">
              <Typography variant='h5' fontWeight={"700"}>Rotaract</Typography>
              <Typography fontWeight={"700"}>District 3292</Typography>
            </Box>
            <Box >
              <img height={"25px"} width={"25px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>
            </Box>
          </Box>
          <Box sx={{ background: "#AD1DEB" }} padding="20px">
            <Typography align='center' variant="h6" component="h6" color={"white"} fontWeight={"700"}>Participant</Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
            <QRCode style={{ height: "100px", width: "100px", padding: "20px" }} value={cardholders.code} />
            {/* <Typography variant="h6" fontWeight={"700"}>{cardholders.code}</Typography> */}
            <Box color="#AD1DEB" textAlign={"center"}>
              <Typography variant="h6" fontWeight={"700"}>{cardholders.name}</Typography>
              <Typography variant="h6" fontWeight={"600"} >{cardholders.designation}</Typography>
              <Typography sx={{ padding: "1rem" }}>{cardholders.email}</Typography>
            </Box>
          </Box>
          <Box display="flex" width="100%" justifyContent={"space-evenly"} color="#AD1DEB">
            <Box display="flex" alignItems={"center"} >
              <Box>
                <Typography sx={{ fontSize: "13px" }} fontWeight={"700"}>Rotaract</Typography>
                <Typography sx={{ fontSize: "12px" }}>District 3292</Typography>
              </Box>
              <img height={"20px"} width={"20px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>
            </Box>
            <Box display="flex" alignItems={"center"}>
              <Box >
                <Typography sx={{ fontSize: "12px" }} fontWeight={"700"}>IMAGINE </Typography>
                <Typography sx={{ fontSize: "12px" }}>Rotary </Typography>
              </Box>
              <img height={"20px"} width={"20px"} src={'https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-violet.png'} alt="rotary"></img>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <ReactToPrint
            trigger={() => <Button sx={{ background: "#AD1DEB", color: "white" }}>Print</Button>
            }
            content={() => componentRef?.current}
          />
          <Button onClick={Close}>close</Button>
        </Box>
      </Box >
    </Modal>
  )
}
