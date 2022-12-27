import { Box } from '@mui/system'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
export default function TableSeamer() {
    return (
        <Box padding={"10px"}>
            <Skeleton height={"50px"} count={9} />
        </Box>
    )
}
