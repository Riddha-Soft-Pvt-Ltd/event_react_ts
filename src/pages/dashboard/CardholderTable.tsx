import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
    Paper,
    Stack,
    Typography,
    Button,
    ButtonGroup,
} from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import QRCode from "react-qr-code";
import CardModel from '../../components/Modal/CardModel';
import { useState } from 'react';

const CardholderTable = ({ visitors, setModelOpen, modelOpen, searchVisitors }: any) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableHeader />
                </TableHead>
                <TableBody>
                    {visitors && visitors.length > 0 ? visitors.map((visitor: any, index: number) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell sx={{ width: '10px' }}>{index + 1}</TableCell>
                            <TableCell sx={{ width: '10px' }}><QRCode value={visitor.code} style={{ height: "50", width: "50px" }} /></TableCell>
                            <TableCell >{visitor.name}</TableCell>
                            <TableCell >{visitor.contact}</TableCell>
                            <TableCell align='left'>{visitor.email}</TableCell>
                            <TableCell >{visitor.clubName}</TableCell>
                            <TableCell >{visitor.designation}</TableCell>
                            <TableCell align='center'>
                                <ActionCollection modelOpen={modelOpen} setModelOpen={setModelOpen} cardholders={visitor} userID={visitor._id} getCardHolderData={() => { }} /></TableCell>
                        </TableRow>
                    )) : <p> No Visitors Data</p>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CardholderTable

const ActionCollection = ({ userID, cardholders }: { userID: string, cardholders: any, getCardHolderData: any, setModelOpen: any, modelOpen: any }) => {
    const [open, setOpen] = useState(false);
    return (
        <Stack direction={'row'} spacing={1} >
            <ButtonGroup variant='text'>
                <Button color='success' onClick={() => setOpen(true)}  ><VisibilityOutlinedIcon /></Button>
                <Button color='primary'  ><BorderColorOutlinedIcon /></Button>
                <Button color='error' ><DeleteForeverOutlinedIcon /></Button>
                <CardModel cardholders={cardholders} modelOpen={open} setModelOpen={setOpen} />
            </ButtonGroup>
        </Stack>
    )
}


const TableHeader = () => {
    return <TableRow>
        <TableCell><Typography>S.N</Typography>
        </TableCell>
        <TableCell><Typography>Code</Typography>
        </TableCell>
        <TableCell><Typography>First Name</Typography>
        </TableCell>
        <TableCell>
            <Stack direction='row' gap={1}>
                <LocalPhoneOutlinedIcon />
                <Typography>Contact</Typography>
            </Stack>
        </TableCell>

        <TableCell align='center'>
            <Stack direction='row' gap={1}>
                <EmailOutlinedIcon />
                <Typography>Email</Typography>
            </Stack>
        </TableCell>
        <TableCell>
            <Typography>Club Name</Typography>
        </TableCell>
        <TableCell>
            <Typography>Designation</Typography>
        </TableCell>
        <TableCell>
            <Typography>Action</Typography>
        </TableCell>
    </TableRow>
}