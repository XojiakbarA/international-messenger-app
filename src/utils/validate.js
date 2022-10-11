import * as yup from "yup"

export const loginValidationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required')
})

export const registerValidationSchema = yup.object({
    name: yup
        .string('Enter Your Name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
    confirmPassword: yup
        .string('Please re-type password')
        .required('Please re-type password')
        .when('password',
            {
                is: val => (val && val.length > 0),
                then: yup.string().oneOf(
                    [yup.ref('password')],
                    'Both password need to be the same'
                )
            })
})