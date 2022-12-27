import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useCallback, useState, useEffect, useContext } from "react";
import styled from 'styled-components'
import { useForm, Controller } from "react-hook-form";

//tosify
import { toast } from 'react-toastify';

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
const NewCardholderModal = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) => {
    const handleClose = () => {
        setOpen(false);
    }
    const {
        register,
        reset,
        control,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
    });



    const onSubmit: (data: any) => void = (data) => {

        console.log(data);
        // handleClose();

        // const details = { ...data, photo: pic };
        // axios.post(endPoints.addNewCustomerUrl.toString(), {
        //     ...data
        // })
        // .then((resp) => {
        //     getCardHolderData();
        //     toast.success('New Cardholder Added');

        // })
        // .catch((error) => {
        //     toast.error('Error while creating new user')
        // })
        // .finally(() => {
        //     handleClose();
        // })

    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <Modal open={open}
                onClose={handleClose}>
                <Box sx={style} component='form' onSubmit={handleSubmit(onSubmit)} >
                    <Typography sx={{ fontWeight: 400, fontSize: '24px', lineHeight: '133.2%' }}>Add new User</Typography>

                    <PersonalFormStyle>
                        <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Personal Information</Typography>
                        <PersonalForm register={register} control={control} errors={errors} />
                    </PersonalFormStyle>

                    <ContactForm register={register} control={control} errors={errors} />
                    <Buttons handleClose={handleClose} />
                </Box>

            </Modal>
        </>
    )
}

export default NewCardholderModal

const PersonalForm = ({ register, control, errors }: { register: any, control: any, errors: any }) => {
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
                                error={errors.password && Boolean(errors.password.message)}
                                helperText={errors.password ? `${errors.password.message}` : ""}
                            />
                        </>
                    )}
                />
            </Stack>


            <Stack direction={'row'} spacing={2} width='100%'>
                {/* <Controller
                    name="code"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextField
                                label='Code'
                                type={'text'}
                                sx={{ width: '50%' }}
                                id="code"
                                onChange={onChange}
                                value={value}
                                error={errors.code && Boolean(errors.code.message)}
                                helperText={errors.code ? `${errors.code.message}` : ""}
                            />
                        </>
                    )} */}
                {/* /> */}
                {/* <Controller
                    name="citizenship"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <TextField
                                label='CitizenShip No.'
                                type={'text'}
                                sx={{ width: '50%' }}
                                id="citizenship"
                                onChange={onChange}
                                value={value}
                                error={errors.citizenship && Boolean(errors.citizenship.message)}
                                helperText={errors.citizenship ? `${errors.citizenship.message}` : ""}
                            />
                        </>
                    )}
                /> */}



            </Stack>


        </>
    )
}
const ContactForm = ({ register, control, errors }: { register: any, control: any, errors: any }) => {
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
                                error={errors.password && Boolean(errors.password.message)}
                                helperText={errors.password ? `${errors.password.message}` : ""}
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
                                id="email"
                                onChange={onChange}
                                value={value}
                                error={errors.email && Boolean(errors.email.message)}
                                helperText={errors.email ? `${errors.email.message}` : ""}
                            />
                        </>
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <>

                            <TextField
                                label='Address'
                                type={'text'}
                                sx={{ width: '50%' }}
                                id="address"
                                onChange={onChange}
                                value={value}
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
            <Button type={'submit'} variant='contained' color="secondary" >Save</Button>
        </Stack>
    )
}
