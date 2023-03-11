import { Button, Modal } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { ReactInstance, useRef } from 'react';
import Barcode from 'react-barcode'
import { shadows } from '@mui/system';
import { styled } from '@mui/material/styles';

import ReactToPrint from 'react-to-print';

export default function CardModel({ modelOpen, setModelOpen, cardholders }: { modelOpen: boolean, setModelOpen: (value: boolean) => void, cardholders: any }) {

  const componentRef = useRef<ReactInstance | null>(null);

  const Close = () => {
    setModelOpen(false)
  }
  return (
    <Modal open={modelOpen} onClose={Close} sx={{ width: "100%", height: "500px", padding: "2rem", border: "none", display: "flex", justifyContent: "center" }}>
      <Box sx={{
        flexDirection: "column",
        background: "		#E0E0E0",
        paddingX: "4rem",
        display: "flex",
        justifyContent: "center",
        borderRadius: "8px",

      }}>
        <Box
          ref={componentRef}
          sx={{
            borderRadius: "10px", height: "55Vh", width: "100%", boxShadow: 12, display: "flex", justifyContent: "center", alignItems: "center"
          }}
        >
          <Box display={"flex"} flexDirection="column" gap={3} alignItems="center" justifyContent={"center"} padding="16px" >
            <Barcode height={80} width={1.2} value={cardholders.code} />
            <Box color="#AD1DEB" textAlign={"center"}>
              <Typography variant="h6" color={"black"} fontWeight={"700"}>{cardholders.name}</Typography>
              <Typography variant="h4" color={"black"} fontWeight={"600"} >{cardholders.package?.name}</Typography>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box sx={{ display: "flex", padding: "5px", justifyContent: "space-around", marginTop: "20px", }}>
          <ReactToPrint
            trigger={() => <Button variant="contained" sx={{ background: "#AD1DEB", color: "white" }}>Print</Button>
            }
            content={() => componentRef?.current}
          />
          <Button onClick={Close}>close</Button>
        </Box>
      </Box >
    </Modal >
  )
}
