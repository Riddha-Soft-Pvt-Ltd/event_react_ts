import * as Yup from 'yup';

export const newVisitorSchema = Yup.object().shape({

    name : Yup.string().required('Enter your full name'),
    // email: Yup.string().email().required('Enter a valid email'),
    // contact: Yup.string().required('Enter your number')
    // .min(7, "Phone has to minimum 7 digits")
    // .max(10, "Phone number cannot exceed 10 characters"),
    designation: Yup.string().required('Enter your designation '),
    clubName: Yup.string().required('Enter your club name '),
    package: Yup.string().required('Select package '),
   
})