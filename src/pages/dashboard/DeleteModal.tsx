import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};
export default function DeleteModal({ deleteModal, setDeleteModal, deleteUser, userID }: { deleteModal: boolean, setDeleteModal: (value: boolean) => void, deleteUser: any, userID: any }) {
    const handleClose = () => setDeleteModal(false);
    return (
        <div>
            <Modal
                open={deleteModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={'center'}>
                        Are You sure, You want To Delete??
                    </Typography>
                    <Stack direction="row" width={'100%'} justifyContent='space-evenly' mt={3}>
                        <Button variant='contained' onClick={() => {
                            deleteUser(userID);
                            handleClose();
                        }} >Yes</Button>
                        <Button variant='contained' onClick={handleClose}>No</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}