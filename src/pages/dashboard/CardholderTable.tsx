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
    Box,
    TextField
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import QRCode from "react-qr-code";

const CardholderTable = ({ visitors }: { visitors: any }) => {
    return (
        <>
            <TextField label="search" variant="outlined" sx={{ width: '20%', marginLeft: '20px' }} />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableHeader />
                    </TableHead>
                    <TableBody>
                        {visitors && visitors.map((visitor: any, index: number) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                <TableCell sx={{ width: '10px' }}>{index + 1}</TableCell>
                                <TableCell sx={{ width: '10px' }}><QRCode value={visitor.code} style={{ height: "50", width: "50px" }} /></TableCell>
                                <TableCell >{visitor.name}</TableCell>
                                <TableCell >{visitor.contact}</TableCell>
                                <TableCell align='left'>{visitor.address}</TableCell>
                                <TableCell sx={{ width: '20px' }}>{visitor.email}</TableCell>
                                <TableCell sx={{ width: '20px' }}>{visitor.email}</TableCell>
                                <TableCell align='center'><ActionCollection cardholders={visitor} userID={visitor._id} getCardHolderData={() => { }} /></TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CardholderTable

const ActionCollection = ({ userID, cardholders, getCardHolderData }: { userID: string, cardholders: any, getCardHolderData: any }) => {
    // const [edit, setEdit] = useState<boolean>(false);

    // // for delete modal
    // const [deleteModal, setDeleteModal] = React.useState(false);
    // const handleOpen = () => setDeleteModal(true);

    // //for update modal
    // const [open, setOpen] = useState(false)
    // const handleOpenupdateModal = () => setOpen(true);

    // // for view
    // const opemModel = () => setEdit(true);

    // //delete api implementation 
    // const handleDelete = () => {
    //     var token = getToken();

    //     axios.delete(endPoints.deleteCardholderUrl.toString() + userID, {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //         .then((resp) => {
    //             getCardHolderData();
    //             toast.success('User Deleted',{autoClose:2000});
    //         })
    //         .catch((error) => {
    //             toast.error('Error white deleting..');
    //         })
    //         ;
    //     setDeleteModal(false);

    // }

    return (
        <Stack direction={'row'} spacing={1} >
            <ButtonGroup variant='text'>

                <Button color='success' ><VisibilityOutlinedIcon /></Button>
                <Button color='primary'  ><BorderColorOutlinedIcon /></Button>
                <Button color='error' ><DeleteForeverOutlinedIcon /></Button>
                {/* <UpdateNewCardholder cardholders={cardholders} open={open} setOpen={setOpen} />
                <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete} />
                <ViewCardholder cardholders={cardholders} edit={edit} setEdit={setEdit} /> */}
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
        <TableCell>
            <Stack direction='row' gap={1}>
                <LocationOnOutlinedIcon />
                <Typography>Address</Typography>
            </Stack>
        </TableCell>
        <TableCell align='center'>
            <Stack direction='row' gap={1}>
                <EmailOutlinedIcon />
                <Typography>Email</Typography>
            </Stack>
        </TableCell>
        <TableCell>
            <Typography>Designation</Typography>
        </TableCell>
        <TableCell>
            <Typography>Action</Typography>
        </TableCell>
    </TableRow>
}