import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { httpgetSingleReport } from '../../http/visitors'
import { Tablee } from './Report'

export default function CustomerReport() {

    const [report, setreport] = useState([])

    const getReport = async () => {
        const data = await httpgetSingleReport();
        setreport(data);
    }
    console.log(report, "new")

    useEffect(() => {
        getReport();
        return () => {
        }
    }, [])
    return (
        <Box>
            <Tablee report={report} />
        </Box>
    )
}
