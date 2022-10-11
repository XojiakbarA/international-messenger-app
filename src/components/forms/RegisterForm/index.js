import { LoadingButton } from "@mui/lab"
import { Slide, Stack, TextField } from "@mui/material"
import HowToRegIcon from '@mui/icons-material/HowToReg'
import PasswordInput from "../../inputs/PasswordInput"
import {useFormik} from "formik"
import {registerValidationSchema} from "../../../utils/validate"
import {useDispatch, useSelector} from "react-redux"
import {authSelector} from "../../../store/selectors"
import {register} from "../../../store/asyncThunks/authAsyncThunk"

const RegisterForm = ({ setForm }) => {

    const dispatch = useDispatch()

    const { loading } = useSelector(authSelector)

    const { touched, errors, getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: registerValidationSchema,
        enableReinitialize: true,
        onSubmit: (data, { setErrors }) => {
            dispatch(register({ data, setForm, setErrors }))
        }
    })

    return (
        <Slide in direction={"left"}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        variant={"filled"}
                        label={"Name"}
                        error={ touched.name && Boolean(errors.name) }
                        helperText={ touched.name && errors.name }
                        { ...getFieldProps('name') }
                    />
                    <TextField
                        variant={"filled"}
                        label={"Email"}
                        error={ touched.email && Boolean(errors.email) }
                        helperText={ touched.email && errors.email }
                        { ...getFieldProps('email') }
                    />
                    <PasswordInput
                        variant={"filled"}
                        label={"Password"}
                        error={ touched.password && Boolean(errors.password) }
                        helperText={ touched.password && errors.password }
                        { ...getFieldProps('password') }
                    />
                    <PasswordInput
                        variant={"filled"}
                        label={"Confirm Password"}
                        error={ touched.confirmPassword && Boolean(errors.confirmPassword) }
                        helperText={ touched.confirmPassword && errors.confirmPassword }
                        { ...getFieldProps('confirmPassword') }
                    />
                    <LoadingButton
                        variant={"contained"}
                        startIcon={<HowToRegIcon/>}
                        type={"submit"}
                        loading={loading}
                    >
                        Register
                    </LoadingButton>
                </Stack>
            </form>
        </Slide>
    )
}

export default RegisterForm