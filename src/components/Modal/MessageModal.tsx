import { Card, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Lottie from "lottie-react";

import React from 'react'
import Success from "../lottie/success.json"
import Error from "../lottie/error.json"


export default function MessageModal({ modelOpen, setmodelOpen, responseData }: any) {
    console.log(responseData)
    const Close = () => {
        setmodelOpen(false)
    }
    return (
        <Modal open={modelOpen} onClose={Close} sx={{ display: "flex", justifyContent: "center", alignItems: "center", border: "none", }} >
            {
                (responseData.success === true) ? (<>
                    <Card sx={{ background: "white", width: "60% ", border: "none", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "50px" }}>
                        <Lottie style={{ width: '200px', height: '200px' }} animationData={Success} loop={true} />
                        <Typography variant="h6" sx={{ border: "none" }}>{responseData?.message}</Typography>
                    </Card>
                </>) : (
                    <Card sx={{ background: "white", width: "60% ", border: "none", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "50px" }}>
                        <Lottie style={{ width: '200px', height: '200px' }} animationData={Error} loop={true} />
                        <Typography variant="h6" sx={{ border: "none" }}>  {responseData?.message}</Typography>


                    </Card>)
            }
        </Modal >
    )
}
