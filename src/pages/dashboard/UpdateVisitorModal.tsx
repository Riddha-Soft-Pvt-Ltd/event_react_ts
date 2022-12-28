import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import styled from 'styled-components'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { newVisitorSchema } from "../../utils/YupSchema";

const UpdateVisitorModal = ({ updateVisitor, updateModal, setUpdateModal, cardholders }: { updateModal: boolean, setUpdateModal: (value: boolean) => void, cardholders: any, updateVisitor: any }) => {

    const handleClose = () => { setUpdateModal(false); }

    const { register, reset, control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(newVisitorSchema),
        defaultValues: {
            designation: cardholders.designation,
            contact: cardholders.contact,
            email: cardholders.email,
            name: cardholders.name,
            clubName: cardholders.clubName,
        }
    });

    const onSubmit: (data: any) => void = (data) => {
        updateVisitor(cardholders._id, data);
        handleClose();
    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <Modal open={updateModal}
                onClose={handleClose}>
                <Box sx={style} component='form' onSubmit={handleSubmit(onSubmit)} >
                    <Typography sx={{ fontWeight: 400, fontSize: '24px', lineHeight: '133.2%' }}>Update User</Typography>
                    <PersonalFormStyle>
                        <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Personal Information</Typography>
                        <PersonalForm register={register} control={control} errors={errors} cardholders={cardholders} />
                    </PersonalFormStyle>
                    <ContactForm register={register} control={control} errors={errors} cardholders={cardholders} />
                    <Buttons handleClose={handleClose} />
                </Box>

            </Modal>
        </>
    )
}

export default UpdateVisitorModal;

const PersonalForm = ({ register, control, errors, cardholders }: { register: any, control: any, errors: any, cardholders: any }) => {
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} spacing={2} sx={{ width: '100%' }}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextField
                                label='Full Name'
                                type={'text'}
                                sx={{ width: '50%' }}
                                id="name"
                                onChange={onChange}
                                value={value}
                                error={errors.name && Boolean(errors.name.message)}
                                helperText={errors.name ? `${errors.name.message}` : ""}
                            />
                        </>
                    )}
                />
                <Controller
                    name="designation"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextField
                                label='Designation'
                                type={'text'}
                                sx={{ width: '50%' }}
                                id="designation"
                                onChange={onChange}
                                value={value}
                                error={errors.designation && Boolean(errors.designation.message)}
                                helperText={errors.designation ? `${errors.designation.message}` : ""}
                            />
                        </>
                    )}
                />
                <Controller
                    name="clubName"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextField
                                label='Club Name'
                                type={'text'}
                                sx={{ width: '50%' }}
                                id="clubName"
                                onChange={onChange}
                                value={value}
                                error={errors.clubName && Boolean(errors.clubName.message)}
                                helperText={errors.clubName ? `${errors.clubName.message}` : ""}
                            />
                        </>
                    )}
                />
            </Stack>
        </>
    )
}
const ContactForm = ({ register, control, errors, cardholders }: { register: any, control: any, errors: any, cardholders: any }) => {
    return (
        <>
            <Typography sx={{ fontWeight: 500, fontSize: '20px', margin: '24px 0' }}>Contact Information</Typography>
            <Stack direction={'row'} spacing={2} width='100%'>
                <Controller
                    name="contact"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextField
                                label='Phone'
                                type={'tel'}
                                sx={{ width: '50%' }}
                                id="contact"
                                onChange={onChange}
                                value={value}
                                error={errors.contact && Boolean(errors.contact.message)}
                                helperText={errors.contact ? `${errors.contact.message}` : ""}
                            />
                        </>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>

                            <TextField
                                label='E-mail'
                                type={'email'}
                                sx={{ width: '50%' }}
                                value={value}
                                id="email"
                                onChange={onChange}

                                error={errors.email && Boolean(errors.email.message)}
                                helperText={errors.email ? `${errors.email.message}` : ""}
                            />
                        </>
                    )}
                />
            </Stack>

        </>
    )
}

export const Buttons = ({ handleClose }: { handleClose: () => void }) => {

    return (
        <Stack direction={'row'} spacing={2} mt={4} justifyContent='flex-end' justifySelf={'flex-end'} width='100%' >
            <Button variant="outlined" color="error" onClick={handleClose} >Cancel</Button>
            <Button type={'submit'} variant='contained' color="secondary" >Update</Button>
        </Stack>
    )
}

const style = {
    position: 'absolute' as 'absolute',
    padding: "20px",
    width: 900,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 4,
    borderRadius: 4,
};

const PersonalFormStyle = styled(Box)`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;
margin-top:20px;
`